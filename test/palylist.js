const should = require('should');
const config = require('./config');
const YouTube = require('../lib/ytube');

const playlistId = 'UUaL_5r1bu_WzRTsiyRwTvuw';

const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

youTube.getPlayListsItemsById(playlistId, (err, response) => {
    if (err) console.log(err);
    console.log(JSON.stringify(response));
});