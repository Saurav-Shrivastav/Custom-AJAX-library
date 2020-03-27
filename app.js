const http = new easyHTTP;

// GET Posts:
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
  if(err){
    console.log(err);
  }
  else{
    console.log(posts);
  }
});

// GET Single Post:
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
  if(err){
    console.log(err);
  }
  else{
    console.log(post);
  }
});         //The last number in the url here specifies the id of the post that we need.
