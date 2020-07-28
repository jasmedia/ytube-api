# ytube-api
YouTube API v3 implementation for NodeJS

Usage: 

```npm install ytube-api```

Example List category videos based on Region:

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