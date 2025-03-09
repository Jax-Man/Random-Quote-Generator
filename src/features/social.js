import { createSlice } from "@reduxjs/toolkit";

const twitter = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
const blueSky = 'https://bsky.app/intent/compose?text=';
const tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp';

export const socialSlice = createSlice({
    name: 'social',
    initialState: {value: {
        twitter,
        blueSky,
        tumblr}},
    reducers: {
        twitterSocial: (state, action) => {
            state.value.twitter = `${twitter}"${action.payload.quote}" -${action.payload.author}`;
        },

        blueSkySocial: (state, action) => {
            state.value.blueSky = `${blueSky}"${action.payload.quote}" -${action.payload.author}`;
        },

        tumblrSocial: (state, action) => {
            state.value.tumblr = `${tumblr}&caption=${action.payload.author}&content="${action.payload.quote}"&canonicalUrl=https%3A%2F%2Ftumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
        },
    },
});

export const { twitterSocial, blueSkySocial, tumblrSocial } = socialSlice.actions;

export default socialSlice.reducer;