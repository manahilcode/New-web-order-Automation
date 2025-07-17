import { test, expect } from "@playwright/test";
import { navigateToBlogs } from "../src/blogs";
const { BASE_URL } = require("../utils/constants");
import percySnapshot from '@percy/playwright';

test("Automate Proejcts naviagtion", async ({ page }) => {
  await page.goto(BASE_URL);
  test.setTimeout(200000);
  await navigateToBlogs(page);
    await percySnapshot(page, 'blogs');
});
