import { v4 as uuidv4 } from "uuid";

import { useShowModal } from "@stores/ShowModal";

import { Link } from "react-router-dom";

const ModalHeader = () => {
  // State
  const isOpen = useShowModal((state) => state.isOpen);
  const closeModal = useShowModal((state) => state.close);

  // List of main navigation items displayed in the header menu
  const navHeaderMenu = [
    {
      id: uuidv4(),
      title: "Marketplace",
      link: "/",
    },
    {
      id: uuidv4(),
      title: "Rankings",
      link: "/",
    },
    {
      id: uuidv4(),
      title: "Connect a wallet",
      link: "/",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div
        className=" min-h-screen fixed inset-0 z-40 bg-bg-primary/95 flex items-center justify-center "
        onClick={closeModal}
      >
        {/* Use stopPropagation to prevent click event from bubbling up and closing modal when click navigation items */}
        <ul className="flex flex-col items-center justify-center gap-10 " onClick={(e) => e.stopPropagation()}>
          {navHeaderMenu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="text-xl">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ModalHeader;
