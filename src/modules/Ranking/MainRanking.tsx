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

const RankingContent = () => {
  // Responsive
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const contentWrapClass = clsx({
    "px-[115px] py-[80px]": Desktop,
    "px-[72px] py-[40px]": Tablet,
    "px-[30px] py-[30px]": Mobile || MobileS,
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
      const response = await axios.get<RankingArtists[]>("http://localhost:3001/ranking-metadata");
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
      <section className="pt-[100px] w-full overflow-hidden content-wrapper">
        <div className={`flex flex-col gap-[30px] ${contentWrapClass}`}>
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
          <div className="pt-[40px] flex flex-col gap-[20px]">
            {/* Table Header */}
            {Desktop && (
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] py-3 px-5 rounded-[20px] border border-bg-secondary text-caption-label font-space-mon text-center">
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
              <div className="grid grid-cols-[2fr_1fr_1fr] py-3 px-5 rounded-[20px] border border-bg-secondary text-caption-label font-space-mono text-center">
                <div className="flex gap-5">
                  <p>#</p>
                  <p>Artist</p>
                </div>
                <p>Change</p>
                <p>Volume</p>
              </div>
            )}
            {(Mobile || MobileS) && (
              <div className="grid grid-cols-[2fr_1fr] py-2.5 px-5 rounded-[20px] border border-bg-secondary text-caption-label font-space-mono text-[12px] w-full ">
                <div className="flex gap-2.5">
                  <p>#</p>
                  <p>Artist</p>
                </div>
                <p className="text-center">Volume</p>
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
                    <div
                      key={item.id}
                      className="bg-bg-secondary grid grid-cols-[60px_2fr_1fr_1fr_1fr] py-3 rounded-[20px] place-items-center"
                    >
                      <div className="bg-bg-primary text-caption-label font-space-mono rounded-full w-[30px] h-[30px] flex items-center justify-center">
                        {item.rank}
                      </div>
                      <div className="flex gap-5 items-center w-full">
                        <div className="w-[60px] h-[60px] flex-shrink-0 ">
                          <img src={item.avatarRanking} className="w-full h-full object-cover rounded-full" alt="" />
                        </div>
                        <p className="truncate text-[22px] 2xl:text-[24px] 2xl:font-[600] max-w-[150px] xl:max-w-[300px]">
                          {item.name}
                        </p>
                      </div>
                      <p className="font-space-mono text-green">+{FormatBalance(item.change, 2)}%</p>
                      <p className="font-space-mono">{item.nftsSold}</p>
                      <p className="font-space-mono">{FormatBalance(item.volume, 2)} ETH</p>
                    </div>
                  );
                }
                if (Tablet) {
                  return <div></div>;
                }
                if (Mobile) {
                  return <div></div>;
                }
                if (MobileS) {
                  return <div></div>;
                }
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RankingContent;
