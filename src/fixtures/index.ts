import { test as base, Page } from '@playwright/test';
import colors from 'colors';

const testURL = process.env.TEST_URL;


type TestFixtures = {
    host: Page;
    testURL: string;
};

// Extend basic test by providing a "table" fixture.
const test = base.extend<TestFixtures>({
    host: async ({ page }, use) => {
        const errorLogs: Array<string> = [];
        const requestErrors: Array<string> = [];

        page.setDefaultTimeout(20000);

        page.on('response', async (response) => {
            if (response.status() >= 400) {
                requestErrors.push(`Error requesting: ${response.url()}, status: ${response.status()}`);
            }
        });

        await use(page);

        if (errorLogs.length) console.log(colors.red('Error logs: '), colors.yellow(`${errorLogs}`));
        if (requestErrors.length) console.log(colors.red('Request errors: '), colors.yellow(`${requestErrors}`));
    },
    testURL: testURL,
});

export default test;
