import { HORIZ_CONTAINER_CAP } from "../../../src/wab/shared/Labels";
import {
  createTutorialDataSource,
  Framed,
  removeCurrentProject,
  setupNewProject,
} from "../../support/util";

const TUTORIAL_DB_TYPE = "northwind";

describe("Postgres Data Source", () => {
  beforeEach(() => {
    createTutorialDataSource(TUTORIAL_DB_TYPE);
    return setupNewProject({
      name: "Postgres Data Source",
    });
  });

  afterEach(() => {
    cy.deleteDataSource();
    removeCurrentProject();
  });

  it("postgres basic queries", () => {
    cy.withinStudioIframe(() => {
      const customers = [
        "Sven Ottlieb",
        "Paula Wilson",
        "Rene Phillips",
        "Eduardo Saavedra",
        "Carlos González",
      ];
      cy.createNewPageInOwnArena("Homepage").then((page: Framed) => {
        // Creating customers query ordered by country
        cy.switchToComponentDataTab();
        cy.addComponentQuery();
        cy.pickDataSource("TutorialDB");
        cy.selectDataPlasmicProp(
          "data-source-modal-pick-resource-btn",
          "customers"
        );
        cy.selectDataPlasmicProp("data-source-sort", "city");
        cy.setDataPlasmicProp("data-source-pagination-size", "5");
        cy.saveDataSourceModal();
        // Add repeated stack with list of contact_name from $queries.query
        cy.insertFromAddDrawer(HORIZ_CONTAINER_CAP);
        cy.repeatOnCustomCode("$queries.query.data");
        cy.insertFromAddDrawer("Heading");
        cy.bindTextContentToObjectPath(["currentItem", "contact_name"]);
        // Verify render on design mode and live frame
        customers.forEach((c) => {
          page.rootElt().should("contain", c);
        });
        cy.withinLiveMode(() => {
          customers.forEach((c) => {
            cy.contains(c).should("exist");
          });
        });
      });
      // Verify it works on focused arenas
      cy.waitForNewFrame(() => cy.turnOffDesignMode()).then((page: Framed) => {
        customers.forEach((c) => {
          page.rootElt().should("contain", c);
        });
      });

      cy.refreshFocusedArena();
      cy.getFramed().then((page: Framed) => {
        customers.forEach((c) => {
          page.rootElt().should("contain", c);
        });

        cy.focusFrameRoot(page);
        // Create state to test $steps result of operations
        cy.addState({
          name: "insertedId",
          variableType: "text",
          accessType: "private",
          initialValue: undefined,
        }).wait(200);
        cy.insertFromAddDrawer("Text");
        cy.bindTextContentToObjectPath(["insertedId"]);

        // Create button with Update by operation
        cy.insertFromAddDrawer("Button");
        cy.bindTextContentToCustomCode(`"Update"`);
        cy.addInteraction("onClick", [
          {
            actionName: "dataSourceOp",
            args: {
              dataSourceOp: {
                integration: "TutorialDB",
                args: {
                  operation: { value: "updateById" },
                  resource: { value: "customers" },
                  "data-source-modal-keys-customer_id-json-editor": {
                    isDynamicValue: true,
                    value: "$queries.query.data[0].customer_id",
                  },
                  "data-source-modal-variables-contact_name-json-editor": {
                    value: "New Name",
                  },
                },
              },
            },
          },
          {
            actionName: "updateVariable",
            args: {
              variable: ["insertedId"],
              operation: "newValue",
              value: `($steps.tutorialdbUpdateById.data[0].customer_id)`,
            },
          },
        ]);
        // Create button with Create operation
        cy.insertFromAddDrawer("Button");
        cy.bindTextContentToCustomCode(`"Create"`);
        cy.addInteraction("onClick", [
          {
            actionName: "dataSourceOp",
            args: {
              dataSourceOp: {
                integration: "TutorialDB",
                args: {
                  operation: { value: "create" },
                  resource: { value: "customers" },
                  "data-source-modal-variables-company_name-json-editor": {
                    value: "Testing",
                  },
                  "data-source-modal-variables-contact_name-json-editor": {
                    value: "Created Name",
                  },
                  "data-source-modal-variables-city-json-editor": {
                    value: "Aaa",
                  },
                  "data-source-modal-variables-customer_id-json-editor": {
                    value: "CREATED",
                  },
                },
              },
            },
          },
          {
            actionName: "updateVariable",
            args: {
              variable: ["insertedId"],
              operation: "newValue",
              value: `($steps.tutorialdbCreate.data[0].customer_id)`,
            },
          },
        ]);
        cy.withinLiveMode(() => {
          cy.contains("Update").click();
          cy.wait(5000);
          customers[0] = "New Name";
          customers.forEach((c) => {
            cy.contains(c).should("exist");
          });
          cy.contains("DRACD").should("exist");
          cy.contains("Create").click();
          cy.wait(5000);
          customers[4] = "Created Name";
          customers.forEach((c) => {
            cy.contains(c).should("exist");
          });
          cy.contains("CREATED").should("exist");
        });
      });
      cy.checkNoErrors();
    });
  });
});
