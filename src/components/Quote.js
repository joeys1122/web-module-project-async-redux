import React from 'react';
import { connect } from 'react-redux';

import { getQuote } from '../actions';

const Quote = props => {
  const { quote, isFetching, error, getQuote } = props;

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className="Quote">
      <button onClick={handleClick}>Get A Random Quote!</button>
      <div className="Quote-Content">
        {isFetching && <p>Getting Quote...</p>}
        {quote.content && <p>"{quote.content}"</p>}
        {quote.originator.name && <p>-{quote.originator.name}</p>}
        {error && <p className='Error'>ERROR: {error}</p>}
      </div>
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