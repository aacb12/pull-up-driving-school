# Pull Up Driving School website

The one-page site for [pullupdrivingschool.co.uk](https://pullupdrivingschool.co.uk/), plus terms and privacy pages.

Plain HTML/CSS/JS, no build step. Open `index.html` or run `python3 -m http.server` in this folder.

## Hosting

| What | Where | Account |
|---|---|---|
| Domain registration (renews each 1 Nov) | eWeball Web Hosting (i.eweball.com) | Siraj |
| DNS, website hosting, email forwarding | Cloudflare (free plan) | Siraj |

- Cloudflare Pages deploys this repo automatically on every push to `main`.
- The site shows Siraj's personal email, `puotl@outlook.com`. The old `info@pullupdrivingschool.co.uk` forwards to it through Cloudflare Email Routing, so people with the old address still reach him. There's no info@ mailbox.
- `_redirects` sends the old WordPress URLs to the matching parts of the new site, and `404.html` is the page for missing URLs. Both are Cloudflare Pages features.

## Still to do
- Facebook, TikTok and Google reviews icons in the footer link nowhere (`href="#"`) until Siraj sends the real profile URLs
- The terms still list "Instructor training (where applicable)". Check with Siraj whether he offers it
