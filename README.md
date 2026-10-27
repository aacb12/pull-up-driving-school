# Pull Up Driving School – redesign demo

A modern one-page redesign of [pullupdrivingschool.co.uk](https://pullupdrivingschool.co.uk/) for review.

Plain HTML/CSS/JS, no build step. Open `index.html` or run `python3 -m http.server` in this folder.

## Before going live
- Remove `<meta name="robots" content="noindex, nofollow">` from `index.html`
- Update the `og:image` / JSON-LD image URLs to the real domain
- Prices: £45 (1h), £70 (1h 30m), £90 (2h), refresher £45/hr; update the old site to match if it stays live
- Redirect the old WordPress URLs (`/about-us/`, `/our-services/`, `/areas-covered/`, `/contact-us/`) to the new sections
- Carry over the terms, privacy and cookie policy pages
