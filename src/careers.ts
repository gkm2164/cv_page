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
            "title": "Zero-touch marketplace",
            "period": "Feb. 2020 ~ Apr. 2020",
            "descriptions": [
              "Remove hardcoded marketplace ID and migrate to API which manages all marketplace metadata",
              "Implemented class usage retrievers(using Javassist) to automatically identifying and documenting hardcoded spots"
            ],
          }
        ],
      },
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