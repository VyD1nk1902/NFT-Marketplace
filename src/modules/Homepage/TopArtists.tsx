import Buttons from "@components/Buttons";

import { RocketLaunch } from "@assets/Export/SvgExport";
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

import { Link, useNavigate } from "react-router-dom";

import type { ArtistMetaData, LocalArtistImage, CombinedArtistMetaData } from "@myTypes/api";

import axios from "axios";
import { useState, useEffect } from "react";

import { FormatBalance } from "@components/FormatBalance";

import { ROUTES } from "@utils/constants/route";

import { TbFidgetSpinner } from "react-icons/tb";

//Local img profile data
const localArtistImageData: Record<string, LocalArtistImage> = {
  artist1: { profileImg: UserImg1 },
  artist2: { profileImg: UserImg2 },
  artist3: { profileImg: UserImg3 },
  artist4: { profileImg: UserImg4 },
  artist5: { profileImg: UserImg5 },
  artist6: { profileImg: UserImg6 },
  artist7: { profileImg: UserImg7 },
  artist8: { profileImg: UserImg8 },
  artist9: { profileImg: UserImg9 },
  artist10: { profileImg: UserImg10 },
  artist11: { profileImg: UserImg11 },
  artist12: { profileImg: UserImg12 },
};

const TopArtists = () => {
  // Local artists data
  // const artistsData = [
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg1,
  //     name: "Keepitreal",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg2,
  //     name: "DigiLab",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg3,
  //     name: "GravityOne",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg4,
  //     name: "Juanie",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg5,
  //     name: "BlueWhale",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg6,
  //     name: "Mr Fox",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg7,
  //     name: "Shroomie",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg8,
  //     name: "Robotica",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg9,
  //     name: "RustyRobot",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg10,
  //     name: "Animakid",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg11,
  //     name: "Dotgu",
  //     balance: 34.53,
  //   },
  //   {
  //     id: uuidv4(),
  //     profileImg: UserImg12,
  //     name: "Ghiblier",
  //     balance: 34.53,
  //   },
  // ];

  const navigate = useNavigate();
  const handleViewRankings = () => navigate(ROUTES.RANKINGS);

  const [artistData, setArtistData] = useState<CombinedArtistMetaData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<ArtistMetaData[]>("http://localhost:3001/artists-metadata");
        const fetchedArtistMetaData = response.data;

        const combinedData: CombinedArtistMetaData[] = fetchedArtistMetaData.map((item) => ({
          ...item,
          ...localArtistImageData[item.imageKey],
        }));

        setArtistData(combinedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occured."));
        }
        console.error("Error fetching top artist data: ", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchArtistData();
  }, []);

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
      <section className="min-h-[300px] flex justify-center items-center text-center text-red-500">
        <p className="text-xl">An error occurred while loading the top creators: {error.message}</p>
      </section>
    );
  }

  return (
    <section>
      <div className="content-wrapper-homepage">
        {/* Section title */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2.5">
            <h3 className="hidden sm:block">Top Creators</h3>
            <h4 className="sm:hidden block">Top Creators</h4>
            <p className="text-[16px] lg:text-[22px] font-[400] capitalize">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Buttons
            onClick={handleViewRankings}
            size="secondary"
            background="transparent"
            className="px-[50px] text-base hidden sm:flex"
          >
            <RocketLaunch className="fill-action w-[20px] h-[20px]" />
            View Rankings
          </Buttons>
        </div>

        {/* Cards list */}
        <div className="pt-[60px] grid xl:grid-cols-[240px_240px_240px_240px] lg:grid-cols-[220px_220px_220px_220px] sm:grid-cols-[330px_330px] xs:grid-cols-[315px] grid-cols-[290px] gap-[30px] place-content-center ">
          {artistData.map((item, index) => (
            <Link
              key={item.id}
              to={ROUTES.ARTIST_DETAILS}
              className="relative p-5 rounded-[20px] bg-bg-secondary flex lg:flex-col items-center justify-center gap-5 hover-scale"
            >
              <div className="absolute top-4 left-4 w-[30px] h-[30px] bg-bg-primary text-caption-label font-space-mono rounded-full flex items-center justify-center">
                {index + 1}
              </div>
              <img src={item.profileImg} className=" lg:w-[120px] lg:h-[120px] w-[60px] h-[60px]" alt="" />
              <div className="flex flex-col">
                <h5 className="lg:text-center">{item.name}</h5>
                <p>
                  <span className="text-caption-label">Total Sales: </span>{" "}
                  <span className="font-space-mono"> {FormatBalance(item.balance, 4)} ETH</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Button responsive */}
        <Buttons
          size="secondary"
          background="transparent"
          className="mt-[40px] w-full px-[50px] text-base sm:hidden"
          onClick={handleViewRankings}
        >
          <RocketLaunch className="fill-action w-[20px] h-[20px]" />
          View Rankings
        </Buttons>
      </div>
    </section>
  );
};

export default TopArtists;
