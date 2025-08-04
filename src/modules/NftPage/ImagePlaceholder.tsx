import NFTImage from "@assets/NFTPage/Image PlaceHolder.png";
import NFTImageSmall from "@assets/NFTPage/NFT main image.png";
import { useResponsive } from "@hooks/useResponsive";
import clsx from "clsx";

const ImagePlaceholder = () => {
  const { isMobile: Mobile, isMobileSmall: MobileS, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const ImgClass = clsx("w-full object-cover", {
    "h-[560px] ": Desktop,
    "h-[420px]": Tablet,
    "h-[320px] self-stretch": Mobile || MobileS,
  });

  return (
    <section className="pt-[100px]">
      <div>
        {(Desktop || Tablet) && <img src={NFTImage} alt="Background" className={ImgClass} />}
        {(Mobile || MobileS) && <img src={NFTImageSmall} className={ImgClass} alt="Background" />}
      </div>
    </section>
  );
};

export default ImagePlaceholder;
