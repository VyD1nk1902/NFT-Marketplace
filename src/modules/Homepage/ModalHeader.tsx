import { v4 as uuidv4 } from "uuid";
import { useShowModal } from "@stores/ShowModal";

const ModalHeader = () => {
  const isOpen = useShowModal((state) => state.isOpen);
  const closeModal = useShowModal((state) => state.close);
  const navHeaderMenu = [
    {
      id: uuidv4(),
      title: "Marketplace",
      link: "#",
    },
    {
      id: uuidv4(),
      title: "Rankings",
      link: "#",
    },
    {
      id: uuidv4(),
      title: "Connect a wallet",
      link: "#",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div
        className=" min-h-screen fixed inset-0 z-40 bg-bg-primary/95 flex items-center justify-center "
        onClick={closeModal}
      >
        <ul className="flex flex-col items-center justify-center gap-10 " onClick={(e) => e.stopPropagation()}>
          {navHeaderMenu.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-xl">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ModalHeader;
