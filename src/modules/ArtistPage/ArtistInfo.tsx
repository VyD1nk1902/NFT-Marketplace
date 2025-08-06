import { Link } from "react-router-dom";
import { Discord, Twitter, Youtube, Instagram, Globe, Plus, Copy } from "@assets/Export/SvgExport";
import { ROUTES } from "@utils/constants/route";
import Buttons from "@components/Buttons";
import clsx from "clsx";
import { useResponsive } from "@hooks/useResponsive";

const ArtistInfo = () => {
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const logoWrapClass = clsx("fill-caption-label", {
    "w-8 h-8": Desktop,
    "w-6 h-6": Tablet || Mobile || MobileS,
  });
  const buttonDesktopClass = clsx("flex gap-5 max-lg:hidden");
  const buttonResponsiveClass = clsx("flex gap-5 lg:hidden max-sm:flex-col");

  const Stat = [
    {
      id: 1,
      number: "250k",
      string: "Volume",
    },
    {
      id: 2,
      number: "50k",
      string: "NFTs Sold",
    },
    {
      id: 3,
      number: 3000,
      string: "Followers",
    },
  ];
  return (
    <section className="content-wrapper lg:py-[40px] py-[30px] max-[350px]:px-5">
      <div className="flex justify-between items-start gap-[100px]">
        <div className="flex flex-col gap-[30px]">
          <p className="font-[600] text-[28px] sm:text-[38px] lg:text-[51px]">Animakid</p>
          <div className={buttonResponsiveClass}>
            <Buttons className="px-[50px]" size="secondary" background="color">
              <Copy className="fill-white w-5 h-5" />
              0xc0E3...B79C
            </Buttons>
            <Buttons className="px-[30px]" size="secondary" background="transparent">
              <Plus className="fill-action w-5 h-5" />
              Follow
            </Buttons>
          </div>
          <ul className="grid grid-cols-3">
            {Stat.map((item) => (
              <li key={item.id} className="w-[160px]">
                <p className="font-space-mono font-[600] text-2xl lg:text-3xl">{item.number}+</p>
                <p className="lg:text-[22px]">{item.string}</p>
              </li>
            ))}
          </ul>
          <p className="text-caption-label font-space-mono lg:text-[22px]">Bio</p>
          <p className="lg:text-[22px]">The internet's friendliest designer kid.</p>
          <p className="text-caption-label font-space-mono lg:text-[22px]">Links</p>
          <div className="flex gap-2.5">
            <Link to={ROUTES.RICK_ROLL}>
              <Globe className={logoWrapClass} />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Discord className={logoWrapClass} />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Youtube className={logoWrapClass} />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Twitter className={logoWrapClass} />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Instagram className={logoWrapClass} />
            </Link>
          </div>
        </div>
        <div className={buttonDesktopClass}>
          <Buttons className="px-[50px]" size="secondary" background="color">
            <Copy className="fill-white w-5 h-5" />
            0xc0E3...B79C
          </Buttons>
          <Buttons className="px-[30px]" size="secondary" background="transparent">
            <Plus className="fill-action w-5 h-5" />
            Follow
          </Buttons>
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;
