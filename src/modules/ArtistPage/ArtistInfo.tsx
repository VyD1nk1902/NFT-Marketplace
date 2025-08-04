import { Link } from "react-router-dom";
import { Discord, Twitter, Youtube, Instagram, Globe, Plus, Copy } from "@assets/Export/SvgExport";
import { ROUTES } from "@utils/constants/route";
import Buttons from "@components/Buttons";

const ArtistInfo = () => {
  const Stat = [
    {
      id: 1,
      number: 250,
      string: "Volume",
    },
    {
      id: 2,
      number: 50,
      string: "NFTs Sold",
    },
    {
      id: 3,
      number: 3000,
      string: "Followers",
    },
  ];
  return (
    <section className="content-wrapper lg:py-[40px] py-[30px]">
      <div className="flex justify-between items-start gap-[100px]">
        <div className="flex flex-col gap-[30px]">
          <h2>Animakid</h2>
          <ul className="flex gap-5">
            {Stat.map((item) => (
              <li key={item.id} className="w-[160px]">
                <h4 className="font-space-mono">{item.number}k+</h4>
                <p>{item.string}</p>
              </li>
            ))}
          </ul>
          <h5 className="text-caption-label font-space-mono">Bio</h5>
          <p className="text-[22px]">The internet's friendliest designer kid.</p>
          <h5 className="text-caption-label font-space-mono">Links</h5>
          <div className="flex gap-2.5">
            <Link to={ROUTES.RICK_ROLL}>
              <Globe className="fill-caption-label w-8 h-8" />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Discord className="fill-caption-label w-8 h-8" />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Youtube className="fill-caption-label w-8 h-8" />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Twitter className="fill-caption-label w-8 h-8" />
            </Link>
            <Link to={ROUTES.RICK_ROLL}>
              <Instagram className="fill-caption-label w-8 h-8" />
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
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
