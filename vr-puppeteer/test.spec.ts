it.skip("screenshot the holidays", async () => {
  await page.goto("http://localhost:4200/holidays", {
    waitUntil: "networkidle0",
  });
  expect(await page.screenshot()).toMatchImageSnapshot();
});

it.each([
  "default",
  "minimal",
  "overflown",
  "sold-out",
  "empty",
  "tiny-image",
  "on-sale",
  "sale-and-sold",
])("should do visual regression for holidays - %s", async (story) => {
  await page.goto(
    `http://localhost:8080/iframe.html?id=eternal-holidaycard--${story}`,
    { waitUntil: "networkidle0" }
  );
  expect(await page.screenshot()).toMatchImageSnapshot();
});
