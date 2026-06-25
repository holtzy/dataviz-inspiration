"use client";

import { Mail } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { KitInlineForm } from "./KitInlineForm";

// The newsletter signup modal opened from the navbar's envelope icon.
// Copy & styling here are independent from the toast (NewsletterToast) — tweak freely.
export const NewsletterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Subscribe to the newsletter"
          className="ml-3 mr-4 p-2 text-gray-600 hover:text-black cursor-pointer"
        >
          <Mail className="h-5 w-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <h2>Love Dataviz? So do I! ❤️</h2>
        <p>
          I spend my days hunting down the <b>best</b> chart examples. Want to
          receive the gems I find, every now and then?
        </p>
        <div className="-translate-x-3">
          <KitInlineForm source="navbar" className="" />
        </div>
        <p className="text-sm text-gray-800">
          Join 19,000+ subscribers. Opt out whenever you want.
        </p>
      </DialogContent>
    </Dialog>
  );
};
