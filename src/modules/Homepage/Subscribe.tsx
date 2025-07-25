import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";

import Photo from "@assets/Homepage/Subscribe/Photo.png";
import Photo2x from "@assets/Homepage/Subscribe/Photo@2x.png";

import { Email } from "@assets/Svg/SvgExport";
import { useResponsive } from "@hooks/useResponsive";

import clsx from "clsx";

const Subcribe = () => {
  // Responsive wrap div variables
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const borderClass = clsx({
    "bg-bg-secondary lg:p-[40px] xl:p-[60px] rounded-[20px] flex lg:gap-[40px] xl:gap-[80px]": Desktop,
    "bg-bg-secondary px-[30px] py-[40px] rounded-[20px] flex gap-[30px]": Tablet,
    "flex flex-col gap-[30px]": Mobile,
    "flex flex-col gap-[25px]": MobileS,
  });

  const imageSizeClass = clsx({
    "w-[425px] h-[310px]": Desktop,
    "w-[300px] h-[280px]": Tablet,
    "w-[315px] h-[255px]": Mobile,
    "w-[285px] h-[250px]": MobileS,
  });

  return (
    <section className="content-wrapper-homepage">
      <div className={borderClass}>
        {/* Left Pic */}
        {Desktop && <img src={Photo} srcSet={`${Photo} 1x , ${Photo2x} 2x`} className={imageSizeClass} alt="" />}
        {Tablet && <img src={Photo} srcSet={`${Photo} 1x , ${Photo2x} 2x`} className={imageSizeClass} alt="" />}
        {Mobile && <img src={Photo} srcSet={`${Photo} 1x , ${Photo2x} 2x`} className={imageSizeClass} alt="" />}
        {MobileS && <img src={Photo} srcSet={`${Photo} 1x , ${Photo2x} 2x`} className={imageSizeClass} alt="" />}

        {/* Content */}
        <div>
          {/* Desc */}
          {Desktop ? (
            <div className="capitalize">
              <h3>
                Join our weekly <br /> digest
              </h3>
              <p className="text-[22px] pt-2.5 pb-10">
                Get exclusive promotions & updates
                <br /> straight to your inbox.
              </p>
            </div>
          ) : (
            <div className="capitalize">
              <h4>
                Join our weekly <br /> digest
              </h4>
              <p className="pt-2.5 pb-10">
                Get exclusive promotions & updates
                <br /> straight to your inbox.
              </p>
            </div>
          )}

          {/* Input button */}
          {Desktop && (
            <div className="bg-white rounded-[20px] flex xl:gap-5 lg:gap-2">
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email here..."
                type="text"
                className=" bg-white pl-5 py-4 h-[60px] text-bg-primary rounded-[20px] border-none  "
              />

              <Buttons className="xl:w-[200px] lg:w-[150px]" size="secondary" background="color" to="/">
                <Email className="fill-text w-5 h-5" /> Subcribe
              </Buttons>
            </div>
          )}

          {Tablet && (
            <div className="flex flex-col rounded-[20px] gap-4">
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email here..."
                type="text"
                className=" bg-white px-5 py-4 h-[46px] text-bg-primary rounded-[20px] border-none  "
              />

              <Buttons className="w-[300px]" size="tertiary" background="color" to="/">
                <Email className="fill-text w-5 h-5" /> Subcribe
              </Buttons>
            </div>
          )}

          {Mobile && (
            <div className="flex flex-col rounded-[20px] gap-4">
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email here..."
                type="text"
                className=" bg-white px-5 py-4 h-[46px] text-bg-primary rounded-[20px] border-none  "
              />

              <Buttons className="w-full" size="tertiary" background="color" to="/">
                <Email className="fill-text w-5 h-5" /> Subcribe
              </Buttons>
            </div>
          )}

          {MobileS && (
            <div className="flex flex-col rounded-[20px] gap-4">
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email here..."
                type="text"
                className=" bg-white px-5 py-4 h-[46px] text-bg-primary rounded-[20px] border-none  "
              />

              <Buttons className="w-full" size="tertiary" background="color" to="/">
                <Email className="fill-text w-5 h-5" /> Subcribe
              </Buttons>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
