import Buttons from "@components/Buttons";
import Rocket from "@assets/Icons/RocketLaunch.svg";
import HeroImgx1 from "@assets/Homepage/Hero/hero-x1.png";
import HeroImgx2 from "@assets/Homepage/Hero/hero-x2.png";
import AvatarSpace from "@assets/Avatars/Avatar Placeholder (13).png";

import { v4 as uuidv4 } from "uuid";

import HeroCard from "@components/HeroCard";

const HeroSection = () => {
  // Item list render data
  const heroData = [
    {
      id: uuidv4(),
      number: "240",
      title: "Total Sale",
    },
    {
      id: uuidv4(),
      number: "100",
      title: "Auctions",
    },
    {
      id: uuidv4(),
      number: "240",
      title: "Artists",
    },
  ];

  return (
    <section className="pt-[100px]">
      <div className="content-wrapper grid grid-cols-1 sm:grid-cols-2 gap-[30px] ">
        {/* Content Left */}
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-5">
            <h1>Discover Digital Art & Collect NFTs</h1>
            <p className="lg:text-xl text-base  font-light lg:capitalize">
              NFT Marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </p>
          </div>
          <div className="sm:hidden block">
            <HeroCard url1={HeroImgx1} url2={HeroImgx2} url3={AvatarSpace} className="mb-10" />
          </div>
          <Buttons className="px-[50px] sm:w-[224px] w-full" size="tertiary" background="color" link="#">
            <img src={Rocket} className="w-[20px] h-[20px]" alt="" />
            Get Started
          </Buttons>
          <div>
            <ul className="flex justify-between sm:gap-[30px] lg:gap-[50px] sm:justify-start">
              {heroData.map((item) => (
                <li key={item.id}>
                  <h4 className="font-space-mono font-bold">{item.number}k+</h4>
                  <p className="lg:text-[24px]">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Card */}
        <div className="hidden sm:block">
          <img src={HeroImgx1} srcSet={`${HeroImgx1} 1x, ${HeroImgx2} 2x`} alt="" />
          <div className="p-5 flex flex-col gap-2.5 bg-bg-secondary rounded-b-[20px]">
            <h5>Space Walking</h5>
            <div className="flex gap-3">
              <span>
                <img src={AvatarSpace} className="w-6 h-6" alt="" />{" "}
              </span>
              Animakid
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
