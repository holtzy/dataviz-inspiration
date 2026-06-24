// Kit (ConvertKit) newsletter configuration + subscribe helper.
//
// The form UID is public — it ships in Kit's own embed snippet — so it's safe
// in client code. The form is configured for DOUBLE OPT-IN in Kit, so Kit sends
// the confirmation email itself; on our side we just show a "check your inbox" state.
//
// All network logic is isolated here so the UI never talks to Kit directly. If the
// browser POST is ever blocked by CORS, swap KIT_SUBSCRIBE_URL / the fetch below for
// a small Next.js API route — nothing else needs to change.

export const KIT_FORM_UID = "bd16825169";

// Public form subscription endpoint used by Kit's embeddable forms.
const KIT_SUBSCRIBE_URL = `https://app.kit.com/forms/${KIT_FORM_UID}/subscriptions`;

export type SubscribeResult = { ok: true } | { ok: false; error: string };

/**
 * Subscribe an email to the Kit form.
 * @param email   the subscriber's email
 * @param source  where on the site they signed up (e.g. "modal"), stored on the
 *                "source" custom field in Kit for per-placement attribution.
 *                Unknown custom fields are ignored by Kit, so this is safe even
 *                before the field exists.
 */
export const subscribeToKit = async (
  email: string,
  source?: string
): Promise<SubscribeResult> => {
  try {
    const body = new URLSearchParams();
    body.set("email_address", email);
    if (source) {
      body.set("fields[source]", source);
    }

    const res = await fetch(KIT_SUBSCRIBE_URL, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });

    if (!res.ok) {
      return { ok: false, error: "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
};
