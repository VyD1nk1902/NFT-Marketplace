import { useState } from "react";
import clsx from "clsx";

type ActiveTab = "nfts" | "collections";
import type { LocalMarketplaceImage } from "@myTypes/api";

import { nftImagesMarketplace } from "@assets/Export/ImgExport";

//Local img data
const localImageMarketplace: Record<string, LocalMarketplaceImage> = nftImagesMarketplace;

const NFTLists = () => {
  const [active, setActive] = useState<ActiveTab>("nfts");

  const tabBaseClass = "w-full h-[60px] flex justify-center items-center";

  const handleTabClick = (tabName: ActiveTab) => {
    setActive(tabName);
  };

  return (
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
                className={clsx("font-space-mono rounded-[20px] px-2.5 py-[5px] text-white", {
                  "bg-caption-label": active === "nfts",
                  "bg-bg-secondary": active !== "nfts",
                })}
              >
                302
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
                className={clsx("font-space-mono rounded-[20px] px-2.5 py-[5px] text-white", {
                  "bg-caption-label": active === "collections",
                  "bg-bg-secondary": active !== "collections",
                })}
              >
                67
              </div>
            </button>
          </div>
        </div>
        {/* NFT cards list */}
        <div></div>
      </div>
    </section>
  );
};

export default NFTLists;
