---
id: getting-started
title: Getting Started
---

# Getting Started

To use the MineSkin API you will need to create an account and obtain an API key.  
Create an account at [account.mineskin.org](https://account.mineskin.org/) and then manage your API keys at [account.mineskin.org/keys](https://account.mineskin.org/keys).  
  
If you previously used MineSkin V1, read the [migration guide](./migrating-to-v2) to learn about the changes in V2.  
Otherwise, you can start using the API by reading the [API documentation](../mineskin-api/mineskin-api).


## API Key
 
To authenticate your requests to the MineSkin API you will need to include your API key in the `Authorization` header.  
For example `Authorization: Bearer msk_Ssx9I4O5_AK_YLAIAXGR5A3osUt6s7jtFUJqGfxbtZBb7i_0hf43b6xmXgsL0SYU5_ARPX7wz`  


## Rate Limits

Some endpoints, specifically all endpoints to generate a skin, have rate limits to prevent abuse. Those endpoints will return a `429 Too Many Requests` status code if you exceed the limit.  
Most of those endpoints will also return a `X-RateLimit-Limit` and `X-RateLimit-Remaining` header to indicate the limit and how many requests you have left in the current window. You can check the `X-RateLimit-Reset` header to see when the rate limit will reset.
Some endpoints will also return a `Retry-After` header to indicate how long (in seconds) you have to wait until you can make another request.  

