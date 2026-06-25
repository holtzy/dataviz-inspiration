// Embeds the Kit newsletter form as an <iframe> pointing at its hosted page.
// An iframe is a self-contained document, so Kit's own code loads and runs inside it
// regardless of WHEN the iframe appears — which is why it works cleanly inside a modal
// or toast (no script-timing issues). It also reflects whatever styling/content you set
// on the form in the Kit dashboard, live.
const FORM_URL = "https://prodigious-trailblazer-3628.kit.com/bd16825169";

type KitInlineFormProps = {
  // Appended as a query param for attribution (best-effort; needs Kit-side mapping
  // to actually land on the "source" custom field).
  source?: string;
  // Each caller (modal, toast, …) can add classes as it likes.
  className?: string;
};

export const KitInlineForm = ({ source, className }: KitInlineFormProps) => {
  const src = source
    ? `${FORM_URL}?source=${encodeURIComponent(source)}`
    : FORM_URL;

  return (
    <iframe
      src={src}
      title="Subscribe to the newsletter"
      loading="lazy"
      className={className}
      style={{ width: "100%", height: 128, border: "none" }}
    />
  );
};
