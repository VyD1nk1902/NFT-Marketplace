import Buttons from "@components/Buttons";

import { RocketLaunch } from "@assets/Svg/SvgExport";
import UserImg1 from "@assets/Avatars/Avatar Placeholder.png";
import UserImg2 from "@assets/Avatars/Avatar Placeholder (1).png";
import UserImg3 from "@assets/Avatars/Avatar Placeholder (2).png";
import UserImg4 from "@assets/Avatars/Avatar Placeholder (3).png";
import UserImg5 from "@assets/Avatars/Avatar Placeholder (4).png";
import UserImg6 from "@assets/Avatars/Avatar Placeholder (5).png";
import UserImg7 from "@assets/Avatars/Avatar Placeholder (6).png";
import UserImg8 from "@assets/Avatars/Avatar Placeholder (7).png";
import UserImg9 from "@assets/Avatars/Avatar Placeholder (8).png";
import UserImg10 from "@assets/Avatars/Avatar Placeholder (13).png";
import UserImg11 from "@assets/Avatars/Avatar Placeholder (14).png";
import UserImg12 from "@assets/Avatars/Avatar Placeholder (16).png";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const TopArtists = () => {
  // Cards List render data
  const artistsData = [
    {
      id: uuidv4(),
      profileImg: UserImg1,
      name: "Keepitreal",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg2,
      name: "DigiLab",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg3,
      name: "GravityOne",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg4,
      name: "Juanie",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg5,
      name: "BlueWhale",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg6,
      name: "Mr Fox",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg7,
      name: "Shroomie",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg8,
      name: "Robotica",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg9,
      name: "RustyRobot",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg10,
      name: "Animakid",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg11,
      name: "Dotgu",
      balance: 34.53,
    },
    {
      id: uuidv4(),
      profileImg: UserImg12,
      name: "Ghiblier",
      balance: 34.53,
    },
  ];

  return (
    <section>
      <div className="content-wrapper">
        {/* Section title */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2.5">
            <h3 className="hidden sm:block">Top Creators</h3>
            <h4 className="sm:hidden block">Top Creators</h4>
            <p className="text-[16px] lg:text-[22px] font-[400] capitalize">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Buttons size="secondary" background="transparent" className="px-[50px]  text-base hidden sm:flex" to="/">
            <RocketLaunch className="fill-action w-[20px] h-[20px]" />
            View Rankings
          </Buttons>
        </div>

        {/* Cards list */}
        <div className="pt-[60px] grid lg:grid-cols-[240px_240px_240px_240px] sm:grid-cols-[330px_330px] grid-cols-[315px] gap-[30px] place-content-center ">
          {artistsData.map((item, index) => (
            <Link
              key={item.id}
              to="/"
              className="relative p-5 rounded-[20px] bg-bg-secondary flex lg:flex-col items-center justify-center gap-5 hover-scale"
            >
              <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-bg-primary text-caption-label font-space-mono rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <img src={item.profileImg} className=" lg:w-[120px] lg:h-[120px] w-[60px] h-[60px]" alt="" />
              <div className="flex flex-col">
                <h5 className="lg:text-center">{item.name}</h5>
                <p>
                  <span className="text-caption-label">Total Sales:</span>{" "}
                  <span className="font-space-mono">{item.balance} ETH</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Button responsive */}
        <Buttons size="secondary" background="transparent" className="mt-[40px] px-[50px] text-base sm:hidden" to="/">
          <RocketLaunch className="fill-action w-[20px] h-[20px]" />
          View Rankings
        </Buttons>
      </div>
    </section>
  );
};

export default TopArtists;
