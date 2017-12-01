import * as actions from '../category/actions';

export function loadResponse(state = null, { type, payload }) {
  switch(type) {
    case RESPONSE_LOAD:
      return payload;
    default:
      return state;
  }
}

export function loadPage(state = false, { type, payload }) {
  switch(type) {
    case PAGE_LOAD:
      return true;
    case RESPONSE_LOAD:
    case ERROR_LOAD:
      return false;
    default:
      return state;
  }
}

export function pageError(state = null, { type, payload }) {
  switch(type) {
    case ERROR_LOAD:
      return payload;
    case RESPONSE_LOAD:
    case PAGE_LOAD:
      return null;
    default:
      return state;
  }
}