interface HeroCardProps {
  url1: string;
  url2: string;
  url3: string;
  className: string;
}

const HeroCard = ({ url1, url2, url3, className }: HeroCardProps) => {
  return (
    <div className={`${className} w-[315px] h-[315px] `}>
      <img src={url1} srcSet={`${url1} 1x, ${url2} 2x`} alt="" />
      <div className="p-5 flex flex-col gap-2.5 bg-bg-secondary rounded-b-[20px]">
        <h5>Space Walking</h5>
        <div className="flex gap-3">
          <span>
            <img src={url3} className="w-6 h-6" alt="" />{" "}
          </span>
          Animakid
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
