import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollElement = document.querySelector("#smooth-wrapper");

    const locoScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      lerp: 0.08,
      multiplier: 1.2,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollElement, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="smooth-wrapper" data-scroll-container>
      {children}
    </div>
  );
}
