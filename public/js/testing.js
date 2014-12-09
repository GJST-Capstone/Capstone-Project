// AJAX request to YouTube

// var fullVideoData = [];


// $.get(url,null,function(data){
// 	var videoOneData = {};
// 	videoOneData.videoTitle = data.items[0].snippet.title;
// 	videoOneData.videoDesc = data.items[0].snippet.description;
// 	videoOneData.videoImgThumb = data.items[0].snippet.thumbnails.medium.url;
// 	// console.log(videoOneData);
// 	fullVideoData.push(videoOneData);
// 	console.log(fullVideoData);
// })

// NEXT STEP: build a for loop to run through the url to add a search term in correct place and if more than one search term, add in correct format. (if statement)
// then run that through all the channels (insert channel ID from array of approved IDs)
// push data into results array (change results object to array)
// look into video format (mobile read, etc...)

var results = [];
    
    // // no search terms or max results
    // var firstURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCD0nBMLdq_KbIK9u-mzpNkA&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA';
    
    // // with one search term
    // var firstURLwSearchTerms = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIJwWYOfsCfz6PjxbONYXSg&maxResults=2&q=abs&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'
    
    // // multiple search terms with commas in between ( '%2C' between each term ) and 2 max results ( '&maxResults=2' )
    // var wMultipleSearchTermswComma = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCiP6wD_tYlYLYh3agzbByWQ&maxResults=2&q=abs%2C+indoor&key={YOUR_API_KEY}'

    // // multiple search terms with no commas and 2 max results ( '&maxResults=2' )
    // var wMultipleSearchTermsNoComma = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCiP6wD_tYlYLYh3agzbByWQ&maxResults=2&q=abs+indoor&key={YOUR_API_KEY}'

    // search terms (from drop down options) will be stored into an array. To add to the URL, need to pull each item then + '%2C' to represent the comma
    var searchString = 'q=';
      for (i=0; i<searchStringArray.length; ++i) {
        var searchTerm = searchStringArray[i];
        console.log(searchTerm);
        searchString += searchTerm;
        console.log(searchString);
      };

// dynamically building URL format
if (searchString == 0) {
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelID + '&maxResults=' + maxResultsNum + '&' + searchString + '&key=AIzaSyDWCByDYIy-ow0OcChMq9QtoDrbem-xFLA'
}

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


// results should be an array of objects
//		Objects should be the data.items[0] of each channel request.

// -----

// Do a loop through an array of approved YouTube channel IDs to generate the URL. Then in that loop, as the URL is built, put it in as the argurement to the .get request.


