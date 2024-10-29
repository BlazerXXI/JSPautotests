const { test, expect } = require("@playwright/test");

test("Check the page title", async ({ page }) => {
	await page.goto("https://example.com");
	await expect(page).toHaveTitle("Example Domain");
});
