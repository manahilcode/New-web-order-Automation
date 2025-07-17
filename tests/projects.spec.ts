import { test, expect } from "@playwright/test";
import { visitProjectCards } from "../src/project";
import percySnapshot from '@percy/playwright';
const { BASE_URL } = require("../utils/constants");

test("Automate Proejcts naviagtion", async ({ page, context }) => {
  await page.goto(BASE_URL);
  const now = new Date().toISOString();
  test.setTimeout(100000);
  await visitProjectCards(page);
    await percySnapshot(page, 'projects');
});
