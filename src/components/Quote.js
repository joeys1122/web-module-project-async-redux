import React from 'react';
import { connect } from 'react-redux';

import { getQuote } from '../actions';

const Quote = props => {
  const { quote, isFetching, error } = props;
  const handleClick = () => {
    props.getQuote();
  }

  return (
    <div className="Quote">
      <button onClick={handleClick}>Generate A Random Quote!</button>
      {isFetching && <p>Generating Quote...</p>}
      {quote.content && <p>"{quote.content}"</p>}
      {quote.originator.name && <p>-{quote.originator.name}</p>}
      {error && <p>ERROR: {error}</p>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getQuote })(Quote);