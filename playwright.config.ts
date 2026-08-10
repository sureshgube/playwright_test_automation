import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'https://example.com'
  },
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]]
});
