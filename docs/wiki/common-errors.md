# Common Errors

## Client Errors

### invalid_image {#invalid_image}
The image you provided is not a valid skin image. The error message should contain more details about what is wrong with the image.  
#### Solution
Make sure the image is a valid skin and try again.  
Images should be:
- PNG format
- 64x64 or 64x32 pixels
- between 1KB and 20KB in size

### invalid_image_url {#invalid_image_url}
The URL you provided does not point to a valid image. The error message should contain more details about what is wrong with the URL.  
This commonly happens if you use a URL that points to a webpage instead of an image file (e.g. https://imgur.com/k8W9wJ0 instead of https://i.imgur.com/k8W9wJ0.png).
#### Solution
Make sure the URL points to a valid image and try again.  
If you are requesting an image from your own server, make sure it also handles `HEAD` requests correctly.

### invalid_user {#invalid_user}
The user you provided does not exist or is not valid. 
#### Solution
Provide a valid Minecraft UUID of a player and try again.

### rate_limit (429) {#rate_limit}
You have exceeded the rate limit for this endpoint. The error message should contain more information about the rate limit and when you can make another request.  
Check the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `Retry-After` headers, as well as the `rateLimit` object in the response for more information.
#### Solution
Wait until the rate limit resets and try again later.

### invalid_content_type (415) {#invalid_content_type}
The content type of the request is not supported. The error message should contain more information about what is wrong with the content type.
#### Solution
Make sure the request has the correct content type (`application/json` or `multipart/form-data`) and try again.  
If you are using a library to make the request with `multipart/form-data`, make sure it sets the correct content type and boundary (usually you should avoid setting the content-type header manually).

### missing_file {#missing_file}
No skin file was provided in the request.
#### Solution
Make sure to include a skin file in the request and try again.  
The file should be sent as a `file` field in a `multipart/form-data` request. See [invalid_content_type](#invalid_content_type) above for potential issues with the content type.

### invalid_api_key {#invalid_api_key}
The API key you provided is not valid. The error message should contain more information about what is wrong with the API key.  
* `Client not allowed`: You configured your API to only allow requests from specific IPs, but the request did not come from one of those IPs.
* `Origin not allowed`: You configured your API to only allow requests from specific web origins, but the request did not come from one of those origins.
* `Agent not allowed`: You configured your API to only allow requests from specific user agents, but the request did not come from one of those user agents.

#### Solution
Make sure to provide a valid API key in the `Authorization` header and try again.

### validation_error {#validation_error}
The request contains invalid or missing parameters. The error message should contain more information about what is wrong with the request.
#### Solution
Refer to the [API Reference](/docs/category/mineskin-api) and make sure the request parameters are correct.  


## Server Errors

### skin_change_failed {#skin_change_failed}
Something went wrong trying to upload the skin to Mojang. The error message may contain more information about what went wrong.  
This can happen if the skin file is invalid or there are issues with the Mojang servers.  
This also happens if the skin image is banned by Mojang.
#### Solution
Try again later or with a different skin image.

### invalid_skin_data {#invalid_skin_data}
The skin was successfully uploaded to Mojang, but something went wrong while downloading the texture data. The error message may contain more information about what went wrong.  
#### Solution
Try again later.  

### generator_timeout {#generator_timeout}
The skin generation process took too long and was canceled. 
#### Solution
Try again later.

### job_failed {#job_failed}
The skin generation process failed. The error message may contain more information about what went wrong.
#### Solution
Try again later.

### no_account_available {#no_account_available}
There are currently no accounts available to generate skins. This can happen if all accounts are currently in use or if there are issues with the account pool.  
(This error should not happen normally)
#### Solution
Try again later.

### internal_error {#internal_error}
An internal server error occurred. The error message may contain more information about what went wrong.  
This should not happen normally and indicates an issue with the MineSkin servers. Please report this error on the [MineSkin Discord](https://minesk.in/discord) or on [GitHub](https://github.com/MineSkin/api.mineskin.org/issues/new/choose).
#### Solution
Try again later.  

### unexpected_error {#unexpected_error}
See [internal_error](#internal_error).