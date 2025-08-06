import { FormatBalance } from "@components/FormatBalance";
import TabItem from "@components/Tabs";
import { useResponsive } from "@hooks/useResponsive";

// Navigate & Fetch data
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@utils/constants/route";
import { Spinner, ErrorBox, EmptyBox } from "@components/UIFetchingHelper";
import { useArtistCardSectionStore } from "@stores/useFetchingStore";
import type {
  ArtistCardSectionData,
  LocalArtistCardSectionData,
  CombinedArtistSectionCardMetaData,
} from "@myTypes/api";
import { cardSectionNFTImage } from "@assets/Export/ImgExport";

// Tab key props
type ActiveTabArtist = "created" | "owned" | "collection";

const CardSection = () => {
  // Css Class
  const tabBaseClass = "w-full h-[60px] flex justify-center items-center";
  const uiFetchingStateClass =
    "min-h-[300px] flex justify-center place-items-center min-[640px]:col-span-2 max-[1023px]:col-span-2 lg:col-span-3";

  // Tab state
  const [activeTab, setActiveTab] = useState<ActiveTabArtist>("created");

  //   Tab onClick handle
  const handleTabClick = (tabName: ActiveTabArtist) => {
    setActiveTab(tabName);
  };

  //   useResponsive for visible card based on breakpoint
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet } = useResponsive();

  //   useFetching store
  const data = useArtistCardSectionStore((state) => state.data);
  const loading = useArtistCardSectionStore((state) => state.loading);
  const error = useArtistCardSectionStore((state) => state.error);
  const fetchData = useArtistCardSectionStore((state) => state.fetchData);

  useEffect(() => {
    const fetchCardSectionData = async () => {
      const response = await axios.get<ArtistCardSectionData[]>("/public/data/artistPage-card-section-metada.json");
      const fetchedData = response.data;

      const combinedData: CombinedArtistSectionCardMetaData[] = fetchedData.map((item) => ({
        ...item,
        ...((cardSectionNFTImage as Record<string, LocalArtistCardSectionData>)[item.imageKey] ?? {}),
      }));
      return combinedData;
    };
    fetchData(fetchCardSectionData);
  }, [fetchData]);

  //   Render Card based on breakpoint - mobile: 3cards, tablet: 6cards, desktop: all cards
  let maxCard = MobileS || Mobile ? 3 : Tablet ? 6 : data?.length ?? 0;
  const visibleData = (data ?? []).slice(0, maxCard);

  return (
    <div>
      <div className="grid grid-cols-3 place-items-center content-wrapper">
        <TabItem
          title="Created"
          tabKey="created"
          tabBaseClass={tabBaseClass}
          onTabClick={handleTabClick}
          activeTab={activeTab}
          count={302}
        />
        <TabItem
          title="Owned"
          tabKey="owned"
          tabBaseClass={tabBaseClass}
          onTabClick={handleTabClick}
          activeTab={activeTab}
          count={67}
        />
        <TabItem
          title="Collection"
          tabKey="collection"
          tabBaseClass={tabBaseClass}
          onTabClick={handleTabClick}
          activeTab={activeTab}
          count={4}
        />
      </div>
      <div className="bg-bg-secondary">
        <div className="content-wrapper grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center max-xs:px-5 gap-[30px] py-20">
          {loading ? (
            <Spinner className={uiFetchingStateClass} classNameIcon="text-8xl text-action animate-spin" />
          ) : error ? (
            <ErrorBox
              message={`An error occurred while loading NFTs: ${error}`}
              className={`${uiFetchingStateClass} text-red-500`}
            />
          ) : !data || data.length === 0 ? (
            <EmptyBox className={`${uiFetchingStateClass}`} message="No NFTs found." />
          ) : (
            visibleData.map((item) => (
              <Link to={ROUTES.NFT_DETAILS} key={item.id} className="hover-scale h-full flex flex-col">
                <img
                  src={item.background1x}
                  srcSet={`${item.background1x} 1x, ${item.background2x} 2x`}
                  alt=""
                  className="w-full min-h-[296px] object-cover rounded-t-[20px]"
                />
                <div className="p-5 flex flex-col gap-2.5 bg-bg-primary rounded-b-[20px]">
                  <h5 title={item.nftName} className="line-clamp-1">
                    {item.nftName}
                  </h5>
                  <div className="flex gap-3 font-space-mono">
                    <span>
                      <img src={item.artistIMG} className="w-6 h-6" alt="" />{" "}
                    </span>
                    {item.artistName}
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
            ))
          )}
        </div>
        <div className="border-b-2 border-bg-primary"></div>
      </div>
    </div>
  );
};

export default CardSection;
