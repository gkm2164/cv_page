import {SectionAction, SectionState} from "./types";
import {COLLAPSE_SECTION, EXPAND_SECTION} from "./actions";

export default function sectionReducer(state: SectionState = {
                                         isFolded: false
                                       },
                                       {type}: SectionAction): SectionState {
  switch (type) {
    case EXPAND_SECTION:
      return {
        isFolded: false,
      }
    case COLLAPSE_SECTION:
      return {
        isFolded: true,
      }
    default:
      return state;
  }
}