---
id: mcp-server
title: MCP Server
---

# MCP Server

MineSkin runs an [MCP](https://modelcontextprotocol.io) server at `https://api.mineskin.org/mcp`.
AI agents and assistants can use it to generate skins and look up skins and capes, without you writing any code against the REST API.
It is a remote Streamable HTTP server, so there is nothing to install.


## Authentication

Send your API key in the `Authorization` header, the same way as for the REST API: `Authorization: Bearer <key>`.
Get a key from [account.mineskin.org/keys](https://account.mineskin.org/keys).

The key is optional, but strongly recommended.
Without it, the tools run as anonymous requests, which have strict rate limits and limited features.
Don't paste your API key into a chat with the agent; put it in the client's MCP configuration instead.


## Connecting

### Claude Code

```sh
claude mcp add --transport http mineskin https://api.mineskin.org/mcp --header "Authorization: Bearer <key>"
```

### Other clients

Any MCP client that supports Streamable HTTP servers can connect.
Add `https://api.mineskin.org/mcp` as the server URL, and add the `Authorization` header if the client lets you set custom headers.
Clients that can't send a header connect anonymously.

Clients that run in a web browser can't connect, because the endpoint doesn't send CORS headers.


## Tools

| Tool            | What it does                                                                                       | Inputs                                                                            |
|-----------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| `generate_skin` | Signs a skin image and returns its texture value and signature. Same as `POST /v2/queue`.          | Exactly one of `url` or `user`. Optional: `variant`, `name`, `visibility`, `cape` |
| `get_job`       | Gets the status of a generate job. A completed job includes the skin. Same as `GET /v2/queue/{id}`. | `jobId`                                                                           |
| `get_skin`      | Gets a skin by its UUID or short id. Same as `GET /v2/skins/{uuid}`.                               | `uuid`                                                                            |
| `list_skins`    | Lists recent public skins, newest first. Same as `GET /v2/skins`.                                  | Optional: `after`, `size` (1 to 128), `filter`                                    |
| `list_capes`    | Lists the capes MineSkin supports. Same as `GET /v2/capes`.                                        | None                                                                              |

`generate_skin` inputs:
- `url`: a link to a 64x64 or 64x32 PNG skin, or a `data:image/png;base64,...` URL. The whole request must stay under 20 kB, so `data:` URLs only work for small images.
- `user`: a Minecraft player UUID, to copy that player's current skin.
- `variant`: `classic`, `slim`, or `unknown`.
- `name`: up to 48 characters.
- `visibility`: `public`, `unlisted`, or `private`.
- `cape`: a cape UUID from `list_capes`.

Each tool returns the response body of the matching [v2 endpoint](../mineskin-api/mineskin-api.info.mdx) as JSON text.


## Behavior

- `generate_skin` waits up to about 20 seconds for the skin. If the job hasn't finished by then, the result contains the job, and the agent can check it later with `get_job`.
- A request that fails, or a job with the status `failed`, comes back as a tool error. The error text is the API's response body, including its `errors` array.
- Every tool call is a normal API request, so your plan's [rate limits](./03-rate-limits.md) and features apply exactly as they do for REST requests.
- MineSkin signs a skin image that already exists. It doesn't create or draw skins, so the agent needs an image URL or a player UUID.

:::tip
Set a descriptive user agent in your client if it lets you add headers, for example `MineSkin-User-Agent: MyAgent/1.0`. See [API Best Practises](./02-api-best-practises.md).
:::
