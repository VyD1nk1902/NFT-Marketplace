import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import { Spinner, ErrorBox, EmptyBox } from "@components/UIFetchingHelper";
import { Link } from "react-router-dom";
import { ROUTES } from "@utils/constants/route";
import { useMarketplaceNFTStore, useMarketplaceCollectionStore } from "@stores/useFetchingStore";
import { nftImagesMarketplace, collectionImagesMarketplace } from "@assets/Export/ImgExport";
import BrowseMarket from "./BrowseMaket";

type ActiveTab = "nfts" | "collections";
import { FormatBalance } from "@components/FormatBalance";

import type {
  LocalMarketplaceNFTsImage,
  MarketplaceNFTs,
  CombinedMarketplacNFTMetaData,
  LocalMarketplaceCollectionsImg,
  MarketplaceCollections,
  CombinedMarketplaceCollectionMetaData,
} from "@myTypes/api";
import axios from "axios";

const MarketplaceLists = () => {
  const [active, setActive] = useState<ActiveTab>("nfts");
  const [searchInput, setSearchInput] = useState("");

  const tabBaseClass = "w-full h-[60px] flex justify-center items-center";
  const uiFetchingStateClass =
    "min-h-[300px] flex justify-center place-items-center min-[640px]:col-span-2 max-[1023px]:col-span-2 lg:col-span-3";

  // Store NFTs
  const dataNFTs = useMarketplaceNFTStore((state) => state.data);
  const loadingNFTs = useMarketplaceNFTStore((state) => state.loading);
  const errorNFTs = useMarketplaceNFTStore((state) => state.error);
  const fetchDataNFTs = useMarketplaceNFTStore((state) => state.fetchData);

  // Store Collections
  const dataCollections = useMarketplaceCollectionStore((state) => state.data);
  const loadingCollections = useMarketplaceCollectionStore((state) => state.loading);
  const errorCollections = useMarketplaceCollectionStore((state) => state.error);
  const fetchDataCollections = useMarketplaceCollectionStore((state) => state.fetchData);

  // Make sure fetch once per tab
  const hasFetchedNFTs = useRef(false);
  const hasFetchedCollections = useRef(false);

  // Fetch NFTs (merge local IMG)
  // useCallback để giữ reference của hàm fetch stable giữa các lần re-render,
  // tránh việc useEffect, store bị gọi lại khi function thay đổi tham chiếu.
  // Hàm vẫn là async function (trả về Promise) để dùng await axios/fetch.
  // Nếu không bọc useCallback, mỗi lần render sẽ tạo function mới, có thể gây fetch lại không mong muốn!

  const fetchMarketplaceNFTData = useCallback(async (): Promise<CombinedMarketplacNFTMetaData[]> => {
    const response = await axios.get<MarketplaceNFTs[]>("http://localhost:3001/marketplace-nfts-metadata");
    return response.data.map((item) => ({
      ...item,
      ...((nftImagesMarketplace as Record<string, LocalMarketplaceNFTsImage>)[item.imageKey] ?? {}),
    }));
  }, []);

  // Fetch Collections (merge local IMG)
  const fetchMarketplaceCollectionData = useCallback(async (): Promise<CombinedMarketplaceCollectionMetaData[]> => {
    const response = await axios.get<MarketplaceCollections[]>(
      "http://localhost:3001/marketplace-collections-metadata"
    );
    console.log("Collections API response:", response.data);

    return response.data.map((item) => ({
      ...item,
      ...((collectionImagesMarketplace as Record<string, LocalMarketplaceCollectionsImg>)[item.imageKey] ?? {}),
    }));
  }, []);

  // Fetch data once per tab
  useEffect(() => {
    if (active === "nfts" && !hasFetchedNFTs.current) {
      fetchDataNFTs(fetchMarketplaceNFTData);
      hasFetchedNFTs.current = true;
    }
    if (active === "collections" && !hasFetchedCollections.current) {
      fetchDataCollections(fetchMarketplaceCollectionData);
      hasFetchedCollections.current = true;
    }
  }, [active, fetchDataNFTs, fetchDataCollections, fetchMarketplaceNFTData, fetchMarketplaceCollectionData]);

  // Search filter logic
  const searchInputLower = searchInput.trim().toLowerCase();
  const filteredNFTs = !searchInput
    ? dataNFTs
    : dataNFTs?.filter((item) => item.nftName.toLowerCase().includes(searchInputLower));

  const filteredCollections = !searchInput
    ? dataCollections
    : dataCollections?.filter((item) => item.title.toLowerCase().includes(searchInputLower));

  // handleTabClick (active, reset search)
  const handleTabClick = (tabName: ActiveTab) => {
    setActive(tabName);
    setSearchInput("");
  };

  //Dynamic placeholder based on tab name
  const getPlaceholder = () => (active === "nfts" ? "Search by NFT name" : "Search by Collection title");

  return (
    <>
      <BrowseMarket searchInput={searchInput} setSearchInput={setSearchInput} placeholder={getPlaceholder()} />
      <section>
        <div className="border-t border-bg-secondary pb-2.5"></div>
        <div className="content-wrapper">
          {/* Tabs */}
          <div className="grid grid-cols-2 px-[30px] place-items-center">
            {/* NFTs tab */}
            <div
              className={clsx(tabBaseClass, {
                "border-b border-b-white text-white font-[600]": active === "nfts",
                "border-none text-caption-label font-normal": active !== "nfts",
              })}
            >
              <button onClick={() => handleTabClick("nfts")} className="w-full flex gap-4 justify-center">
                <h5>NFTs</h5>
                <div
                  className={clsx("font-space-mono rounded-[20px] px-2.5 py-[5px] text-white max-sm:hidden", {
                    "bg-caption-label": active === "nfts",
                    "bg-bg-secondary": active !== "nfts",
                  })}
                >
                  {filteredNFTs?.length ?? 0}
                </div>
              </button>
            </div>
            {/* Collections tab */}
            <div
              className={clsx(tabBaseClass, {
                "border-b border-b-white text-white font-[600]": active === "collections",
                "border-none text-caption-label font-normal": active !== "collections",
              })}
            >
              <button onClick={() => handleTabClick("collections")} className="w-full flex gap-4 justify-center">
                <h5>Collections</h5>
                <div
                  className={clsx("font-space-mono rounded-[20px] px-2.5 py-[5px] text-white max-sm:hidden", {
                    "bg-caption-label": active === "collections",
                    "bg-bg-secondary": active !== "collections",
                  })}
                >
                  {filteredCollections?.length ?? 0}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic content based on active tab */}
        <div className=" bg-bg-secondary mx-auto">
          <div className="content-wrapper grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] pt-[60px] pb-[80px] max-xs:px-5 place-items-center">
            {/* NFTs */}
            {active == "nfts" && (
              <>
                {loadingNFTs ? (
                  <Spinner className={uiFetchingStateClass} classNameIcon="text-8xl text-action animate-spin" />
                ) : errorNFTs ? (
                  <ErrorBox
                    message={`An error occurred while loading NFTs: ${errorNFTs}`}
                    className={`${uiFetchingStateClass} text-red-500`}
                  />
                ) : !filteredNFTs || filteredNFTs.length === 0 ? (
                  <EmptyBox className={`${uiFetchingStateClass}`} message="No NFTs found." />
                ) : (
                  filteredNFTs?.map((item) => (
                    <Link to={ROUTES.NFT_DETAILS} key={item.id} className="hover-scale ">
                      <img
                        src={item.background1x}
                        srcSet={`${item.background1x} 1x, ${item.background2x} 2x`}
                        alt=""
                        className="w-full min-h-[296px] object-cover rounded-t-[20px]"
                      />
                      <div className="p-5 flex flex-col gap-2.5 bg-bg-primary rounded-b-[20px]">
                        <h5>{item.nftName}</h5>
                        <div className="flex gap-3 font-space-mono">
                          <span>
                            <img src={item.artistIMG} className="w-6 h-6" alt="" />{" "}
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
                  ))
                )}
              </>
            )}

            {/* Collections */}
            {active == "collections" && (
              <>
                {loadingCollections ? (
                  <Spinner className={uiFetchingStateClass} classNameIcon="text-8xl text-action animate-spin" />
                ) : errorCollections ? (
                  <ErrorBox
                    message={`An error occurred while loading Collections: ${errorCollections}`}
                    className={`${uiFetchingStateClass} text-red-500`}
                  />
                ) : !filteredCollections || filteredCollections.length === 0 ? (
                  <EmptyBox className={`${uiFetchingStateClass}`} message="No NFTs found." />
                ) : (
                  filteredCollections?.map((item) => {
                    const countSecondaryImages = item.secondaryImg.length - 2;
                    return (
                      <div key={item.id} className="flex flex-col gap-3.5 max-w-[330px]">
                        {/* Render main image */}
                        <Link to={ROUTES.NFT_DETAILS}>
                          <img
                            className="hover-scale"
                            src={`${item.primeImg1x}`}
                            srcSet={`${item.primeImg1x} 1x, ${item.primeImg2x} 2x`}
                            alt=""
                          />
                        </Link>

                        {/* Render sub images */}
                        <div className="flex gap-3.5 items-center justify-between">
                          {item.secondaryImg.slice(0, 2).map((image, index) => (
                            <Link to={ROUTES.NFT_DETAILS} key={index}>
                              <img
                                src={image.small}
                                srcSet={`${image.small} 1x, ${image.large} 2x`}
                                className="hover-scale"
                                alt=""
                              />
                            </Link>
                          ))}
                          {/* Render count sub images */}
                          {countSecondaryImages > 0 ? (
                            <Link to={ROUTES.NFT_DETAILS}>
                              <h5 className="w-[100px] h-[100px] max-[350px]:w-[90px] max-[350px]:h-[90px] bg-action flex justify-center items-center px-3.5 py-8 font-space-mono font-bold rounded-[20px] hover-scale">
                                {countSecondaryImages}+
                              </h5>
                            </Link>
                          ) : (
                            <Link to="">
                              <h5 className="w-[100px] h-[100px] max-[350px]:w-[90px] max-[350px]:h-[90px] bg-action px-3.5 py-8 font-space-mono font-bold flex justify-center items-center rounded-[20px] hover-scale">
                                Bonus Img
                              </h5>
                            </Link>
                          )}
                        </div>
                        {/* Cards footer */}
                        <div className="flex flex-col gap-2.5">
                          <h5>{item.title}</h5>
                          <div className="flex gap-[12px]">
                            <img src={item.imgUser} alt="imgUser" className="w-[24px] h-[24px]" />
                            <p className="text-base">{item.nameUser}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </>
            )}
          </div>
        </div>
        <div className="border-b-2 border-bg-primary"></div>
      </section>
    </>
  );
};

export default MarketplaceLists;
