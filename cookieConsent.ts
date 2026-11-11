// Cookie consent banner (self-hosted cookie consent library, static/js/cookie-consent.min.js) and the
// Google Analytics tags it controls. docusaurus.config.ts adds these tags to the <head> of every page.
//
// The choice is shared with the other mineskin.org sites: on *.mineskin.org the consent cookie
// (CookieScriptConsent) goes on .mineskin.org. Every site uses the same cookie name, the same category names
// and no `revision` (0); the library drops category names it doesn't know, so a site with fewer categories
// would strip them from the shared cookie on its next save.
// No ads here, so the IAB TCF bridge stays off and the library's own banner is shown everywhere.
// Functionality and targeting set no cookies on this site, but "Accept all" grants them for mineskin.org too,
// so they stay listed in the settings and their descriptions say where they apply.
import type { HtmlTagObject } from '@docusaurus/types';

const GA_ID = 'G-XXNGT0HQ7T';

const cookieConsentConfig = {
    links: {
        privacy: 'https://legal.inventivetalent.org/privacy/mineskin'
    },
    categories: {
        strict: {
            required: true,
            cookies: [
                {name: 'CookieScriptConsent', provider: 'MineSkin', duration: '1 year', description: 'Stores your cookie choice for all mineskin.org sites.'}
            ]
        },
        functionality: {},
        performance: {
            cookies: [
                {name: '_ga', provider: 'Google Analytics', duration: '2 years', description: 'Distinguishes visitors for usage statistics.'},
                {name: '_ga_*', provider: 'Google Analytics', duration: '2 years', description: 'Keeps the session state for usage statistics.'}
            ]
        },
        targeting: {}
    },
    // en and de are built into the library; these texts are merged over them.
    translations: {
        en: {
            description: 'With your permission, we use cookies to measure how the docs are used. Your choice applies to all mineskin.org sites. You can change it at any time.',
            settingsDescription: 'Choose which categories of cookies you allow on all mineskin.org sites. Strictly necessary cookies are always on because the site does not work without them.',
            categories: {
                strict: {
                    description: 'Required for the site to function, for example to remember your cookie choice.'
                },
                functionality: {
                    description: 'Not used on this site. On mineskin.org they remember choices such as your language.'
                },
                targeting: {
                    description: 'Not used on this site. On mineskin.org they are used to show advertising that is relevant to you and to measure its effectiveness.'
                }
            }
        },
        de: {
            description: 'Mit Ihrer Erlaubnis verwenden wir Cookies, um die Nutzung der Dokumentation zu messen. Ihre Auswahl gilt für alle mineskin.org-Websites. Sie können sie jederzeit ändern.',
            settingsDescription: 'Wählen Sie, welche Cookie-Kategorien Sie auf allen mineskin.org-Websites erlauben. Unbedingt erforderliche Cookies sind immer aktiv, da die Website ohne sie nicht funktioniert.',
            categories: {
                strict: {
                    description: 'Notwendig für die Funktion der Website, z. B. um Ihre Cookie-Auswahl zu speichern.'
                },
                functionality: {
                    description: 'Auf dieser Website nicht verwendet. Auf mineskin.org speichern sie Ihre Auswahl, z. B. die Sprache.'
                },
                targeting: {
                    description: 'Auf dieser Website nicht verwendet. Auf mineskin.org werden sie verwendet, um für Sie relevante Werbung anzuzeigen und deren Wirksamkeit zu messen.'
                }
            }
        }
    },
    // Colours come from src/css/custom.css, which follows the site's light/dark mode.
    ui: {theme: 'light'}
};

// The docs are English only (<html lang="en">), so the banner follows the browser languages instead.
// On mineskin.org hosts the consent cookie goes on .mineskin.org, shared with the other mineskin.org sites;
// elsewhere (localhost, previews) it stays host-only.
const initScript = `(function(){
var c=${ JSON.stringify(cookieConsentConfig).replace(/</g, '\\u003c') };
var a=['en','de'],l=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en']);
c.language='en';
for(var i=0;i<l.length;i++){var s=String(l[i]).toLowerCase().split('-')[0];if(a.indexOf(s)!==-1){c.language=s;break;}}
if(/(^|\\.)mineskin\\.org$/.test(location.hostname))c.cookie={domain:'.mineskin.org'};
if(window.CookieConsent)window.CookieConsent.init(c);
})();`;

// Blocked until the visitor allows performance cookies; the library then runs them in this order.
// Page views after client-side navigation come from GA4's enhanced measurement ("page changes based on browser
// history events", on for this property); a manual page_view on route change would count each page twice.
const blocked = {type: 'text/plain', 'data-cookiescript': 'accepted', 'data-cookiecategory': 'performance'};
const googleAnalyticsTags: HtmlTagObject[] = [
    {
        tagName: 'script',
        attributes: {...blocked, src: `https://www.googletagmanager.com/gtag/js?id=${ GA_ID }`}
    },
    {
        tagName: 'script',
        attributes: blocked,
        innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ GA_ID }', { 'anonymize_ip': true });`
    }
];

// The library and its init are normal blocking scripts (no async/defer) that run before Google Analytics.
// Google Analytics is left out of development builds.
export function cookieConsentHeadTags(production: boolean): HtmlTagObject[] {
    return [
        {tagName: 'script', attributes: {src: '/js/cookie-consent.min.js'}},
        {tagName: 'script', innerHTML: initScript},
        ...(production ? googleAnalyticsTags : [])
    ];
}
