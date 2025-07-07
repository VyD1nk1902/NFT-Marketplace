import Wallet from "@assets/Homepage/HowItWorks/Setup Wallet Icon.png";
import Wallet2x from "@assets/Homepage/HowItWorks/Setup Wallet Icon@2x.png";
import Collection from "@assets/Homepage/HowItWorks/Create Collection Icon.png";
import Collection2x from "@assets/Homepage/HowItWorks/Create Collection Icon@2x.png";
import Earning from "@assets/Homepage/HowItWorks/Start Earning Icon.png";
import Earning2x from "@assets/Homepage/HowItWorks/Start Earning Icon@2x.png";
import { v4 as uuidv4 } from "uuid";

const HowItWorks = () => {
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
  return (
    <section className="content-wrapper flex flex-col gap-12">
      <div className="flex flex-col gap-2.5">
        <h3 className="capitalize">How it works</h3>
        <p className="text-[22px] capitalize ">Find out how to get started</p>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {HIWCarData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 items-center pt-2.5 pb-[30px] px-[30px] bg-bg-secondary rounded-[20px]"
          >
            <img src={item.img} srcSet={`${item.img} 1x, ${item.img2x} 2x`} alt="" />
            <div className="text-center flex flex-col gap-2.5">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
