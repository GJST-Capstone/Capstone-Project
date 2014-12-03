var results = {
 "kind": "youtube#searchListResponse",
 "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/MGMqLLaJCTx9p4bH-TLSWmI_KLA\"",
 "nextPageToken": "CAQQAA",
 "pageInfo": {
  "totalResults": 937,
  "resultsPerPage": 4
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/89kCyZ45VUbGKwdnN8UNkZQ62VI\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "8zI5EoiYi1c"
   },
   "snippet": {
    "publishedAt": "2012-04-19T19:44:17.000Z",
    "channelId": "UCD0nBMLdq_KbIK9u-mzpNkA",
    "title": "Jillian Michaels: Standing Abs Workout",
    "description": "Jillian Michaels: Standing Abs Workout is a short abdominal exercise circuit that is designed to sculpt six pack abs, strengthen the core, burn calories, and...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/default.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/mqdefault.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/vi/8zI5EoiYi1c/hqdefault.jpg"
     }
    },
    "channelTitle": "BeFit",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/XBKXXCsg3sQFJMMoWkG3qarwT4c\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "1Pc-NizMgg8"
   },
   "snippet": {
    "publishedAt": "2011-12-15T22:08:58.000Z",
    "channelId": "UCD0nBMLdq_KbIK9u-mzpNkA",
    "title": "Jillian Michaels 30 Day Shred: Level 1",
    "description": "Jillian Michaels 30 Day Shred Level 1 will burn fat with this interval training fitness system, combining strength, cardio, and abs workouts that blast calor...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/1Pc-NizMgg8/default.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/1Pc-NizMgg8/mqdefault.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/vi/1Pc-NizMgg8/hqdefault.jpg"
     }
    },
    "channelTitle": "BeFit",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/aUMjTumpakLDX7E7sXusBYw-wuM\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "ssMiQX0XyZ8"
   },
   "snippet": {
    "publishedAt": "2012-11-28T06:30:16.000Z",
    "channelId": "UCD0nBMLdq_KbIK9u-mzpNkA",
    "title": "Butt Workout 3: Firm Extreme | 30 DAY BUTT LIFT",
    "description": "Click Here for your \"30 Day Butt Lift\" 30 Day Calendar Workout Plan! http://bit.ly/QriFSK Butt Workout 3: Firm Extreme from 30 DAY BUTT LIFT is a concentrate...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/ssMiQX0XyZ8/default.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/ssMiQX0XyZ8/mqdefault.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/vi/ssMiQX0XyZ8/hqdefault.jpg"
     }
    },
    "channelTitle": "BeFit",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"SXtVtkiDWqZpl4dTpZv5nFU7t-8/gMEKSsXPYYiR99AtKwTTUjc3kbE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "XZDCKmgNNyE"
   },
   "snippet": {
    "publishedAt": "2012-04-06T08:05:14.000Z",
    "channelId": "UCD0nBMLdq_KbIK9u-mzpNkA",
    "title": "Jillian Michaels: Arms & Shoulders Workout",
    "description": "Jillian Michaels: Arms & Shoulders Workout is a short, but effective strength training workout that is designed to sculpt muscle in the arms and shoulders, a...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/XZDCKmgNNyE/default.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/XZDCKmgNNyE/mqdefault.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/vi/XZDCKmgNNyE/hqdefault.jpg"
     }
    },
    "channelTitle": "BeFit",
    "liveBroadcastContent": "none"
   }
  }
 ]
}




results.items.forEach(function (item){
  item.id2 = item.id
  delete item.id
});


