import headerLogo from "@assets/Homepage/Footer/NFT Marketplace.svg";
import { StoreFront } from "@assets/Svg/SvgExport";
import { Discord } from "@assets/Svg/SvgExport";
import { Youtube } from "@assets/Svg/SvgExport";
import { Twitter } from "@assets/Svg/SvgExport";
import { Instagram } from "@assets/Svg/SvgExport";
import { Email } from "@assets/Svg/SvgExport";

import { v4 as uuidv4 } from "uuid";

import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";

import { useResponsive } from "@hooks/useResponsive";

import clsx from "clsx";

import { Link } from "react-router-dom";

import { ROUTES } from "@utils/constants/route";

const Footer = () => {
  // Responsive
  const { isDesktop: Desktop, isTablet: Tablet, isMobile: Mobile } = useResponsive();
  const wrapClass = clsx({
    "grid grid-cols-[1fr_1fr_1.5fr] justify-between 2xl:grid-cols-[1fr_1fr_1fr] 2xl:px-[350px] 2xl:place-items-center xl:px-[195px] px-[100px] gap-5":
      Desktop,
    "w-[690px] flex flex-col gap-[30px] px-[60px]": Tablet,
    "w-[315px] flex flex-col gap-[30px] m-auto": Mobile,
  });

  const copyRightClass = clsx({
    "px-[160px]": Desktop,
    "px-[60px]": Tablet,
    "px-[30px]": Mobile,
  });

  // Explore navigation link data
  const footerExplore = [
    {
      id: uuidv4(),
      title: "Marketplace",
      link: `${ROUTES.MARKETPLACE}`,
    },
    {
      id: uuidv4(),
      title: "Rankings",
      link: `${ROUTES.RANKINGS}`,
    },
    {
      id: uuidv4(),
      title: "Connect a wallet",
      link: `${ROUTES.CONNECT_WALLET}`,
    },
  ];

  return (
    <>
      <footer className="py-10 bg-bg-secondary ">
        <div className={wrapClass}>
          {/* First Col */}
          <div className="flex flex-col items-start">
            <div className="flex justify-center items-center gap-3 pb-[20px] lg:pb-[30px]">
              <span>
                <StoreFront className="text-action mb-1 " />
              </span>
              <span>
                <img src={headerLogo} className="bg-bg-secondary w-[200px]" alt="main logo" />
              </span>
            </div>
            <p className="text-[#CCC] pb-[15px]">
              NFT marketplace UI created with Anima for Figma. <br /> <br /> Join our community
            </p>
            <div className="flex gap-2.5">
              <Link to="/">
                <Discord className="fill-caption-label" />
              </Link>
              <Link to="/">
                <Youtube className="fill-caption-label" />
              </Link>
              <Link to="/">
                <Twitter className="fill-caption-label" />
              </Link>
              <Link to="/">
                <Instagram className="fill-caption-label" />
              </Link>
            </div>
          </div>

          {/* Second Col */}
          <div className="flex flex-col gap-[25px] 2xl:pb-3">
            <h5 className="font-space-mono">Explore</h5>
            <ul className="flex flex-col gap-5 text-[#CCC]">
              {footerExplore.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Col */}
          <div>
            <h5 className="font-space-mono pb-[25px] capitalize">Join our weekly digest</h5>
            {Tablet ? (
              <p className="text-[#CCC] pb-5">Get exclusive promotions & updates straight to your inbox.</p>
            ) : (
              <p className="text-[#CCC] pb-5">
                Get exclusive promotions & updates <br /> straight to your inbox.
              </p>
            )}

            {Desktop && (
              <div className="bg-white rounded-[20px] flex justify-between gap-5">
                <div>
                  <Inputs
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email here..."
                    type="text"
                    className=" bg-white w-[100%] pl-5 py-4 h-[60px] text-bg-primary rounded-[20px] border-none  "
                  />
                </div>
                <div className="w-[50%]">
                  <Buttons className="w-full" size="secondary" background="color">
                    Subscribe
                  </Buttons>
                </div>
              </div>
            )}

            {Tablet && (
              <div className="bg-white w-[420px] rounded-[20px] flex gap-5">
                <div>
                  <Inputs
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email here..."
                    type="text"
                    className=" bg-white pl-5 py-4 h-[60px] text-bg-primary rounded-[20px] border-none  "
                  />
                </div>
                <div>
                  <Buttons className="w-[200px] " size="secondary" background="color">
                    Subscribe
                  </Buttons>
                </div>
              </div>
            )}

            {Mobile && (
              <div className="flex flex-col rounded-[20px]  w-full gap-4">
                <div>
                  <Inputs
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email here..."
                    type="text"
                    className=" bg-white w-full h-[46px] pl-5 py-4 text-bg-primary rounded-[20px] border-none  "
                  />
                </div>
                <div>
                  <Buttons className="w-full" size="tertiary" background="color">
                    <Email className="fill-text w-5 h-5" /> Subscribe
                  </Buttons>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        {Desktop && (
          <div className={copyRightClass}>
            <div className="border-b w-full text-caption-label pt-[30px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}

        {Tablet && (
          <div className={copyRightClass}>
            <div className="border-b w-full text-caption-label pt-[50px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}

        {Mobile && (
          <div className={copyRightClass}>
            <div className="border-b w-full text-caption-label pt-[30px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
