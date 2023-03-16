beforeEach(() => {
  cy.visit("http://localhost:3004/");
});

describe("initial load", () => {
  it("should contain page & trends title", () => {
    cy.contains("Twitter Trends");
    cy.contains("Worldwide Trends");
  });
});

describe("country selection", () => {
  it("should select a country from selectbox and update the trends title", () => {
    const country = "Turkey";

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(100);
    cy.get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains(country)
      .click(0, 0, { force: true });

    cy.contains(`${country} Trends`);
  });
});

describe("eye button", () => {
  it("should toggle trends-box div on eye button click", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(100);

    cy.get("button").click();
    cy.get("h1").should("not.visible");
  });
});
