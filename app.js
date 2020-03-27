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

// Create Data to be posted:
data = {
  title: "Custom post",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

// POST request:
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err){
    console.log(err);
  }
  else{
    console.log(post);
  }
});
