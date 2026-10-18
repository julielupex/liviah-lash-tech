/**
 * Deposit payment helper.
 * When STRIPE_SECRET_KEY is configured we create a real Stripe PaymentIntent.
 * Otherwise the booking flow runs in an elegant "demo" mode so every feature
 * remains fully usable without live keys.
 */
export async function createDepositIntent(opts: {
  amountCents: number;
  email: string;
  description: string;
}): Promise<
  | { mode: "demo" }
  | { mode: "stripe"; clientSecret: string; publishableKey: string | null }
> {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return { mode: "demo" };

  try {
    const res = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        amount: String(opts.amountCents),
        currency: "kes",
        description: opts.description,
        "payment_method_types[]": "card",
        ...(opts.email ? { receipt_email: opts.email } : {}),
      }),
    });
    const data = (await res.json()) as { client_secret?: string };
    if (!res.ok || !data.client_secret) return { mode: "demo" };
    return {
      mode: "stripe",
      clientSecret: data.client_secret,
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PK ?? null,
    };
  } catch {
    return { mode: "demo" };
  }
}
