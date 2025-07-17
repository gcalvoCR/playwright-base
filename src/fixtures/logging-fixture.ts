import { test as base, expect, Page } from '@playwright/test';
import colors from 'colors';

const testURL = process.env.TEST_URL ;


type LoggingFixtures = {
  page: Page;
};

export const test = base.extend<LoggingFixtures>({
  page: async ({ page }, use) => {
    const errorLogs: Array<string> = [];
    const requestErrors: Array<string> = [];
    page.setDefaultTimeout(20000);

    page.on('response', async (response) => {
        if (response.status() >= 299) {
            requestErrors.push(`Error requesting: ${response.url()}, status: ${response.status()}`);
        }
    });
    

    // Use this page in the test
    await use(page);

    if (errorLogs.length) console.log(colors.red('Error logs: '), colors.yellow(`${errorLogs}`));
    if (requestErrors.length) console.log(colors.red('Request errors: '), colors.yellow(`${requestErrors}`));

    // Optionally: logout or cleanup
  },
});


