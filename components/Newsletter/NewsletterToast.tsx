"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { KitInlineForm } from "./KitInlineForm";

// Shows the newsletter signup inside a toast, 2 seconds after the site loads.
// Mounted once in the root layout, so the timer runs a single time per page load.
// A sessionStorage flag keeps it from re-appearing during the same visit.
const STORAGE_KEY = "newsletter-toast-shown";
const DELAY_MS = 10000;

export const NewsletterToast = () => {
  useEffect(() => {
    // if (sessionStorage.getItem(STORAGE_KEY)) {
    //   return;
    // }

    const timer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");

      toast.custom(
        (id) => (
          <div className="relative w-[360px] max-w-[calc(100vw-2rem)] rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => toast.dismiss(id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Toast copy & styling — tweak freely, independent of the modal */}
            <p className="text-base font-bold text-gray-800 pr-6">
              Love Dataviz? So do I! ❤️
            </p>
            <p className="text-sm text-gray-500 mt-1">
              I hunt down the <b>best</b> chart examples — want the gems I find,
              every now and then?
            </p>
            <KitInlineForm source="toast" height={100} className="mt-1" />
            <p className="text-xs text-gray-400">
              Join 19,000+ subscribers. Opt out anytime.
            </p>
          </div>
        ),
        { duration: Infinity },
      );
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
