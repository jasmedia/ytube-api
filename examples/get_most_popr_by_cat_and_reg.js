const YouTube = require('../lib/ytube');
const config = require('./config');

const youTube = new YouTube();

youTube.setKey(config.key);

youTube.getMostPopularByCategoryAndRegion(2, 10, 'AU', function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
});