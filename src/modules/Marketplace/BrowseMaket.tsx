import Inputs from "@components/Inputs";
import { SearchIcon } from "@assets/Export/SvgExport";

import clsx from "clsx";
import { useResponsive } from "@hooks/useResponsive";

interface BrowseMarketProps {
  searchInput: string;
  setSearchInput: (v: string) => void;
  placeholder?: string;
}

const BrowseMarket = ({ searchInput, setSearchInput, placeholder }: BrowseMarketProps) => {
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const contentWrapClass = clsx({
    "px-[115px] py-[80px]": Desktop,
    "px-[77px] pt-[60px] pb-[80px]": Tablet,
    "px-[30px] py-[40px]": Mobile || MobileS,
  });
  return (
    <section className="pt-[100px] w-full overflow-hidden content-wrapper">
      <div className={`flex flex-col gap-[30px] ${contentWrapClass}`}>
        <div>
          <h2 className="lg:block hidden">Browse Marketplace</h2>
          <h3 className="lg:hidden md:block hidden">Browse Marketplace</h3>
          <h4 className="block md:hidden">Browse Marketplace</h4>
          <p className="lg:text-[22px] text-base pt-2.5">Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className="flex py-3 px-5 items-center gap-2.5 rounded-[20px] border border-bg-secondary">
          <Inputs
            placeholder={placeholder ?? `Search your favourite NFTs`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full text-caption-label"
          />
          <SearchIcon className="fill-white" />
        </div>
      </div>
    </section>
  );
};

export default BrowseMarket;
