import Buttons from "@components/Buttons";
import { Eye } from "@assets/Export/SvgExport";
import NFTavatar from "@assets/Avatars/Avatar Placeholder (15).png";
import NFTavatar1 from "@assets/Avatars/Avatar Placeholder (9).png";
import NFTavatar2 from "@assets/Avatars/Avatar Placeholder (14).png";
import DiscoveryNFT1small from "@assets/Homepage/Discovery/DiscoveryNFT(1).png";
import DiscoveryNFT1large from "@assets/Homepage/Discovery/DiscoveryNFT(1)@2x.png";
import DiscoveryNFT2small from "@assets/Homepage/Discovery/DiscoveryNFT(2).png";
import DiscoveryNFT2large from "@assets/Homepage/Discovery/DiscoveryNFT(2)@2x.png";
import DiscoveryNFT3small from "@assets/Homepage/Discovery/DiscoveryNFT(3).png";
import DiscoveryNFT3large from "@assets/Homepage/Discovery/DiscoveryNFT(3)@2x.png";

import { Link } from "react-router-dom";

import type { DiscoveryMetaData, LocalDiscoveryImage, CombinedDiscoveryMetaData } from "@myTypes/api";
import axios from "axios";
import { useEffect } from "react";
import { useDiscoveryStore } from "@stores/useFetchingStore";

import { ROUTES } from "@utils/constants/route";
import { useNavigate } from "react-router-dom";

import { FormatBalance } from "@components/FormatBalance";

import { TbFidgetSpinner } from "react-icons/tb";

// Local image NFT data
const localImageNFT: Record<string, LocalDiscoveryImage> = {
  discovery1: {
    background1x: DiscoveryNFT1small,
    background2x: DiscoveryNFT1large,
    userImg: NFTavatar,
  },
  discovery2: {
    background1x: DiscoveryNFT2small,
    background2x: DiscoveryNFT2large,
    userImg: NFTavatar1,
  },
  discovery3: {
    background1x: DiscoveryNFT3small,
    background2x: DiscoveryNFT3large,
    userImg: NFTavatar2,
  },
};

const DiscoveryMore = () => {
  // Cards list NFT local data
  // const discoveryCardContents = [
  //   {
  //     id: uuidv4(),
  //     background1x: DiscoveryNFT1small,
  //     background2x: DiscoveryNFT1large,
  //     userImg: NFTavatar,
  //     userName: "MoonDancer",
  //     nftName: "Distant Galaxy",
  //     price: 1.63,
  //     bid: 0.33,
  //   },
  //   {
  //     id: uuidv4(),
  //     background1x: DiscoveryNFT2small,
  //     background2x: DiscoveryNFT2large,
  //     userImg: NFTavatar1,
  //     userName: "NebulaKid",
  //     nftName: "Life On Edena",
  //     price: 1.63,
  //     bid: 0.33,
  //   },
  //   {
  //     id: uuidv4(),
  //     background1x: DiscoveryNFT3small,
  //     background2x: DiscoveryNFT3large,
  //     userImg: NFTavatar2,
  //     userName: "Spaceone",
  //     nftName: "AstroFiction",
  //     price: 1.63,
  //     bid: 0.33,
  //   },
  // ];

  const navigateBtn = useNavigate();
  const handleSeeAll = () => navigateBtn(ROUTES.MARKETPLACE);

  const data = useDiscoveryStore((state) => state.data);
  const loading = useDiscoveryStore((state) => state.loading);
  const error = useDiscoveryStore((state) => state.error);
  const fetchData = useDiscoveryStore((state) => state.fetchData);

  useEffect(() => {
    const fetchDiscoveryData = async () => {
      const response = await axios.get<DiscoveryMetaData[]>("http://localhost:3001/discovery-metadata");
      const fetchedDiscoveryMetaData = response.data;

      const combinedData: CombinedDiscoveryMetaData[] = fetchedDiscoveryMetaData.map((item) => ({
        ...item,
        ...localImageNFT[item.imageKey],
      }));
      return combinedData;
    };
    fetchData(fetchDiscoveryData);
  }, [fetchData]);
  // This effect depends on the fetchData function from the Zustand store.
  // Need include it here [dependency] to follow React's hook rules
  // I include `fetchData` in this array because I use it inside the effect.
  // Even though it's here, the effect will only run once because `fetchData` is a stable function from Zustand that never changes.

  // --- Render ReactLoading component  ---
  if (loading) {
    return (
      <section className=" min-h-[300px] flex justify-center items-center flex-col gap-4">
        <span>
          <TbFidgetSpinner className="text-8xl text-action animate-spin" />
        </span>
      </section>
    );
  }

  // --- Render Error ---
  if (error) {
    return (
      <section className="min-h-[300px] flex justify-center items-center text-red-500">
        <p className="text-xl">An error occurred while loading NFTs: {error}</p>
      </section>
    );
  }

  // --- Add this check to prevent the error data null ---
  if (!data || data.length === 0) {
    return (
      <section className="min-h-[300px] flex justify-center items-center">
        <p className="text-xl text-caption-label">No NFTs found.</p>
      </section>
    );
  }

  return (
    <section className="content-wrapper-homepage flex flex-col gap-[40px] lg:gap-[60px]">
      <div className="flex justify-between items-center">
        {/* Section Title */}
        <div className="flex flex-col gap-2.5">
          <h3 className="hidden lg:block">Discover More NFTs</h3>
          <h4 className="block lg:hidden">Discover More NFTs</h4>
          <p className="lg:text-[22px] capitalize">Explore new trending NFTs</p>
        </div>
        <Buttons
          className="px-[50px] mt-4.5 mr-1 hidden sm:flex w-[240px]"
          size="secondary"
          background="transparent"
          onClick={handleSeeAll}
        >
          <Eye className="fill-action w-[20px] h-[20px]" />
          See All
        </Buttons>
      </div>

      {/* Cards list */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] ">
        {data.map((item) => (
          <Link to={ROUTES.NFT_DETAILS} key={item.id} className="hover-scale ">
            <img
              src={item.background1x}
              srcSet={`${item.background1x} 1x, ${item.background2x} 2x`}
              alt=""
              className="w-full min-h-[296px] object-cover rounded-t-[20px]"
            />
            <div className="p-5 flex flex-col gap-2.5 bg-bg-secondary rounded-b-[20px]">
              <h5>{item.nftName}</h5>
              <div className="flex gap-3 font-space-mono">
                <span>
                  <img src={item.userImg} className="w-6 h-6" alt="" />{" "}
                </span>
                {item.userName}
              </div>
              <div className="flex justify-between items-center font-space-mono">
                <div>
                  <p className="text-xs text-caption-label">Price</p>
                  <p className="text-base">{FormatBalance(item.price, 2)} ETH</p>
                </div>
                <div>
                  <p className="text-xs text-caption-label">Highest Bid</p>
                  <p className="text-base">{FormatBalance(item.bid, 2)} wETH</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Button responsive */}
      <Buttons
        size="secondary"
        background="transparent"
        className=" px-[50px] text-base sm:hidden"
        onClick={handleSeeAll}
      >
        <Eye className="fill-action w-[20px] h-[20px]" />
        See All
      </Buttons>
    </section>
  );
};

export default DiscoveryMore;
