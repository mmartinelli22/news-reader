describe("User Flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jpWw4XQtkRyplJEanHSnWbDdKgJfOGpw",
      {
        fixture: "/example.json",
      }
    )
      .as("sampleData")
      .visit("http://localhost:3000");
  });

  it("Should display stubbed data", () => {
    cy.wait("@sampleData")
      .its("response.body.results")
      .should("have.length", 3)
      .get(".single-article-container")
      .get("p")
      .first()
      .should("contain", "BOOKS")
      .get("h2")
      .first()
      .should("contain", "Bono, With or Without U2")
      .get(".byline")
      .should("contain", "By Alan Light");
  });

  it("Should lead the user to a details page on article title click", () => {
    cy.get("h2")
      .last()
      .should(
        "contain",
        "James Cameron and the Cast of ‘Avatar: The Way of Water’ Hold Their Breath"
      )
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get(".details-container")
      .should("exist")
      .get("h1")
      .should("contain", "James Cameron")
      .get(".byline")
      .should("contain", "By Kyle Buchanan")
      .get(".published")
      .should("contain", "Tuesday, October 25 2022")
      .get(".abstract")
      .should("contain", "The original was the biggest hit ever")
      .get(".website-anchor")
      .should("exist")
      .get("button")
      .should("contain", "Return Home");
  });

  it("Should take the user back to the article list after hitting the Return Home button", () => {
    cy.get("h2")
      .last()
      .should(
        "contain",
        "James Cameron and the Cast of ‘Avatar: The Way of Water’ Hold Their Breath"
      )
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get("button")
      .should("contain", "Return Home")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });

  it("Should take the user to the article page on the NY Times website", () => {
    cy.get("h2")
      .last()
      .should(
        "contain",
        "James Cameron and the Cast of ‘Avatar: The Way of Water’ Hold Their Breath"
      )
      .click()
      .url()
      .should("eq", "http://localhost:3000/details")
      .get(".website-anchor")
      .then((link) => {
        cy.request(link.prop("href")).its("status").should("eq", 200);
      });
  });
});
