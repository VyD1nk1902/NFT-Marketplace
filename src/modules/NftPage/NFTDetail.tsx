import { useMemo } from "react";
import { useResponsive } from "@hooks/useResponsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Avatar8 from "@assets/Avatars/Avatar Placeholder (8).png";
import { Globe } from "@assets/Export/SvgExport";

import Clock from "@components/Clock";
import Buttons from "@components/Buttons";
import { ROUTES } from "@utils/constants/route";

const ArtistDetail = () => {
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const timeEnd = useMemo(() => {
    return new Date().getTime() + 24 * 3600 * 1000;
  }, []);

  const navigate = useNavigate();
  const tagsHandle = () => navigate(ROUTES.MARKETPLACE);

  return (
    <section className="flex xl:gap-[150px] 2xl:gap-[200px] gap-[30px] content-wrapper py-10">
      {/* Content Left */}
      <div className="flex flex-col gap-[30px] lg:w-[50%] max-[350px]:px-4 ">
        {/* Headline */}
        <div className="flex flex-col gap-2.5">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold">The Orbitians</p>
          <p className="lg:text-[22px] text-caption-label">Minted on Sep 30, 2022</p>
        </div>

        {/* Clock Mobile */}
        {(MobileS || Mobile) && (
          <div className="flex flex-col bg-bg-secondary justify-center items-center pb-5 rounded-[20px]">
            <Clock time={timeEnd} className={MobileS ? "flip-clock-mobileS" : "flip-clock-mobile"} day={false} />
            <Buttons size="secondary" className="px-[50px] w-[235px]" background="color">
              Place Bid
            </Buttons>
          </div>
        )}

        {/* Sub-Head */}
        <div>
          <p className="text-caption-label font-space-mono pb-2.5 lg:text-[22px] lg:font-[600]">Created By</p>
          <Link to={ROUTES.ARTIST_DETAILS} className="flex gap-3 items-center hover-scale">
            <img src={Avatar8} className="w-[24px] h-[24px]" alt="avatar" />
            <p className="lg:text-[22px] lg:font-[600]">Orbitian</p>
          </Link>
        </div>

        {/* Description */}
        <div>
          <p className="font-space-mono text-caption-label pb-2.5 lg:text-[22px] lg:font-[600]">Description</p>
          <p className="lg:text-[22px]">
            The Orbitians <br /> is a collection of 10,000 unique NFTs on the Ethereum blockchain, <br /> <br />
            There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are
            Orbitians.
            <br /> <br />
            They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are
            a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are
            called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way
            to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into
            Orbitian territory, so they've taken to make human beings their target.
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2.5">
          <p className="font-space-mono text-caption-label lg:text-[22px] lg:font-[600]">Details</p>
          <Link to={ROUTES.RICK_ROLL} className="flex items-center gap-2.5 hover-scale">
            <Globe className="fill-caption-label max-lg:w-[24px] max-lg:h-[24px]" />
            <p className="lg:text-[22px]">View on Etherscan</p>
          </Link>
          <Link to={ROUTES.RICK_ROLL} className="flex items-center gap-2.5 hover-scale">
            <Globe className="fill-caption-label max-lg:w-[24px] max-lg:h-[24px]" />
            <p className="lg:text-[22px]">View Original</p>
          </Link>
        </div>

        {/* Tags */}
        <div>
          <p className="font-space-mono text-caption-label lg:text-[22px] lg:font-[600] pb-5">Tags</p>
          <ul className="flex max-lg:flex-col gap-5">
            {["Animation", "illustration", "moon", "moon"].map((tag) => (
              <li key={tag}>
                <Buttons size="tertiary" className="bg-bg-secondary uppercase px-[30px]" onClick={tagsHandle}>
                  {tag}
                </Buttons>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Clock Right */}
      <div>
        {(Tablet || Desktop) && (
          <div className="flex flex-col bg-bg-secondary justify-center items-center pb-5 rounded-[20px]">
            <Clock time={timeEnd} className="" day={false} />
            <Buttons size="secondary" className="px-[50px] w-[235px]" background="color">
              Place Bid
            </Buttons>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtistDetail;
