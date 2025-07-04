import Buttons from "@components/Buttons";

import headerLogox1 from "@assets/Homepage/Header/NFT Marketplace.png";
import headerLogox2 from "@assets/Homepage/Header/NFT Marketplace-2x.png";
import User from "@assets/Icons/User.svg";
import { StoreFront } from "@assets/Svg/SvgExport";

const Header = () => {
  const navHeaderMenu = [
    {
      title: "Marketplace",
      link: "#",
    },
    {
      title: "Rankings",
      link: "#",
    },
    {
      title: "Connect a wallet",
      link: "#",
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 h-[100px] bg-bg-primary w-full z-50 shadow">
      <div className="flex justify-between items-center px-12 py-5">
        <div>
          <a href="#" className="flex items-center justify-center gap-3">
            <span>
              <StoreFront className="text-action mb-1 " />
            </span>
            <span>
              <img src={headerLogox1} srcSet={`${headerLogox1} 1x, ${headerLogox2} 2x`} alt="main logo" />
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-2.5">
          <ul className="flex gap-2.5">
            {navHeaderMenu.map((item) => (
              <li
                key={item.title}
                className="p-5 font-[600] scale-105 transition-all ease-in-out duration-300 hover:scale-100 hover:text-action"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <Buttons size="secondary" background="color" className="w-[152px] px-[30px]" link="#">
            <img src={User} className="w-[20px] h-[20px]" alt="" />
            Sign up
          </Buttons>
        </div>
      </div>
    </header>
  );
};

export default Header;
