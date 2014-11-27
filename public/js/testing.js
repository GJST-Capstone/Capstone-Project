// practicing AJAX request to YouTube

// put this into backbone

// next step is to figure out how this URL is built (its parts) and create it in a live request.
// 1. try manually replacing channel ID
// 2. add in search keywords
// 3. specify how many results we want

// also try to manually (through DOM) render it to the page
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'

$.get(url,null,function(data){
	console.log("Video Title: " + data.items[0].snippet.title);
	console.log("Video Description: " + data.items[0].snippet.description);
	console.log("Video Image Thumbnail: " + data.items[0].snippet.thumbnails.medium.url);
})

// put output of the .get into a variable and 

// ------ Git Status Point
// Working on googleAPICall branch off stacy branch. Merged with master.
// When done with feature development, merge with stacy branch then pull merge request to master