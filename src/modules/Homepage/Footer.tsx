import headerLogox1 from "@assets/Homepage/Header/NFT Marketplace.png";
import headerLogox2 from "@assets/Homepage/Header/NFT Marketplace-2x.png";
import { StoreFront } from "@assets/Svg/SvgExport";
import { Discord } from "@assets/Svg/SvgExport";
import { Youtube } from "@assets/Svg/SvgExport";
import { Twitter } from "@assets/Svg/SvgExport";
import { Instagram } from "@assets/Svg/SvgExport";
import { v4 as uuidv4 } from "uuid";
import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";

const Footer = () => {
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
      <footer className="px-[195px] py-10 bg-bg-secondary">
        <div className="grid grid-cols-[243px_240px_420px] justify-between">
          {/* First Col */}
          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center gap-3 pb-[30px]">
              <span>
                <StoreFront className="text-action mb-1 " />
              </span>
              <span>
                <img src={headerLogox1} srcSet={`${headerLogox1} 1x, ${headerLogox2} 2x`} alt="main logo" />
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
          <div>
            <h5 className="font-space-mono pb-[25px]">Explore</h5>
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
            <p className="text-[#CCC] pb-5">
              Get exclusive promotions & updates <br /> straight to your inbox.
            </p>
            <div className="bg-white rounded-[20px] w-[420px] flex gap-5">
              <div>
                <Inputs
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email here..."
                  type="text"
                  className=" bg-white text-bg-primary rounded-[20px] border-none  "
                />
              </div>
              <div>
                <Buttons className="w-[200px] " size="secondary" background="color" link="#">
                  Subcribe
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
