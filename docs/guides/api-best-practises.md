# API Best Practises

## Always set a user agent

When using the API, always set a user agent header.
Either as a `User-Agent` or `MineSkin-User-Agent` header, or via the client library you are using.

This is important for us to identify your application and to help you if you run into issues.
It also helps us to identify and block abusive clients.

## Use an API Key

Get an API key from [account.mineskin.org](https://account.mineskin.org/keys) and use it to authenticate your
requests.  
Unauthorized requests will have strict rate limits and limited features.

## Do not share your API key

Avoid sharing your API key with others.
This includes not hard-coding the key in your application or sharing it in public repositories.

For server-side applications, use environment variables to set your API key.  
To avoid exposing your API key in client-side applications, use a [proxy server](#use-a-proxy-server) to handle the API
requests.

## Use a Proxy Server

If you are using the API in a client-side application (e.g. a web app or plugin), consider using a proxy server to
handle the API requests.  
One option would be to use the official [Cloudflare Workers MineSkin Proxy](../wiki/api-clients.mdx#proxies).
