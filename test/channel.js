/* global it, describe */
const should = require('should');
const config = require('./config');
const YouTube = require('../lib/ytube');


const youTube = new YouTube();
youTube.setKey(config.key);
const channelIds = [
    "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    "UC29ju8bIPH5as8OGnQzwJyA"
]
youTube.getChannelById(channelIds, (err, response) => {
    if (err) console.log(err);
    console.log(JSON.stringify(response));
});