import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  paths: ["features/**/*.{feature,feature.md}"],
  require: ["steps/**/*.ts"],
  importTestFrom: "./framework/fixtures/ObjectFixture.ts",
  requireModule: ["ts-node/register"],
});

export default defineConfig({
  testDir,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: "https://www.saucedemo.com",

    trace: process.env.CI ? "on-first-retry" : "retain-on-failure",
    screenshot: "only-on-failure",
  },
  reporter: [
    ["html", { outputFolder: "./outcome/html", open: process.env.CI ? "never" : "on-failure" }],
    ["line"],
    ["junit", { outputFile: "./outcome/test-results/results.xml" }],
    ["json", { outputFile: "results.json" }],
    ["./framework/reporter.ts"],
  ],
  projects: [
    {
      name: "chromium",
      use: devices["Desktop Chrome"]
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],
});
