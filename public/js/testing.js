// AJAX request to YouTube

// next step is to figure out how this URL is built (its parts) and create it in a live request.
// 1. try manually replacing channel ID
// 2. add in search keywords
// 3. specify how many results we want

// put this into backbone

// what does URL look like when search terms are entered? How can we dynamically build URL w/ search terms.

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

// Dec 3: build a for loop to run through the url to add a search term in correct place and if more than one search term, add in correct format. (if statement)
// then run that through all the channels (insert channel ID from array of approved IDs)
// push data into results array (change results object to array)
// look into video format (mobile read, etc...)

var results = [];

// written by greg
    var firstURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';
    var firstURLwSearchTerms = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIJwWYOfsCfz6PjxbONYXSg&q=abs&key={YOUR_API_KEY}'
    // GREG SAYS: search terms (from drop down options) will be stored into an array.
    // .... So to add them to the URL, I'll need to first pass that array to a string and then add to the URL call
      // does [array].toString work?
    var searchString = [serachstringArray.toString] // w/ items added inbetween if needed
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelID + '&' + searchString + '&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'
    // need to confirm how multiple search terms are strung together. If need characters between items to that see above

    //.get callback for youtube data
    function vidDataCallback(data) {
      
      results.push(data.items);
      results.forEach(function (video){
        video.id2 = video.id;
        delete video.id;
      }); 
      //add the data to the collection
      //render
      console.log(results);
      return results;
    }
    //get the data
    $.get(firstURL, null, vidDataCallback);

// loop to build URLs

var channelID = ['UCD0nBMLdq_KbIK9u-mzpNkA',
       'UCxTO69CggJGFQpZz-kE2k7g',
       'UCdsvmOV_qYJUPqlUxs72Jtw',
       'UCgBTevPW8fsH4pQNrLufOsQ',
       'UCiP6wD_tYlYLYh3agzbByWQ',
       'UCuY1W4AwhhgkB6rsJBtltUA',
       'UCnUlSOVlCmoyQ6e2YQAGZZA',
       'UCIJwWYOfsCfz6PjxbONYXSg'];

for (i=o; i<channelID.index; ++i) {
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId='+ channelID[i] + '&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';

}

// results should be an array of objects
//		Objects should be the data.items[0] of each channel request.

// -----

// Do a loop through an array of approved YouTube channel IDs to generate the URL. Then in that loop, as the URL is built, put it in as the argurement to the .get request.


