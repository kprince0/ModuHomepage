// Server component that injects multiple JSON-LD <script> tags.
// Safe for Next.js static export.

type Props = {
  schemas: object[];
};

export default function SchemaScripts({ schemas }: Props) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
