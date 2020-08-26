const should = require('should');
const config = require('./config');
const YouTube = require('../lib/ytube');


const youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);
const Ids = [
    "---KhTqjC4M",
]
youTube.getById(Ids, (err, response) => {
    if (err) console.log(err);
    console.log(JSON.stringify(response));
});