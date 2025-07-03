import Buttons from "@components/Buttons";
import Rocket from "@assets/Icons/RocketLaunch.svg";
import HeroImgx1 from "@assets/Hero/hero-x1.png";
import HeroImgx2 from "@assets/Hero/hero-x2.png";
import AvatarSpace from "@assets/Avatars/Avatar Placeholder (13).png";

const HeroSection = () => {
  const heroData = [
    {
      number: "240",
      title: "Total Sale",
    },
    {
      number: "100",
      title: "Auctions",
    },
    {
      number: "240",
      title: "Artists",
    },
  ];

  return (
    <section className="pt-[100px]">
      <div className="content-wrapper grid grid-cols-2 gap-[30px] py-20">
        <div className="flex flex-col gap-[30px]">
          <div>
            <h1 className="font-[600]">
              Discover <br /> Digital Art & <br /> Collect NFTs
            </h1>
            <p className="text-[22px] font-light capitalize">
              NFT Marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <Buttons
            className="px-[50px] w-[224px] font-[600]"
            size="tertiary"
            background="color"
          >
            <img src={Rocket} className="w-[20px] h-[20px]" alt="" />
            Get Started
          </Buttons>
          <div>
            <ul className="flex gap-[30px]">
              {heroData.map((item) => (
                <li key={item.title}>
                  <h4 className="space-mono-bold">{item.number}k+</h4>
                  <h5>{item.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-lg h-[512px]">
          <img
            src={HeroImgx1}
            srcSet={`${HeroImgx1} 1x, ${HeroImgx2} 2x`}
            alt=""
          />
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
