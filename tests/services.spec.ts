import { test, expect } from "@playwright/test";
import { navigateToServices } from "../src/services";
const { BASE_URL } = require("../utils/constants");
import percySnapshot from '@percy/playwright';
test("Automate Proejcts naviagtion", async ({ page }) => {
  await page.goto(BASE_URL);
  test.setTimeout(300000);
  await navigateToServices(page);
    await percySnapshot(page, 'services');
});
