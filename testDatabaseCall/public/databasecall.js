// backbone-collection demo

 function doPost() { // NOTE: removed 'etag' from string below
 	var string = '{"kind":"youtube#searchResult","snippet":{"publishedAt":"2012-03-15T01:07:01.000Z","channelId":"UCD0nBMLdq_KbIK9u-mzpNkA","title":"Jillian Michaels: Yoga Meltdown Level 1","description":"Jillian Michaels: Yoga Meltdown Level 1 is designed to sculpt muscle, burn fat, and tone your entire body fast! Begin with a gentle vinyasa, then kick up the...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/q5nyrD4eM64/default.jpg"},"medium":{"url":"https://i.ytimg.com/vi/q5nyrD4eM64/mqdefault.jpg"},"high":{"url":"https://i.ytimg.com/vi/q5nyrD4eM64/hqdefault.jpg"}},"channelTitle":"BeFit","liveBroadcastContent":"none"},"id2":{"kind":"youtube#video","videoId":"q5nyrD4eM64"}}'
 	$.post('/api',string);
 }
 doPost();
	
// make sure /api route is in server

var Model = Backbone.Model.extend({});

var Collection = Backbone.Collection.extend({
	url: '/api',
	model:  Model,
})

var coll = new Collection();

coll.show = function() {
	return coll.pluck('value');
}

coll.doAdd = function() {
	for (var i=0; i<4; ++i) {
		coll.add({value:i});// No requests to server
	}
	return coll.show();
};

coll.doCreate = function() {
	for (var i=0; i<4; ++i) {
		coll.create({value:i});// Sends POST to server
	}
	return coll.show();
};

coll.doFetch = function() {
	coll.fetchResponse = coll.fetch({ // returns res, a jqXHR promise (http://api.jquery.com/jQuery.ajax/#jqXHR)
		success: function w00t(coll,res,opts){
			console.log('Final response: ');
			console.log(res);
			console.log(opts);
		},
		error: function pwned(coll,res,opts) {
			console.log('Error!');
			console.log(res);
			console.log(opts);
		}
	});
	console.log('Early response: '+coll.fetchResponse.responseText);
}
