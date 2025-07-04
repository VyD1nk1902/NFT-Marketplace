import HighlightBg from "@assets/Highlight/NFT Highlight.png";
import Buttons from "@components/Buttons";
import { Eye } from "@assets/Svg/SvgExport";
import Avatar from "@assets/Avatars/Avatar Placeholder (6).png";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Highlight = () => {
  return (
    <section>
      <div className="relative w-full h-[640px] overflow-hidden">
        {/* Background img */}
        <img src={HighlightBg} className="w-full h-full object-cover object-center absolute inset-0" alt="Background" />
        {/* Background filter */}
        <div className="absolute inset-0 bg-gradient3 blur-3xl "></div>
        {/* Content */}
        <div className="relative z-30 w-[1050px] mx-auto pt-[360px] pb-[60px]">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-[30px]">
              <a href="#" className="flex px-5 py-2.5 bg-bg-secondary w-[151px] rounded-[20px] gap-3 hover-scale">
                <img src={Avatar} className="w-6 h-6" alt="" />
                <span>Schroomie</span>
              </a>
              <h2>Magic Mashrooms</h2>
              <Buttons
                className="w-[198px] px-[50px] py-[22px] text-black bg-text"
                link="#"
                size="secondary"
                background="transparent"
              >
                <Eye className="fill-action w-5 h-5 " />
                <span className="whitespace-nowrap">See NFT</span>
              </Buttons>
            </div>
            {/* Clock */}
            <div className="relative p-[30px] font-space-mono flex flex-col gap-[30px] ">
              <div className="absolute inset-0 bg-[#3B3B3B80] rounded-[20px]"></div>
              <div className="relative z-10">
                <p className="text-xs pb-5">Auction ends in:</p>
                <FlipClockCountdown
                  to={new Date().getTime() + 24 * 3600 * 1000 * 2.5}
                  renderMap={[true, true, true, true]}
                >
                  Finished
                </FlipClockCountdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
