import {CareerEntry} from "./types";

const careers: CareerEntry = {
  "work-experiences": {
    "id": "work-experiences",
    "title": "Work Experiences",
    "entries": [
      {
        "company": "Amazon",
        "location": "Canada",
        "tenure": "Dec. 2019 ~ Present",
        "desc": "Our team manages vendor central which makes the vendors to register their products through web forms. Recently, our team migrated old HTML UI into React UI form.",
        "team": "Seller Central Experiences, SLICE team",
        "projects": [
          {
            "title": "Zero-touch marketplace",
            "period": "Feb. 2020 ~ Apr. 2020",
            "descriptions": [
              "Remove hardcoded marketplace ID and migrate to API which manages all marketplace metadata",
              "Implemented class usage retrievers(using Javassist) to automatically identifying and documenting hardcoded spots"
            ],
          },
          {
            "title": "External ID(GTIN, UPC like Barcodes) exemption",
            "period": "Apr.2020 ~ Jul. 2020",
            "descriptions": [
              "Allow the vendors to register products which does not have external ID.",
              "Successfully implemented and deployed to worldwide"
            ],
          },
          {
            "title": "Prismo, Migrating HTML UI to React UI for item managements",
            "period": "Nov.2020 ~ Dec.2020",
            "descriptions": [
              "Involved in implementing UI tests",
              "Implementing Automatated dynamically filling data on React.js form fields, and submission tests."
            ],
          },
          {
            "title": "Optional External ID, Package Hierarchy",
            "period": "Jan. 2020",
            "descriptions": [
              "Implementing logic for backend side",
              "Implemented Generic topological sort which can handle different types of Nodes"
            ],
          }
        ],
      },
      {
        "company": "Kakao",
        "location": "Republic of Korea",
        "tenure": "Apr. 2018 ~ Oct. 2019",
        "desc": "Our team manages middle layer services with microservices",
        "team": "Integrated Search II Team",
        "projects": []
      }
    ],
  },
  "opensource-contributions": {
    "id": "opensource-contributions",
    "title": "Opensource Contributions",
    "entries": [],
  },
  "educations": {
    "id": "educations",
    "title": "Educations",
    "entries": [],
  },
  "publications": {
    "id": "publications",
    "title": "Publications",
    "entries": [],
  }
};

export default careers;