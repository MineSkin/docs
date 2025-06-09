# Rate Limits and Concurrency


All endpoints used to generate skin signatures are rate-limited. MineSkin uses a few different rate-limiting systems:


## Max requests per minute
You can only make a certain number of skin generation requests per minute. For example, on the MineSkin *Basic* plan, you can make up to 60 requests per minute to the skin generation endpoints.
You can check your current usage and limit via the `X-RateLimit-` headers or the `rateLimit.limit` object in the response body:
```json
rateLimit: {
  ...
  limit: { limit: 20, remaining: 18, reset: 1749303673 }
  ...
}
```


## Delay between requests
:::info
This only applies if you're using the regular `v2/generate` endpoint (i.e., not `v2/queue`) and you're on the Free plan or making requests anonymously.
:::
This limits how frequently you can make requests — you’ll need to wait a specific amount of time between requests. The delay is derived from the max requests per minute (e.g., 60/min = 1s delay).
You can check the current delay via the `rateLimit.delay` object in the response body:
```json
rateLimit: {
  ...
  delay: { millis: 3000, seconds: 3 }
  ...
}
```

**Note:**
This delay is constant — it doesn’t change between requests. You can use this to schedule requests at a fixed interval.
For request-specific timing, see the `next` object described [below](#when-to-make-the-next-request).



## When to make the next request
Each skin generation response includes information on when you can make your next request. You can use the `rateLimit.next.relative` field to delay your next request appropriately:
```json
rateLimit: {
  ...
  next: { absolute: 1749306102780, relative: 351 }
  ...
}
```
This accounts for both the per-minute limit and the delay between requests (if applicable). If you've hit the request limit for the current window, this value tells you how long until the limit resets.


## How frequently skins are generated
While the `v2/queue` endpoint doesn’t enforce a strict delay between *requests*, the internal generation rate still respects the delay.
For example, you can submit 60 skins to the queue in 10 seconds, but they’ll still be processed one per second (unless your plan allows higher concurrency — see [below](#how-concurrency-works)).


## How concurrency works
On the *Free* and *Lite* plans, only one skin is processed at a time — even if you submit multiple skins via the `queue` endpoint, they’ll be handled one after the other.
On higher-tier paid plans, multiple skins are processed **concurrently**. For example, on the *Plus* plan, up to 4 skins can be processed in parallel — making it roughly 4× faster than *Lite*.


## Estimating how long X skins take to generate
The store page provides rough estimates for how long it takes to generate 20 skins on each plan, but you can easily calculate it yourself:

```
n = number of skins  
c = concurrency  
a = average time to generate one skin  
r = max requests per minute  
d = delay = 60 / r  
Estimated time: (n / c) × (a + d)
```

The average time to generate one skin is roughly `1.5s`.
So for example, on the *Plus* plan:

```
n = 200  
c = 4  
a = 1.5  
r = 120  
d = 60 / 120 = 0.5

(200 / 4) × (1.5 + 0.5) = 50 × 2 = 100s = 1m40s
```

:::tip
You can also use [this tool](https://account.mineskin.org/speedcalc/) to simplify the calculation.
:::
