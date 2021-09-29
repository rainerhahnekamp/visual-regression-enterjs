it("should do visual regression against the holidaycard", () => {
  cy.visit(
    "http://localhost:4400/iframe.html?id=eternal-holidaycard--default&viewMode=story"
  );
  cy.document().toMatchImageSnapshot();
});
