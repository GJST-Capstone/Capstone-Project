// AJAX request to YouTube

// next step is to figure out how this URL is built (its parts) and create it in a live request.
// 1. try manually replacing channel ID
// 2. add in search keywords
// 3. specify how many results we want

// put this into backbone

// what does URL look like when search terms are entered? How can we dynamically build URL w/ search terms.

// var channelID = ['UCD0nBMLdq_KbIK9u-mzpNkA',
// 				'UCxTO69CggJGFQpZz-kE2k7g',
// 				'UCdsvmOV_qYJUPqlUxs72Jtw',
// 				'UCgBTevPW8fsH4pQNrLufOsQ',
// 				'UCiP6wD_tYlYLYh3agzbByWQ',
// 				'UCuY1W4AwhhgkB6rsJBtltUA',
// 				'UCnUlSOVlCmoyQ6e2YQAGZZA',
// 				'UCIJwWYOfsCfz6PjxbONYXSg'];

// var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+ channelID + '&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';

// var fullVideoData = [];


// $.get(url,null,function(data){
// // maybe the second argument is the search terms from our front end search params customer chooses
// 	var videoOneData = {};
// 	videoOneData.videoTitle = data.items[0].snippet.title;
// 	videoOneData.videoDesc = data.items[0].snippet.description;
// 	videoOneData.videoImgThumb = data.items[0].snippet.thumbnails.medium.url;
// 	// console.log(videoOneData);
// 	fullVideoData.push(videoOneData);
// 	console.log(fullVideoData);
// })

var results = {};

// stuff from Greg.
    var firstURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';
    //.get callback for youtube data
    function vidDataCallback(data) {
      
      results = data;
      results.items.forEach(function (video){
      	console.log(data);
        video.id2 = video.id
        delete video.id
      }); 
      //add the data to the collection
      //render
      return results;
    }
    //get the data
    $.get(firstURL, null, vidDataCallback);



// results should be an array of objects
//		Objects should be the data.items[0] of each channel request.

// -----

// Do a loop through an array of approved YouTube channel IDs to generate the URL. Then in that loop, as the URL is built, put it in as the argurement to the .get request.


