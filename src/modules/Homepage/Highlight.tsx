import HighlightBg from "@assets/Homepage/Highlight/NFT Highlight.png";
import Buttons from "@components/Buttons";
import { Eye } from "@assets/Export/SvgExport";
import Avatar from "@assets/Avatars/Avatar Placeholder (6).png";

import { useMemo } from "react";
import { useResponsive } from "@hooks/useResponsive";

import Clock from "@components/Clock";
import { Link } from "react-router-dom";

import { ROUTES } from "@utils/constants/route";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const Highlight = () => {
  const { isMobileSmall: MobileS, isTablet: Tablet, isMobile: Mobile, isDesktop: Desktop } = useResponsive();
  const navigate = useNavigate();
  const handleSeeNFT = () => navigate(ROUTES.NFT_DETAILS);

  const contentWrapClass = clsx({
    "xl:max-w-[1050px] lg:max-w-[900px] pt-[360px]": Desktop,
    "max-w-[690px] pt-[360px]": Tablet,
    "max-w-[315px] pt-[120px]": Mobile,
    "max-w-[290px] pt-[120px]": MobileS,
  });
  // mx-auto md:pt-[360px] pt-[120px] mb-[100px]
  // Make sure time not reset after render with useMemo
  const timeEnd = useMemo(() => {
    return new Date().getTime() + 24 * 3600 * 1000 * 2.5;
  }, []);
  //getTime -> current time

  // The clock positions is different depending on the responsive layout.
  // React will re-render (unmount/mount) the Clock component when the layout changes,
  // so I use useMemo to ensure the countdown time stays the same across renders.
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
        <div className="relative z-30 pb-[100px] ">
          <div className={clsx("flex sm:items-end mx-auto", contentWrapClass)}>
            <div className="flex flex-col gap-[30px] mx-auto">
              <Link
                to={ROUTES.ARTIST_DETAILS}
                className="flex px-5 py-2.5 bg-bg-secondary w-[151px] rounded-[20px] gap-3 hover-scale"
              >
                <img src={Avatar} className="w-6 h-6" alt="" />
                <span>Schroomie</span>
              </Link>
              {Desktop ? <h2>Magic Mashrooms</h2> : <h3>Magic Mashrooms</h3>}

              {/* Clock-mobile */}
              {Mobile && <Clock time={timeEnd} className="flip-clock-mobile" day={Tablet || Desktop} />}
              {MobileS && <Clock time={timeEnd} className="flip-clock-mobileS" day={Tablet || Desktop} />}
              <Buttons
                className="sm:w-[198px] w-full px-[50px] py-[22px] text-black bg-text"
                onClick={handleSeeNFT}
                size="secondary"
                background="transparent"
              >
                <Eye className="fill-action w-5 h-5 " />
                <span className="whitespace-nowrap">See NFT</span>
              </Buttons>
            </div>
            <div>
              {/* Clock */}
              {Tablet && <Clock time={timeEnd} className="flip-clock-tablet" day={Tablet || Desktop} />}
              {Desktop && <Clock time={timeEnd} className="" day={Tablet || Desktop} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
