const YouTube = require('../lib/ytube');
const config = require('./config');

const youTube = new YouTube();

youTube.setKey(config.key);
let count = 0;

function getVideos(category, region, token = null) {
    if (token) {
        youTube.setNextPageToken(token);
    }
    youTube.getMostPopularByCategoryAndRegion(50, category, region, function(error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(JSON.stringify(result.pageInfo));
            // console.log(JSON.stringify(result, null, 2));
            const videos = result.items;
            count += videos.length;
            if (result.nextPageToken) {
                let token = result.nextPageToken;
                console.log(token)
                setTimeout(() => {
                    getVideos(category, region, token);
                }, 2000);
            } else {
                console.log('Finished, total videos', count);
                count = 0;
            }
        }
    });
}

getVideos(10, 'AU');