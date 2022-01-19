import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_ERROR } from "../actions";

const initialState = {
  quote: {
    content: '',
    originator: {
      name: ''
    }
  },
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        quote: initialState.quote,
        isFetching: true,
        error: ''
      }
    case GET_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        isFetching: false,
        error: ''
      }
    case GET_QUOTE_ERROR:
      return {
        ...state,
        quote: initialState.quote,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}