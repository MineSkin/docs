# Frequently Asked Questions

Jump to:

- [General FAQ](#general)
- [API FAQ](#api)
- [Subscriptions FAQ](#subscriptions)

## General

### What is MineSkin?

MineSkin.org is a Minecraft skin generator that allows you to quickly get skin texture data with valid signatures by
just uploading skin images.

### What can I use skin data / signatures for?

With the skin data and signatures provided by MineSkin, you can easily apply custom skins to in-game player heads,
player NPCs, or even change a player’s in-game appearance. This is useful for personalizing game experiences, creating
unique avatars, and customizing characters in creative ways.

### Why can't I just get signatures directly?

Minecraft skins are made up of two parts: the skin texture and the skin signature. The skin texture is the image that
you see in-game, while the skin signature is a unique identifier that allows the game to verify the authenticity of the
skin texture. MineSkin generates both the skin texture and the skin signature for you.

### Why should I use MineSkin to generate skin signatures?

MineSkin makes it fast and easy to generate custom Minecraft skin data by automating the process of creating skin
signatures. Doing this manually can be very time-consuming and cumbersome, especially if you need to generate a large
number of skins.   
Doing this manually with only a few Minecraft accounts is also limited to just a few skins per minute, while MineSkin
can generate hundreds of skins per minute.

### How does MineSkin generate skin signatures?

MineSkin uses Minecraft accounts provided by the community to generate skin signatures. Specifically, it uploads the
skin texture to a Minecraft account and then downloads the resulting skin signature. This process is automated and does
not require any manual intervention.

### How can I generate skins faster?

You can upgrade your account on the [Store](https://account.mineskin.org/store) to generate skins faster and support MineSkin's development.

### How can I help to make generating skins faster?

If you have a Minecraft account you don't regularly use, you can help speed up the skin generation process by providing
it to MineSkin.
This allows MineSkin to use the account to generate skin signatures more quickly and efficiently.
Head over to the [Account Manager](https://account.mineskin.org/minecraft) to provide your account.

### Can I keep my skin when I add my account to MineSkin?

By default, MineSkin will modify your account's skin every couple of minutes. You'll probably want to use alt-accounts
to add to MineSkin instead of your main one.  
You can enable the ["Restore Original Textures"](../wiki/submitting-accounts#restore-original-textures) setting to
automatically revert your skin back to the original after MineSkin has used it to generate a skin.

## API

### How do I use the MineSkin API?

The MineSkin API allows you to programmatically generate skin data and signatures for use in your own
projects.
You can find the API documentation and more information on the [MineSkin Docs](https://docs.mineskin.org).

### Is there a Rate Limit on the API?

Yes. This is largely due to the upstream rate limits imposed by Mojang. MineSkin has its own rate limits to prevent
abuse and ensure fair usage for all users.  
See the [Rate Limits](../guides/rate-limits) guide for more information on how the rate limits work.  
By default, you can generate up to 20 skins per minute. If you need to generate more skins, please
[upgrade](https://account.mineskin.org/store) to a subscription or reach out about increased limits.  

### Can I host the MineSkin API / Generator myself?

It's not officially supported, not recommended and not easy to do. The public API will probably be able to cover your
needs just fine.  
MineSkin is designed around community contributions of Minecraft accounts and to the specific environment it's currently
running on.
Due to Mojang's rate limits you also need a lot of Minecraft accounts to generate skins at a reasonable speed.  
If you have a couple of your own accounts you'd like to use to generate skin data, please consider just contributing
them to the public API to help out everyone using it in terms of speed and reliability 🙂

**Please reach out if:**

- you find yourself needing to generate more skins than the public API allows.
- you can't afford a subscription but need to generate a lot of skins.


## Subscriptions

### How does the rate limit work?

Depending on your plan, you can generate a certain number of new skins per minute. For example, on the free plan,
you can generate up to 20 skins per minute (1 skin every 3 seconds).

### How do I use my subscription?

Your subscription automatically applies to requests made on the website.
To use your subscription on API requests, head to the API Keys page and assign your subscription to the
key you want to use. Then simply use the key in your requests.