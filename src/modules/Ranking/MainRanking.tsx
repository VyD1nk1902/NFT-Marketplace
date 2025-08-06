import clsx from "clsx";
import { useResponsive } from "@hooks/useResponsive";
import TabItem from "@components/Tabs";
import { useState, useEffect } from "react";
import { Spinner, ErrorBox, EmptyBox } from "@components/UIFetchingHelper";
import { FormatBalance } from "@components/FormatBalance";

type ActiveRankingTab = "today" | "week" | "month" | "all";

import { artistAvatarRanking } from "@assets/Export/ImgExport";
import type { CombinedRankingMetaData, LocalRankingAvatar, RankingArtists } from "@myTypes/api";
import axios from "axios";
import { useRankingStore } from "@stores/useFetchingStore";
import { Link } from "react-router-dom";
import { ROUTES } from "@utils/constants/route";

const RankingContent = () => {
  // Responsive
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const contentWrapClass = clsx({
    "px-[115px] py-[80px]": Desktop,
    "px-[72px] py-[40px]": Tablet,
    "py-[30px]": Mobile,
    "px-5 py-[40px]": MobileS,
  });

  // Table Header clsx
  const gridClass = clsx(
    "grid rounded-[20px] border border-bg-secondary text-caption-label font-space-mono text-center",
    {
      "grid-cols-[2fr_1fr_1fr_1fr] py-3 px-5": Desktop,
      "grid-cols-[2fr_1fr_1fr] py-3 px-5": Tablet,
      "grid-cols-[2fr_1fr] py-2.5 px-5 text-[12px]": Mobile || MobileS,
    }
  );

  // Table content clsx
  const rowClass = clsx("bg-bg-secondary grid py-3 rounded-[20px]", {
    "grid-cols-[60px_2fr_1fr_1fr_1fr] place-items-center": Desktop,
    "grid-cols-[60px_2fr_1fr_1fr] items-center": Tablet,
    "grid-cols-[30px_2fr_1fr] pl-2 items-center": Mobile || MobileS,
  });

  const avatarClass = clsx("flex-shrink-0", {
    "w-[60px] h-[60px]": Desktop,
    "w-[24px] h-[24px]": Tablet || Mobile || MobileS,
  });

  const nameClass = clsx("truncate", {
    "text-[22px] 2xl:text-[24px] 2xl:font-[600] 2xl:max-w-[300px] max-w-[150px]": Desktop,
    "text-[22px] font-[600] max-w-[200px]": Tablet,
    "text-[12px] max-w-[120px]": Mobile,
    "text-[12px] max-w-[100px]": MobileS,
  });

  const itemRankClass = clsx("text-caption-label font-space-mono flex items-center justify-center", {
    "bg-bg-primary rounded-full w-[30px] h-[30px]": Desktop,
    "text-[16px]": Tablet,
    "text-[12px]": Mobile || MobileS,
  });

  // tabState
  const [active, setActive] = useState<ActiveRankingTab>("today");
  // tabClass
  const tabBaseClass = "w-full h-[60px] flex justify-center items-center";
  // tabClick
  const handleTabClick = (tabName: ActiveRankingTab) => {
    setActive(tabName);
  };

  //   UI fetching helper Class
  const uiFetchingStateClass =
    "min-h-[300px] flex justify-center place-items-center min-[640px]:col-span-2 max-[1023px]:col-span-2 lg:col-span-3";

  // useStore
  const dataRanking = useRankingStore((state) => state.data);
  const loadingRanking = useRankingStore((state) => state.loading);
  const errorRanking = useRankingStore((state) => state.error);
  const fetchRanking = useRankingStore((state) => state.fetchData);

  useEffect(() => {
    const fetchRankingData = async () => {
      const response = await axios.get<RankingArtists[]>("/data/ranking-metadata.json"); //mockoon(http://localhost:3001/ranking-metadata)
      console.log(response.data);
      const fetchedData = response.data;

      const combinedData: CombinedRankingMetaData[] = fetchedData.map((item) => ({
        ...item,
        ...((artistAvatarRanking as Record<string, LocalRankingAvatar>)[item.imageKey] ?? {}),
      }));
      return combinedData;
    };
    fetchRanking(fetchRankingData);
  }, [fetchRanking]);

  return (
    <div>
      <section className="pt-[100px] overflow-hidden content-wrapper">
        <div className={`flex flex-col gap-[30px] w-full ${contentWrapClass}`}>
          {/* Head Title */}
          <div>
            <h2 className="lg:block hidden">Top Creators</h2>
            <h3 className="lg:hidden md:block hidden">Top Creators</h3>
            <h4 className="block md:hidden">Top Creators</h4>
            <p className="lg:text-[22px] md:pt-5 text-base pt-2.5">
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>
          {/* Tabs */}
          <div className="hidden sm:grid grid-cols-4 place-items-center ">
            <TabItem
              title={"Today"}
              tabBaseClass={tabBaseClass}
              tabKey="today"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"This Week"}
              tabBaseClass={tabBaseClass}
              tabKey="week"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"This Month"}
              tabBaseClass={tabBaseClass}
              tabKey="month"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"All Time"}
              tabBaseClass={tabBaseClass}
              tabKey="all"
              onTabClick={handleTabClick}
              activeTab={active}
            />
          </div>
          <div className="grid sm:hidden grid-cols-4  place-items-center ">
            <TabItem
              title={"1d"}
              tabBaseClass={tabBaseClass}
              tabKey="today"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"7d"}
              tabBaseClass={tabBaseClass}
              tabKey="week"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"30d"}
              tabBaseClass={tabBaseClass}
              tabKey="month"
              onTabClick={handleTabClick}
              activeTab={active}
            />
            <TabItem
              title={"All Time"}
              tabBaseClass={tabBaseClass}
              tabKey="all"
              onTabClick={handleTabClick}
              activeTab={active}
            />
          </div>
          {/* Artists Table */}
          <div className="pt-[40px] flex flex-col gap-[20px] w-full">
            {/* Table Header */}
            {Desktop && (
              <div className={gridClass}>
                <div className="flex gap-5">
                  <p>#</p>
                  <p>Artist</p>
                </div>
                <p>Change</p>
                <p>NFTs Sold</p>
                <p>Volume</p>
              </div>
            )}
            {Tablet && (
              <div className={gridClass}>
                <div className="flex gap-5">
                  <p>#</p>
                  <p>Artist</p>
                </div>
                <p>Change</p>
                <p>Volume</p>
              </div>
            )}
            {(Mobile || MobileS) && (
              <div className={gridClass}>
                <div className="flex gap-2.5">
                  <p>#</p>
                  <p>Artist</p>
                </div>
                <p>Volume</p>
              </div>
            )}

            {/* Table Items */}
            {loadingRanking ? (
              <Spinner className={uiFetchingStateClass} classNameIcon="text-8xl text-action animate-spin" />
            ) : errorRanking ? (
              <ErrorBox
                message={`An error occurred while loading Artists: ${errorRanking}`}
                className={`${uiFetchingStateClass} text-red-500`}
              />
            ) : !dataRanking || dataRanking.length === 0 ? (
              <EmptyBox className={`${uiFetchingStateClass}`} message="No Artists data found." />
            ) : (
              dataRanking.map((item) => {
                if (Desktop) {
                  return (
                    <Link key={item.id} className={rowClass} to={ROUTES.ARTIST_DETAILS}>
                      <div className={itemRankClass}>{item.rank}</div>
                      <div className="flex gap-5 items-center w-full">
                        <div className={avatarClass}>
                          <img
                            src={item.avatarRanking}
                            className="w-full h-full object-cover rounded-full"
                            alt="avatar"
                          />
                        </div>
                        <p className={nameClass}>{item.name}</p>
                      </div>
                      <p className="font-space-mono text-green">+{FormatBalance(item.change, 2)}%</p>
                      <p className="font-space-mono">{item.nftsSold}</p>
                      <p className="font-space-mono">{FormatBalance(item.volume, 2)} ETH</p>
                    </Link>
                  );
                }
                if (Tablet) {
                  return (
                    <Link key={item.id} className={rowClass} to={ROUTES.ARTIST_DETAILS}>
                      <div className={itemRankClass}>{item.rank}</div>
                      <div className="flex gap-3 items-center">
                        <div className={avatarClass}>
                          <img
                            src={item.avatarRanking}
                            className="w-full h-full object-contain rounded-full"
                            alt="avatar"
                          />
                        </div>
                        <p className={nameClass}>{item.name}</p>
                      </div>
                      <p className="font-space-mono text-green">+{FormatBalance(item.change, 2)}%</p>
                      <p className="font-space-mono">{FormatBalance(item.volume, 2)} ETH</p>
                    </Link>
                  );
                }
                if (Mobile) {
                  return (
                    <Link key={item.id} className={rowClass} to={ROUTES.ARTIST_DETAILS}>
                      <div className={itemRankClass}>{item.rank}</div>
                      <div className="flex gap-3 items-center">
                        <div className={avatarClass}>
                          <img
                            src={item.avatarRanking}
                            className="w-full h-full object-contain rounded-full"
                            alt="avatar"
                          />
                        </div>
                        <p className={nameClass}>{item.name}</p>
                      </div>
                      <p className="font-space-mono text-[12px]">{FormatBalance(item.volume, 2)} ETH</p>
                    </Link>
                  );
                }
                if (MobileS) {
                  return (
                    <Link key={item.id} className={rowClass} to={ROUTES.ARTIST_DETAILS}>
                      <div className={itemRankClass}>{item.rank}</div>
                      <div className="flex gap-3 items-center">
                        <div className={avatarClass}>
                          <img
                            src={item.avatarRanking}
                            className="w-full h-full object-contain rounded-full"
                            alt="avatar"
                          />
                        </div>
                        <p className={nameClass}>{item.name}</p>
                      </div>
                      <p className="font-space-mono text-[12px]">{FormatBalance(item.volume, 2)} ETH</p>
                    </Link>
                  );
                }
                return null;
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RankingContent;
