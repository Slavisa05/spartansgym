import Script from "next/script";
import { GA_ID, CONSENT_STORAGE_KEY } from "./config";

/**
 * Google Analytics 4 sa Consent Mode v2.
 *
 * - Podrazumevano stanje: sve odbijeno (`denied`) — GA ne piše kolačiće dok
 *   posetilac ne prihvati u baneru (`CookieBanner`).
 * - Ako GA ID nije podešen (`NEXT_PUBLIC_GA_ID`), ne renderuje se ništa i
 *   nema ni baner ni skripte.
 */
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Consent default — inline, izvršava se odmah, pre gtag.js */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            try {
              if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
                gtag('consent', 'update', { analytics_storage: 'granted' });
              }
            } catch (e) {}
          `,
        }}
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
