1) To restart server when a changes is made, use nodemon or Grunt plugin.
2) vendor make a directory public/vendor and put third party libraries in this folder.
3) Testing is disabled by default but request parameter should enable it.
4) Testing every time will slow down the site, it's done only when needed.
5) Cross-page testing :
Create a mock browser 
which can actually open and get the links before the user goes.
It is like a virtual browser to maintain the logic.
<b>Selenium</b>
<b>PhantomJS</b>
<b>Zombie</b> --> Least reliable of these but easier to use as it doesn't create a browser rather just run the tests. (not for windows).
6) Most common media types for POST bodies are : 
->For name/value pairs - application/x-www-form-urlencoded.
->To upload files, multipart/form-data;
->For AJAX requests -> application/json.


