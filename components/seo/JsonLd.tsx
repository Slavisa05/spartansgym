/**
 * Ubacuje JSON-LD (schema.org) blok u <head>/<body>.
 * Server komponenta — nema interaktivnosti.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // sadržaj je naš, generisan iz data/ — nije korisnički unos
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
