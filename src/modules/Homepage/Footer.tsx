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

const Footer = () => {
  // Responsive
  const { isDesktop: Desktop, isTablet: Tablet, isMobile: Mobile } = useResponsive();
  let wrapClass = "";
  if (Desktop)
    wrapClass =
      "grid grid-cols-[1fr_1fr_1.5fr] justify-between 2xl:grid-cols-[1fr_1fr_1fr] 2xl:px-[350px] 2xl:place-items-center px-[195px] gap-5";
  if (Tablet) wrapClass = "w-[690px] flex flex-col gap-[30px] px-[60px]";
  if (Mobile) wrapClass = "w-[315px] flex flex-col gap-[30px] m-auto";

  // Explore navigation link data
  const footerExplore = [
    {
      id: uuidv4(),
      title: "Marketplace",
      link: "#",
    },
    {
      id: uuidv4(),
      title: "Rankings",
      link: "#",
    },
    {
      id: uuidv4(),
      title: "Connect a wallet",
      link: "#",
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
              <a href="#">
                <Discord className="fill-caption-label" />
              </a>
              <a href="#">
                <Youtube className="fill-caption-label" />
              </a>
              <a href="#">
                <Twitter className="fill-caption-label" />
              </a>
              <a href="#">
                <Instagram className="fill-caption-label" />
              </a>
            </div>
          </div>

          {/* Second Col */}
          <div className="flex flex-col gap-[25px] 2xl:pb-3">
            <h5 className="font-space-mono">Explore</h5>
            <ul className="flex flex-col gap-5 text-[#CCC]">
              {footerExplore.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
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
                  <Buttons className="" size="secondary" background="color" link="#">
                    Subcribe
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
                  <Buttons className="w-[200px] " size="secondary" background="color" link="#">
                    Subcribe
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
                  <Buttons className="" size="tertiary" background="color" link="#">
                    <Email className="fill-text w-5 h-5" /> Subcribe
                  </Buttons>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        {Desktop && (
          <div className="px-[160px]">
            <div className="border-b w-full text-caption-label pt-[30px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}

        {Tablet && (
          <div className="px-[60px]">
            <div className="border-b w-full text-caption-label pt-[50px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}

        {Mobile && (
          <div className="px-[30px]">
            <div className="border-b w-full text-caption-label pt-[30px] mb-[20px]"></div>
            <p className="text-[12px] text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
