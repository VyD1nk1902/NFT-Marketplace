import Buttons from "@components/Buttons";
import { Eye } from "@assets/Svg/SvgExport";
import NFTavatar from "@assets/Avatars/Avatar Placeholder (15).png";
import NFTavatar1 from "@assets/Avatars/Avatar Placeholder (9).png";
import NFTavatar2 from "@assets/Avatars/Avatar Placeholder (14).png";
import DiscoveryNFT1small from "@assets/Discovery/DiscoveryNFT(1).png";
import DiscoveryNFT1large from "@assets/Discovery/DiscoveryNFT(1)@2x.png";
import DiscoveryNFT2small from "@assets/Discovery/DiscoveryNFT(2).png";
import DiscoveryNFT2large from "@assets/Discovery/DiscoveryNFT(2)@2x.png";
import DiscoveryNFT3small from "@assets/Discovery/DiscoveryNFT(3).png";
import DiscoveryNFT3large from "@assets/Discovery/DiscoveryNFT(3)@2x.png";

const DiscoveryMore = () => {
  const discoveryCardContents = [
    {
      background1x: DiscoveryNFT1small,
      background2x: DiscoveryNFT1large,
      userImg: NFTavatar,
      userName: "MoonDancer",
      nftName: "Distant Galaxy",
      price: 1.63,
      bid: 0.33,
    },
    {
      background1x: DiscoveryNFT2small,
      background2x: DiscoveryNFT2large,
      userImg: NFTavatar1,
      userName: "NebulaKid",
      nftName: "Life On Edena",
      price: 1.63,
      bid: 0.33,
    },
    {
      background1x: DiscoveryNFT3small,
      background2x: DiscoveryNFT3large,
      userImg: NFTavatar2,
      userName: "Spaceone",
      nftName: "AstroFiction",
      price: 1.63,
      bid: 0.33,
    },
  ];
  return (
    <section className="content-wrapper flex flex-col gap-[60px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2.5">
          <h3>Discover More NFTs</h3>
          <p className="text-[22px] capitalize">Explore new trending NFTs</p>
        </div>
        <Buttons
          className="px-[50px] mt-4.5 mr-1"
          size="secondary"
          background="transparent"
          link="#"
        >
          <Eye className="fill-action w-[20px] h-[20px]" />
          See All
        </Buttons>
      </div>
      <div className="grid grid-cols-3 gap-[30px] h-[469px]">
        {discoveryCardContents.map((item) => (
          <a href="#" key={item.userName} className="hover-scale ">
            <img
              src={item.background1x}
              srcSet={`${item.background1x} 1x, ${item.background2x} 2x`}
              alt=""
              className="w-full h-[296px] object-cover rounded-t-[20px]"
            />
            <div className="p-5 flex flex-col gap-2.5 bg-bg-secondary rounded-b-[20px]">
              <h5>{item.nftName}</h5>
              <div className="flex gap-3 space-mono-regular">
                <span>
                  <img src={item.userImg} className="w-6 h-6" alt="" />{" "}
                </span>
                {item.userName}
              </div>
              <div className="flex justify-between items-center space-mono-regular">
                <div>
                  <p className="text-xs text-caption-label">Price</p>
                  <p className="text-base">{item.price} ETH</p>
                </div>
                <div>
                  <p className="text-xs text-caption-label">Highest Bid</p>
                  <p className="text-base">{item.bid} wETH</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DiscoveryMore;
