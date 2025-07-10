import Wallet from "@assets/Homepage/HowItWorks/Setup Wallet Icon.png";
import Wallet2x from "@assets/Homepage/HowItWorks/Setup Wallet Icon@2x.png";
import Collection from "@assets/Homepage/HowItWorks/Create Collection Icon.png";
import Collection2x from "@assets/Homepage/HowItWorks/Create Collection Icon@2x.png";
import Earning from "@assets/Homepage/HowItWorks/Start Earning Icon.png";
import Earning2x from "@assets/Homepage/HowItWorks/Start Earning Icon@2x.png";

import { v4 as uuidv4 } from "uuid";

import { useResponsive } from "@hooks/useResponsive";

const HowItWorks = () => {
  // Cards list data render
  const HIWCarData = [
    {
      id: uuidv4(),
      img: Wallet,
      img2x: Wallet2x,
      title: "Setup Your wallet",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      id: uuidv4(),
      img: Collection,
      img2x: Collection2x,
      title: "Create Collection",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: uuidv4(),
      img: Earning,
      img2x: Earning2x,
      title: "Start Earning",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  // Responsive variables
  const { isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();

  let pxClass = "";
  if (Mobile) pxClass = "p-5";
  if (Tablet) pxClass = "pt-2.5 pb-[30px] px-5";
  if (Desktop) pxClass = "pt-2.5 pb-[30px] px-[30px]";

  return (
    <section className="content-wrapper flex flex-col gap-12">
      {/* Section title */}
      <div className="flex flex-col gap-2.5">
        {Desktop ? <h3 className="capitalize">How it works</h3> : <h4 className="capitalize">How it works</h4>}
        {Desktop ? (
          <p className="text-[22px] capitalize ">Find out how to get started</p>
        ) : (
          <p className="text-base capitalize ">Find out how to get started</p>
        )}
      </div>

      {/* Cards list */}
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px]">
        {HIWCarData.map((item) => (
          <div
            key={item.id}
            className={`flex sm:flex-col gap-5 ${pxClass}  items-center bg-bg-secondary rounded-[20px]`}
          >
            {Desktop && (
              <>
                <img
                  src={item.img}
                  srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                  className="w-[250px] h-[250px]"
                  alt=""
                />
                <div className="text-center flex flex-col gap-2.5">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </>
            )}

            {Tablet && (
              <>
                <img
                  src={item.img}
                  srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                  className="w-[160px] h-[160px]"
                  alt=""
                />
                <div className="text-center flex flex-col gap-2.5">
                  <p className="font-[600]">{item.title}</p>
                  <p className="text-[12px]">{item.desc}</p>
                </div>
              </>
            )}

            {Mobile && (
              <>
                <img
                  src={item.img}
                  srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                  className="w-[100px] h-[100px]"
                  alt=""
                />
                <div className=" flex flex-col gap-2.5">
                  <p className="font-[600]">{item.title}</p>
                  <p className="text-[12px]">{item.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
