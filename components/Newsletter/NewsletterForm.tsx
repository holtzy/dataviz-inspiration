"use client";

import { FormEvent, useState } from "react";
import { buttonVariants } from "../ui/button";
import { subscribeToKit } from "./kit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

type NewsletterFormProps = {
  // Where this form lives, for per-placement attribution in Kit (e.g. "modal").
  source?: string;
  className?: string;
};

export const NewsletterForm = ({ source, className }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setError("Please enter a valid email.");
      return;
    }
    setStatus("loading");
    setError("");

    const result = await subscribeToKit(email, source);
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.error);
    }
  };

  // Double opt-in: the subscriber must click the confirmation link Kit emails them.
  if (status === "success") {
    return (
      <div className={className}>
        <p className="text-sm font-bold text-gray-800">Almost there! 🎉</p>
        <p className="text-xs text-gray-500 mt-1">
          Check your inbox and click the confirmation link to start receiving
          dataviz inspiration. (Don&apos;t forget to peek in spam.)
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="text-lg font-bold text-gray-800 mb-3">
        Love Dataviz? So do I! ❤️
      </p>
      <p className="text-sm text-gray-500">
        I spend my days hunting down the <b>best</b> chart examples. Want to
        receive the gems I find, every now and then?
      </p>

      <form onSubmit={onSubmit} className="flex items-center gap-2 mt-3 mb-2">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading"}
          className="flex-1 min-w-0 text-sm px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonVariants({ variant: "default" })}
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-1 mb-2">
        Join 19,000+ subscribers. Opt out whenever you want.
      </p>
      {status === "error" && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};
