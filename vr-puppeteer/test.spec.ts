describe("Google", () => {
  it('should display "google" text on page', async () => {
    await page.goto("https://www.orf.at");
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it("should work", () => {
    expect(1).toBe(1);
  });
});
