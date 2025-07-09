import HighlightBg from "@assets/Homepage/Highlight/NFT Highlight.png";
import Buttons from "@components/Buttons";
import { Eye } from "@assets/Svg/SvgExport";
import Avatar from "@assets/Avatars/Avatar Placeholder (6).png";

import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import Clock from "@components/Clock";

const Highlight = () => {
  // Mobile: < 640px
  const isMobile = useMediaQuery({ maxWidth: 639 });

  // Tablet: >= 640px và < 1024px
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  // Desktop: >= 1024px
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Make sure time not reset after render
  const timeEnd = useMemo(() => {
    return new Date().getTime() + 24 * 3600 * 1000 * 2.5;
  }, []);
  //getTime -> current time

  // The clock positions is different depending on the responsive layout.
  // React will re-render (unmount/mount) the Clock component when the layout changes,
  // so we use useMemo to ensure the countdown time stays the same across renders.
  // Using react-responsive for conditional rendering is better than relying on
  // CSS (hidden/block/flex) because it prevents multiple Clocks from being mounted
  // and avoids timer resets or glitches.

  return (
    <section>
      <div className="relative w-full overflow-hidden">
        {/* Background img */}
        <img src={HighlightBg} className="w-full h-full object-cover object-center absolute inset-0" alt="Background" />
        {/* Background filter */}
        <div className="absolute inset-0 bg-gradient3 sm:blur-3xl blur"></div>
        {/* Content */}
        <div className="relative z-30 lg:max-w-[1050px] sm:max-w-[690px] max-w-[315px] m-auto md:pt-[360px] pt-[120px] mb-[100px] ">
          <div className="flex justify-between md:items-end">
            <div className="flex flex-col gap-[30px]">
              <a href="#" className="flex px-5 py-2.5 bg-bg-secondary w-[151px] rounded-[20px] gap-3 hover-scale">
                <img src={Avatar} className="w-6 h-6" alt="" />
                <span>Schroomie</span>
              </a>
              <h2>Magic Mashrooms</h2>
              {/* Clock-mobile */}
              {isMobile && <Clock time={timeEnd} className="flip-clock-mobile" day={isTablet || isDesktop} />}
              <Buttons
                className="sm:w-[198px] w-full px-[50px] py-[22px] text-black bg-text"
                link="#"
                size="secondary"
                background="transparent"
              >
                <Eye className="fill-action w-5 h-5 " />
                <span className="whitespace-nowrap">See NFT</span>
              </Buttons>
            </div>
            {/* Clock */}
            {isTablet && <Clock time={timeEnd} className="flip-clock-tablet" day={isTablet || isDesktop} />}
            {isDesktop && <Clock time={timeEnd} className="" day={isTablet || isDesktop} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
