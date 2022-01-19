import axios from "axios";

export const GET_QUOTE = "GET_QUOTE";
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
export const GET_QUOTE_ERROR = "GET_QUOTE_ERROR";

export const getQuote = () => dispatch => {
  dispatch({ type: GET_QUOTE });
  axios.get('https://quotes15.p.rapidapi.com/quotes/random/?rapidapi-key=4e6ed5eff8mshacad30c4fe7db60p1fea14jsn80ec9e1b0423')
    .then(res => {
      dispatch({ type: GET_QUOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_QUOTE_ERROR, payload: err.response.data.message});
    })
}