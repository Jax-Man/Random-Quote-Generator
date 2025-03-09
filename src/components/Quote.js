import React, { useEffect } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import { fetchQuote } from '../features/quote';
import { twitterSocial, blueSkySocial, tumblrSocial } from '../features/social'

function Quote() {
    const quote = useSelector((state) => state.quote);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);
    

  return (
    <div>
        <h1>Quote Generator</h1>
        <div className="quote">
            <p onChange={
                dispatch(twitterSocial(quote.value)) &&
                dispatch(blueSkySocial(quote.value)) &&
                dispatch(tumblrSocial(quote.value))
            } id='text'>{quote.value.quote}</p>
            <h3 id='author'>{quote.value.author}</h3>
        </div>
    </div>
  )
}

export default Quote