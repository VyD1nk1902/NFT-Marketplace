import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import { useResponsive } from "@hooks/useResponsive";
import { useEffect } from "react";
import { useNFTDetailStore } from "@stores/useFetchingStore";
import type { NFTDetailCards, LocalNFTDetailCards, CombinedNFTDetailMetaData } from "@myTypes/api";

import Buttons from "@components/Buttons";
import { ArrowRight } from "@assets/Export/SvgExport";
import { nftDetailMoreIMG } from "@assets/Export/ImgExport";
import { Spinner, ErrorBox, EmptyBox } from "@components/UIFetchingHelper";
import { ROUTES } from "@utils/constants/route";
import { FormatBalance } from "@components/FormatBalance";

const ArtistMore = () => {
  // Responsive
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();

  // Navigate
  const navigate = useNavigate();
  const goToArtistHandle = () => navigate(ROUTES.ARTIST_DETAILS);

  const uiFetchingStateClass =
    "min-h-[300px] flex justify-center place-items-center min-[640px]:col-span-2 max-[1023px]:col-span-2 lg:col-span-3";

  const paddingClass = clsx({
    "py-[80px]": Desktop,
    "py-[40px]": Tablet || Mobile || MobileS,
  });

  //useFetchingStore
  const data = useNFTDetailStore((state) => state.data);
  const loading = useNFTDetailStore((state) => state.loading);
  const error = useNFTDetailStore((state) => state.error);
  const fetchData = useNFTDetailStore((state) => state.fetchData);

  useEffect(() => {
    const fetchNFTDetailData = async () => {
      const response = await axios.get<NFTDetailCards[]>("/data/nftDetail-metadata.json");
      const fetchedData = response.data;

      const combinedData: CombinedNFTDetailMetaData[] = fetchedData.map((item) => ({
        ...item,
        ...((nftDetailMoreIMG as Record<string, LocalNFTDetailCards>)[item.imageKey] ?? {}),
      }));
      return combinedData;
    };
    fetchData(fetchNFTDetailData);
  }, [fetchData]);

  return (
    <section className={`${paddingClass} content-wrapper max-[350px]:px-3 flex flex-col gap-[60px]`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-3xl lg:text-4xl font-[600]">More from this artist</p>
        <Buttons
          onClick={goToArtistHandle}
          size="secondary"
          background="transparent"
          className="px-[50px] max-sm:hidden"
        >
          <span>
            <ArrowRight className="fill-action w-5 h-5" />
          </span>
          Go To Artist Page
        </Buttons>
      </div>
      {/* Content render */}
      <div className="content-wrapper grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] max-xs:px-5 place-items-center mx-auto">
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
          data.map((item) => (
            <Link to={ROUTES.NFT_DETAILS} key={item.id} className="hover-scale">
              <img
                src={item.background1x}
                srcSet={`${item.background1x} 1x, ${item.background2x} 2x`}
                alt=""
                className="w-[330px] min-h-[296px] object-cover rounded-t-[20px]"
              />
              <div className="p-5 flex flex-col gap-2.5 bg-bg-secondary rounded-b-[20px]">
                <h5>{item.nftName}</h5>
                <div className="flex gap-3 font-space-mono">
                  <span>
                    <img src={item.artistImg} className="w-6 h-6" alt="" />{" "}
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
    </section>
  );
};

export default ArtistMore;
