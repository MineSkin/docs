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
For example `Authorization: Bearer da84de82e960d6c0510088279878c79365ad5118d350d619f20324a5494f156b`  


## Rate Limits

Some endpoints have rate limits to prevent abuse. Those endpoints will return a `429 Too Many Requests` status code if you exceed the limit.  
Most of those endpoints will also return a `X-RateLimit-Limit` and `X-RateLimit-Remaining` header to indicate the limit and how many requests you have left in the current window (usually 1 minute).  
Some endpoints will also return a `Retry-After` header to indicate how long (in seconds) you have to wait until you can make another request.  

