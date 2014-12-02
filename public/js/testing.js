// AJAX request to YouTube

// next step is to figure out how this URL is built (its parts) and create it in a live request.
// 1. try manually replacing channel ID
// 2. add in search keywords
// 3. specify how many results we want

// put this into backbone

var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';

var fullVideoData = [];

$.get(url,null,function(data){
// maybe the second argument is the search terms from our front end search params customer chooses
	var videoOneData = {};
	videoOneData.videoTitle = data.items[0].snippet.title;
	videoOneData.videoDesc = data.items[0].snippet.description;
	videoOneData.videoImgThumb = data.items[0].snippet.thumbnails.medium.url;
	// console.log(videoOneData);
	fullVideoData.push(videoOneData);
	console.log(fullVideoData);
})


// -----

// Do a loop through an array of approved YouTube channel IDs to generate the URL. Then in that loop, as the URL is built, put it in as the argurement to the .get request.

// put output of the .get into a variable and 

// ------ Git Status Point
// Working on googleAPICall branch off stacy branch. Merged with master.
// When done with feature development, merge with stacy branch then pull merge request to master