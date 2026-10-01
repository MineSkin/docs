# Changelog

_This changelog is not complete. It only contains the most important changes._

### 2026

**October 2026**
- Added a `/v2/me/capes` endpoint that lists the capes available to the current user
- Added capes owned by your linked Minecraft accounts to the cape selection on the website

**September 2026**
- Added support for the Moonlight Trail, Aurora, Hero, and Twisted capes
- Improved accessibility, keyboard support, and error messages on the website and Account Manager

**August 2026**
- Removed per-key subscription assignment from the Account Manager (subscriptions automatically apply to all API keys)

**July 2026**
- Added a batch generation endpoint (early access)
- Added `support` levels to `/v2/capes`
- If you are on the Plus plan or higher and have a linked Minecraft account that owns a cape, you can now generate skins with that cape, even if the cape isn't publicly supported
- Added weekly schedules that automatically enable and disable submitted Minecraft accounts
- Added semantic skin search, which matches skins by description as well as by name
- Added the Projects Using MineSkin page to the documentation

**June 2026**
- Introduction of Teams (beta) to share API keys and subscription benefits
- Added support for the Builder cape
- Removed the deprecated credits system for skin generation

**May 2026**
- Added email sign-up, passkeys, and two-factor authentication to the Account Manager
- Added options to link sign-in methods and manage active sessions in the Account Manager
- Skins that you generate on the website before you sign in are now linked to your account when you sign in
- Removed the hourly limit for Pro and Ultimate plans
- Implemented automatic scaling of generator capacity and improved queue ETA estimates

**April 2026**
- Improved how the generator handles Mojang rate limits

**March 2026**
- Added the Ultimate plan

**February 2026**
- Added separate per-minute and per-hour rate limit info to the response body

### 2025

**December 2025**
- Added support for the Zombie Horse cape

**November 2025**
- Added support for the Copper cape
- Added unlimited skin history for paid users

**October 2025**
- Added timestamp and ETA to job info

**August 2025**
- Added new /give command formats for Minecraft 1.21/1.21.5

**June 2025**
- Replaced outdated Mojang API endpoints
- Added support for Base64-encoded image URLs

**May 2025**
- Added support for new capes
- Made cape generation available to paid users
- Added rate limit reset info to response body and headers
- Changed `rateLimit.next` info to use the rate limit reset time when the limit is reached
- Changed skin name length limit to 48 characters

**April 2025**
- Added support for Account Manager logins with Microsoft accounts
- New format for API keys

**March 2025**
- Rework of subscription system
- Implemented improved generator balancing system

**February 2025**
- Introduction of account rewards
- Started early access (closed beta) for cape generation

**January 2025**
- Started adding support for generating skins with capes

### 2024

**December 2024**
- Added website translation support

**November 2024**
- Released new Java API client with support for the v2 API

**October 2024**
- [Release of the v2 API](https://docs.mineskin.org/blog/mineskin-v2)
- Release of the new website
- Release of the new [documentation](https://docs.mineskin.org/)

**September 2024**
- Started development of the v2 API and new generator system
- Started development of the new website
- Release of the new Account Manager

**July 2024**
- Announced monetization plans for the API
- Released version 2.0 of the Java API client

**June 2024**
- Started development of the new Account Manager

### 2020-2023

**January 2022**
- Released the Hiatus mod

**July 2021**
- Moved skin IDs to UUIDs
- Deprecated the legacy skin ID system

**May 2021**
- Added support for API keys

**February 2021**
- Released the first version of the TypeScript API client

**January 2021**
- Project rewrite in TypeScript

**December 2020**
- Added support for new Microsoft authentication system

**August 2020**
- Added support for skin bulk-uploading to the website

### 2016-2019

**May 2018**
- Introduction of the account manager to submit Minecraft accounts

**September 2017**
- Rewrite of the backend in Node.js and release of the v1 API
- Rebrand to MineSkin

**August 2016**
- Released the first version of the Java API client

**July 2016**
- First version of the generator [released](https://docs.mineskin.org/blog/mineskin-custom-skin-generator)
