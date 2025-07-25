import ConnectWalletBG1x from "@assets/CreateAccount/CreateAccount1x.png";
import ConnectWalletBG2x from "@assets/CreateAccount/CreateAccount2x.png";
import ConnectWalletBG from "@assets/CreateAccount/CreateAccountMain.png";

import Coinbase from "@assets/ConnectWallet/Coinbase.png";
import Metamask from "@assets/ConnectWallet/Metamask.png";
import WalletConnect from "@assets/ConnectWallet/WalletConnect.png";

import { useResponsive } from "@hooks/useResponsive";
import clsx from "clsx";
import { Link } from "react-router-dom";

const ConnectWalletMain = () => {
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
  const ImgSize = clsx({
    "w-[40px] h-[40px]": Desktop,
    "w-[32px] h-[32px]": Tablet || Mobile || MobileS,
  });
  const liClass =
    "pl-10 pr-5 max-[350px]:w-64 w-80 2xl:w-100 2xl:h-30 lg:h-16 h-[60px] rounded-[20px] flex gap-5 2xl:gap-10 items-center bg-bg-secondary border-action border hover-scale";

  return (
    <section className="pt-[100px] w-full overflow-hidden">
      <div className={WrapClass}>
        <div>
          <img
            src={ConnectWalletBG}
            srcSet={`${ConnectWalletBG1x} 1x, ${ConnectWalletBG2x} 2x`}
            className={ImgClass}
            alt=""
          />
        </div>
        <div className="pb-[40px] px-[30px] md:py-[80px] lg:py-[100px]">
          {/* Title */}
          <div className="flex flex-col justify-center md:px-0 px-[30px] pb-[30px] 2xl:pb-[60px] md:pb-[40px] max-w-[460px] 2xl:max-w-[800px] mx-auto">
            <h2 className="hidden lg:block">Connect wallet</h2>
            <h3 className="lg:hidden">Connect wallet</h3>
            <p className="text-[16px] md:text-[22px] 2xl:text-[33px] pt-5">
              Choose a wallet you want to connect. There are several wallet providers.
            </p>
          </div>
          {/* Link List */}
          <div>
            <ul className="flex flex-col gap-5 2xl:gap-10 justify-center items-center">
              <Link to="https://metamask.io/">
                <li className={liClass}>
                  <img src={Metamask} className={ImgSize} alt="meta-mask" />
                  <p className="font-[600] max-[350px]:text-base  text-[22px] 2xl:text-[30px]">Metamask</p>
                </li>
              </Link>
              <Link to="https://walletconnect.network/">
                <li className={liClass}>
                  <img src={WalletConnect} className={ImgSize} alt="wallet-connect" />
                  <p className="font-[600] max-[350px]:text-base  text-[22px] 2xl:text-[30px]">Wallet Connect</p>
                </li>
              </Link>
              <Link to="https://www.coinbase.com/">
                <li className={liClass}>
                  <img src={Coinbase} className={ImgSize} alt="coin-base" />
                  <p className="font-[600] max-[350px]:text-base text-[22px] 2xl:text-[30px]">Coinbase</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWalletMain;
