import { test, expect } from "@playwright/test";
import { navigateToIndustries } from "../src/industries";
import percySnapshot from '@percy/playwright';
const { BASE_URL } = require("../utils/constants");

test("Automate Proejcts naviagtion", async ({ page, context }) => {
  await page.goto(BASE_URL);
  const now = new Date().toISOString();
  test.setTimeout(120000);
  await navigateToIndustries(page);
    await percySnapshot(page, 'industries');
});
