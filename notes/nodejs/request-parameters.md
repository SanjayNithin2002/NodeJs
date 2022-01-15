1) req.params
An array containing the named route parameters. 

2) req.param(name)
Returns the named route parameter, or GET or POST parameters. I recommend
avoiding this method.

3) req.query
An object containing querystring parameters (sometimes called GET parameters)
as name/value pairs.

4)req.body
An object containing POST parameters. It is so named because POST parameters are
passed in the body of the REQUEST, not in the URL like querystring parameters. To
make req.body available, you’ll need middleware that can parse the body content
type, which we will learn about in Chapter 10.

5) req.route
Information about the currently matched route. Primarily useful for route
debugging.

6) req.cookies/req.signedCookies
Objects containing containing cookie values passed from the client. See Chapter 9.

7) req.headers
The request headers received from the client.
req.accepts([types])
A convenience method to determine whether the client accepts a given type or types
(optional types can be a single MIME type, such as application/json, a comma￾delimited list, or an array). This method is of primary interest to those writing public
APIs; it is assumed that browsers will always accept HTML by default.

8) req.ip
The IP address of the client.

9) req.path
The request path (without protocol, host, port, or querystring).

10) req.host
A convenience method that returns the hostname reported by the client. This in‐
formation can be spoofed and should not be used for security purposes.

11) req.xhr
A convenience property that returns true if the request originated from an AJAX
call.

12) req.protocol
The protocol used in making this request (for our purposes, it will either be http
or https).

13) req.secure
A convenience property that returns true if the connection is secure. Equivalent
to req.protocol==='https'.

14) req.url/req.originalUrl
A bit of a misnomer, these properties return the path and querystring (they do not
include protocol, host, or port). req.url can be rewritten for internal routing
purposes, but req.originalUrl is designed to remain the original request and
querystring.


15) req.acceptedLanguages
A convenience method that returns an array of the (human) languages the client
prefers, in order. This information is parsed from the request header.