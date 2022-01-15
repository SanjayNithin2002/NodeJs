1) res.status(code)
Sets the HTTP status code. Express defaults to 200 (OK), so you will have to use
this method to return a status of 404 (Not Found) or 500 (Server Error), or any
other status code you wish to use. For redirects (status codes 301, 302, 303, and
307), there is a method redirect, which is preferable.

2) res.set(name, value)
Sets a response header. This is not something you will normally be doing manually.

3) res.cookie(name, value, [options]), res.clearCookie(name, [options])
Sets or clears cookies that will be stored on the client. This requires some middle‐
ware support; see Chapter 9.

4) res.redirect([status], url)
Redirects the browser. The default redirect code is 302 (Found). In general, you
should minimize redirection unless you are permanently moving a page, in which
case you should use the code 301 (Moved Permanently).

5) res.send(body), res.send(status, body)
Sends a response to the client, with an optional status code. Express defaults to a
content type of text/html, so if you want to change it to text/plain (for example),
you’ll have to call res.set('Content-Type', 'text/plain\') before calling
res.send. If body is an object or an array, the response is sent as JSON instead (with
the content type being set appropriately), though if you want to send JSON, I rec‐
ommend doing so explicitly by calling res.json instead.

6) res.json(json), res.json(status, json)
Sends JSON to the client with an optional status code.

7) res.jsonp(json), res.jsonp(status, json)
Sends JSONP to the client with an optional status code.
8) res.type(type)
A convenience method to set the Content-Type header. Essentially equivalent to

9) res.set('Content-Type', type), except that it will also attempt to map file ex‐
tensions to an Internet media type if you provide a string without a slash in it. For
example, res.type('txt') will result in a Content-Type of text/plain. There are
areas where this functionality could be useful (for example, automatically serving
