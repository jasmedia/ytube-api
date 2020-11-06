# ytube-api

[![Version](https://img.shields.io/npm/v/ytube-api.svg)](https://www.npmjs.com/package/youtube-api) [![Downloads](https://img.shields.io/npm/dt/ytube-api.svg)](https://www.npmjs.com/package/youtube-api) [![PayPal][badge_paypal_donate]][paypal-donations]

<a href="https://www.buymeacoffee.com/B6ALpqT" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

YouTube API v3 implementation for NodeJS

#### **Requirement**

API Key. To create API Key follow the steps https://cloud.google.com/docs/authentication/api-keys

## Usage: 

#### **Installation**

```npm install ytube-api```

#### Example
List category videos based on Region:

```
const youTube = new YouTube();

youTube.setKey('API_KEY');

youTube.getMostPopularByCategoryAndRegion(2, 10, 'AU', function(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
});
```

Get Channel details by IDs

```
const youTube = new YouTube();
youTube.setKey('API_KEY');
const channelIds = [
    "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    "UC29ju8bIPH5as8OGnQzwJyA"
]
youTube.getChannelById(channelIds, (err, response) => {
    if (err) console.log(err);
    console.log(JSON.stringify(response));
});
```

Get Video details by ID.

```
const youTube = new YouTube();
youTube.setKey('API_KEY');
const Ids = [
    "---KhTqjC4M",
]
youTube.getById(Ids, (err, response) => {
    if (err) console.log(err);
    console.log(JSON.stringify(response));
});
```

To set an optional parameter use:

youTube.addParam('order', 'title');

### Documentation

The [official Youtube documentation](https://developers.google.com/youtube/v3/docs/) is a very useful resource as a reference.

- [getChannelById](https://developers.google.com/youtube/v3/docs/channels/list)
- [getPlayListsById](https://developers.google.com/youtube/v3/docs/playlists/list)
- [getPlayListsItemsById](https://developers.google.com/youtube/v3/docs/playlistItems/list)
- [search](https://developers.google.com/youtube/v3/docs/search/list)
- [related](https://developers.google.com/youtube/v3/docs/search/list)
- [getMostPopular](https://developers.google.com/youtube/v3/docs/videos/list)
- [getMostPopularByCategory](https://developers.google.com/youtube/v3/docs/videoCategories/list)
- [getMostPopularByCategoryAndRegion](https://developers.google.com/youtube/v3/docs/videoCategories/list)

### Help

 * For bug reports and feature requests, open [issues](https://github.com/jasmedia/ytube-api/issues). 


[badge_paypal_donate]: https://jasmedia.github.io/images/paypalbadge.svg

[paypal-donations]: https://paypal.me/jaseemjas?locale.x=en_GB