import Cover from "@assets/ArtistPage/CoverImg.png";
import Avatar1x from "@assets/ArtistPage/Avatar Placeholder1x.png";
import Avatar2x from "@assets/ArtistPage/Avatar Placeholder2x.png";
import clsx from "clsx";
import { useResponsive } from "@hooks/useResponsive";

const CoverImg = () => {
  const { isMobile: Mobile, isMobileSmall: MobileS, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const imgCoverClass = clsx("w-full object-cover", {
    "h-[320px]": Desktop,
    "h-[280px]": Tablet,
    "h-[250px]": Mobile || MobileS,
  });
  const avatarClass = clsx("w-[120px] h-[120px] rounded-[20px]", {
    "-mt-[60px]  overflow-hidden": Desktop,
  });
  return (
    <section className="pt-[100px]">
      <div>
        <div className="w-full">
          <img src={Cover} className={imgCoverClass} alt="background" />
        </div>
        <div className="content-wrapper">
          <div className={avatarClass}>
            <img
              src={Avatar1x}
              srcSet={`${Avatar1x} 1x, ${Avatar2x} 2x`}
              className="object-cover w-full h-full"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverImg;
