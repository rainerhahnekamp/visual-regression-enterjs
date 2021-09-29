import { test, expect } from "@playwright/test";

[
  "default",
  "minimal",
  "overflown",
  "sold-out",
  "empty",
  "tiny-image",
  "on-sale",
  "sale-and-sold",
].forEach((story) => {
  test(`holiday card: ${story}`, async ({ page }) => {
    await page.goto(
      `http://localhost:8080/iframe.html?id=eternal-holidaycard--${story}`
    );
    expect(await page.screenshot()).toMatchSnapshot(
      `eternal-holidaycard--${story}.png`
    );
  });
});
