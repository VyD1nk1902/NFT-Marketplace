import Buttons from "@components/Buttons";

import headerLogox1 from "@assets/Homepage/Header/NFT Marketplace.png";
import headerLogox2 from "@assets/Homepage/Header/NFT Marketplace-2x.png";
import User from "@assets/Icons/User.svg";
import { BurgerMenu } from "@assets/Export/SvgExport";
import { StoreFront } from "@assets/Export/SvgExport";

import { v4 as uuidv4 } from "uuid";

import { useShowModal } from "@stores/ShowModal";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { ROUTES } from "@utils/constants/route";

const Header = () => {
  // Burger Menu show Nav state
  const showModal = useShowModal((state) => state.open);

  // navigate for buttons
  const navigate = useNavigate();
  const handleSignupClick = () => navigate(ROUTES.CREATE_ACCOUNT);

  // List of main navigation items displayed in the header menu
  const navHeaderMenu = [
    {
      id: uuidv4(),
      title: "Marketplace",
      link: `${ROUTES.MARKETPLACE}`,
    },
    {
      id: uuidv4(),
      title: "Rankings",
      link: `${ROUTES.RANKINGS}`,
    },
    {
      id: uuidv4(),
      title: "Connect a wallet",
      link: `${ROUTES.CONNECT_WALLET}`,
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 h-[100px] bg-bg-primary w-full z-40 shadow">
      <div className="flex justify-between items-center sm:px-12 px-2 py-5">
        {/* Left */}
        <div>
          <Link to={ROUTES.HOME} className="flex items-center justify-center gap-3">
            <span>
              <StoreFront className="text-action mb-1 " />
            </span>
            <span>
              <img src={headerLogox1} srcSet={`${headerLogox1} 1x, ${headerLogox2} 2x`} alt="main logo" />
            </span>
          </Link>
        </div>

        {/* Right */}
        <div className="hidden lg:flex justify-center items-center gap-2.5 ">
          <ul className="flex gap-2.5">
            {navHeaderMenu.map((item) => (
              <li
                key={item.id}
                className="p-5 font-[600] scale-105 transition-all ease-in-out duration-300 hover:scale-100 hover:text-action"
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <Buttons size="secondary" background="color" className="w-[152px] px-[30px]" onClick={handleSignupClick}>
            <img src={User} className="w-[20px] h-[20px]" alt="" />
            Sign up
          </Buttons>
        </div>
        {/* Burger menu button */}
        <Buttons size="none" background="none" className="fill-white lg:hidden " onClick={showModal}>
          <BurgerMenu className="" />
        </Buttons>
      </div>
    </header>
  );
};

export default Header;
