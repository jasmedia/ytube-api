const YouTube = require('../lib/ytube');
const config = require('./config');

const youTube = new YouTube();

youTube.setKey(config.key);
// youTube.getById('HcwTxRuq-uk,vIu85WQTPRc', (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(result, null, 2));
//   }
// });

youTube.getMostPopularByCategoryAndRegion(2, 10, 'AU', function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
});