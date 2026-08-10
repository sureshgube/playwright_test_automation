import { Given, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

Given('I open the example homepage', async () => {
  await page.goto('https://example.com');
});

Then('the page title should contain {string}', async (expectedText: string) => {
  const title = await page.title();
  if (!title.includes(expectedText)) {
    throw new Error(`Expected title to contain "${expectedText}", but was "${title}"`);
  }
});
