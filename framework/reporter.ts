import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from "@playwright/test/reporter";
import * as fs from "fs";

class MyReporter implements Reporter {
  path = "failed.txt";

  async onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);

    if (fs.existsSync(this.path)) {
      fs.unlinkSync(this.path);
      console.log(`Successfully deleted '${this.path}'.`);
    } else {
      console.log(`'${this.path}' does not exist.`);
    }
  }

  async onTestBegin(test: TestCase, result: TestResult) {
    console.log(`Starting test ${test.title}`);
  }

  async onTestEnd(test: TestCase, result: TestResult): Promise<void> {
    console.log(`Finished test ${test.title}: ${result.status}`);

    const regex = /@TEST_TP-\d+/;
    const match = test.title.match(regex);

    if (match && result.status === "failed") {
      const failedTest = `${match[0]}\n`;

      try {
        fs.appendFileSync(this.path, failedTest);
      } catch (error) {
        fs.writeFileSync(this.path, failedTest);
      }
    }
  }

  async onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;
