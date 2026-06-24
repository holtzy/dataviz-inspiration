"use client";

import { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ParallaxSection } from "../../components/ParallaxSection";
import { buttonVariants } from "../../components/ui/button";

// Landing page subscribers reach after clicking the confirmation link (Kit's
// double opt-in redirect points here).
export default function Page() {
  useEffect(() => {
    // A short, celebratory confetti burst from both sides on load.
    const duration = 1800;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 60,
      disableForReducedMotion: true,
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      const particleCount = 40 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random() * 0.3, y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.7 + Math.random() * 0.3, y: Math.random() - 0.2 },
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <main className="wrapper">
        <div className="max-w-xl mx-auto text-center pt-12 pb-6">
          <h1 className="text-4xl font-bold">You&apos;re in! 🎉</h1>
          <p className="text-lg text-gray-600 mt-4">
            Thanks for confirming — you&apos;re officially on the list. 💛
          </p>
          <p className="text-gray-500 mt-3">
            From time to time I&apos;ll send you something dataviz-related worth
            your attention. I know your time is precious, and will always try to
            make each item as valuable as possible. I&apos;m a real human on the
            other side, so please feel free to hit reply anytime!
          </p>
          <p className="text-gray-500 mt-3">
            One small thing: drag my confirmation email into your{" "}
            <b>Primary</b> tab (or mark it &quot;not spam&quot;) so my next one
            doesn&apos;t get lost.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonVariants()}>
              Explore the gallery →
            </Link>
          </div>
        </div>
      </main>

      <div className="full-bleed mt-6">
        <ParallaxSection
          imgLink="https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true"
          opacity={0.6}
          height={300}
        />
      </div>

      <div className="wrapper mt-12">
        <Footer />
      </div>
    </>
  );
}
