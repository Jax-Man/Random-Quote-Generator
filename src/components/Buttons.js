import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../features/quote';



function Buttons() {
    const social = useSelector((state) => state.social);
    const dispatch = useDispatch();
  return (
    <div className="buttons">
        <div className="social">
            <a href={social.value.twitter} id='tweet-quote'><button>X</button></a>
            <a href={social.value.blueSky} id='bluesky-quote'><button>Bluesky</button></a>
            <a href={social.value.tumblr} id='tumblr-quote' className="tumblr-share-button" ><button>Tumblr</button></a>
        </div>
        <button id='new-quote' onClick={() => {
            dispatch(fetchQuote());
        }}>New Quote</button>
    </div>
  )
};



export default Buttons;