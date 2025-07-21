import CreateAccount1x from "@assets/CreateAccount/CreateAccount1x.png";
import CreateAccount2x from "@assets/CreateAccount/CreateAccount2x.png";
import CreateAccount from "@assets/CreateAccount/CreateAccountMain.png";
import { LockIcon, Email, User } from "@assets/Svg/SvgExport";

import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";

import { useResponsive } from "@hooks/useResponsive";
import clsx from "clsx";

const MainSection = () => {
  // Responsive
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const WrapClass = clsx({
    "grid grid-cols-2 gap-[60px]": Desktop,
    "grid grid-cols-2 gap-[40px]": Tablet,
    "grid grid-rows-[232px, 1fr] gap-[30px]": Mobile,
    "flex flex-col gap-[30px]": MobileS,
  });
  const ImgClass = clsx({
    "w-full h-full aspect-square": Desktop,
    "w-full h-full aspect-2/3 object-cover": Tablet,
    "w-full aspect-4/3 object-cover": Mobile,
    "w-full aspect-square object-cover": MobileS,
  });

  const InputClass =
    "pl-5 py-4 bg-white rounded-[20px] w-[330px] max-[350px]:w-[250px] 2xl:w-[500px] h-[46px] 2xl:h-[80px] flex gap-3 items-center 2xl:text-2xl";

  return (
    <section className="pt-[100px] w-full overflow-hidden">
      <div className={WrapClass}>
        <div>
          <img
            src={CreateAccount}
            srcSet={`${CreateAccount1x} 1x, ${CreateAccount2x} 2x`}
            className={ImgClass}
            alt=""
          />
        </div>
        <div className="pb-[40px] px-[30px] md:py-[80px] lg:py-[100px]">
          {/* Title */}
          <div className="md:px-0 px-[30px] pb-[30px] 2xl:pb-[60px] md:pb-[40px] max-w-[460px] 2xl:max-w-[800px] mx-auto">
            <h2 className="hidden lg:block">Create Account</h2>
            <h3 className="lg:hidden">Create Account</h3>

            <p className="text-[16px] md:text-[22px] 2xl:text-[33px] pt-5">
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>
          </div>
          {/* Input fields */}

          <div className="flex flex-col gap-[15px] 2xl:gap-[30px] items-center">
            <div className={InputClass}>
              <User className="w-5 h-5" />
              <Inputs
                id="name"
                name="name"
                autoComplete="username"
                placeholder="Username"
                type="text"
                className=" text-bg-primary border-none"
              />
            </div>
            <div className={InputClass}>
              <Email className="w-5 h-5" />
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                type="email"
                className=" text-bg-primary border-none"
              />
            </div>
            <div className={InputClass}>
              <LockIcon className="w-5 h-5" />
              <Inputs
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                type="password"
                className=" text-bg-primary border-none"
              />
            </div>
            <div className={InputClass}>
              <LockIcon className="w-5 h-5" />
              <Inputs
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                type="password"
                className=" text-bg-primary border-none"
              />
            </div>
          </div>

          <Buttons
            className="w-[330px] 2xl:hidden max-[350px]:w-[260px] mt-7 md:mx-[-14px] mx-auto lg:mx-auto"
            size="tertiary"
            background="color"
            to="/"
          >
            Create account
          </Buttons>
          {/* Buttons Responsive 2xl */}
          <Buttons
            className="w-[500px] text-2xl hidden 2xl:block mx-auto mt-10 text-center pt-5"
            size="primary"
            background="color"
            to="/"
          >
            Create account
          </Buttons>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
