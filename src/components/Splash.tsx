import React, { useState, useEffect } from "react";
import gsap from "gsap";
import splash from "~/assets/splash.svg";

const Splash: React.FC = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  const updateCount = () => setLoadedCount((prev) => prev + 1);

  const isReload = () => {
    const navigationEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const navigationType =
      navigationEntries.length > 0 ? navigationEntries[0].type : null;
    return navigationType === "reload";
  };

  useEffect(() => {
    if (isReload()) {
      sessionStorage.removeItem("animationShown");
    } else if (sessionStorage.getItem("animationShown")) {
      setShowAnimation(false);
      return;
    }

    const images = document.querySelectorAll("img");
    setTotalImages(images.length);
    images.forEach((img) => {
      if (img.complete) {
        updateCount();
      } else {
        img.addEventListener("load", () => {
          updateCount();
        });
      }
    });
  }, []);

  useEffect(() => {
    gsap.registerEffect({
      name: "fadeOutSplash",
      defaults: {
        onComplete: () => {},
      },
      extendTimeline: true,
      effect: (
        targets: gsap.TweenTarget,
        config: { onComplete: () => void }
      ) => {
        return gsap.to(targets, {
          opacity: 0,
          ease: "power2.out",
          duration: 0.75,
          display: "none",
          onComplete: config.onComplete,
        });
      },
    });
    gsap.registerEffect({
      name: "yoyoDot",
      defaults: {
        delay: 0,
      },
      effect: (targets: gsap.TweenTarget, config: { delay: number }) => {
        return gsap.to(targets, {
          scale: 1.5,
          repeat: -1,
          yoyo: true,
          duration: 0.8,
          ease: "power1.inOut",
          delay: config.delay,
        });
      },
    });

    const tl = gsap.timeline({ defaults: { duration: 1.75 } });

    if (!showAnimation) {
      tl.to({}, { duration: 0.75 }).fadeOutSplash("#splash");
    } else if (loadedCount === totalImages && totalImages > 0) {
      tl.to({}, { duration: 1.0 })
        .fadeOutSplash("#splash", {
          onComplete: () => {
            sessionStorage.setItem("animationShown", "true");
          },
        })
        .fromTo(
          ["#profile", "#socials", "#skills"],
          { opacity: 0, x: 50 },
          { opacity: 1, ease: "power2.out", x: 0, stagger: 0.5 }
        );
    }
  }, [showAnimation, loadedCount, totalImages]);

  return (
    <div
      id="splash"
      className="bg-blue-100 fixed inset-0 w-full h-full z-9999 flex flex-col gap-6 justify-center items-center p-10"
    >
      <p className="text-7xl select-none pointer-events-none">
        <span id="splashTitle">
          <img src={splash.src} alt="hrel11 portfolio" />
        </span>
      </p>
    </div>
  );
};

export default Splash;
