import backgroundCard from "@assets/Homepage/BrowseCategories/Image Placeholder.png";
import backgroundCard1 from "@assets/Homepage/BrowseCategories/Image Placeholder (1).png";
import backgroundCard2 from "@assets/Homepage/BrowseCategories/Image Placeholder (2).png";
import backgroundCard3 from "@assets/Homepage/BrowseCategories/Image Placeholder (3).png";
import backgroundCard4 from "@assets/Homepage/BrowseCategories/Image Placeholder (4).png";
import backgroundCard5 from "@assets/Homepage/BrowseCategories/Image Placeholder (5).png";
import backgroundCard6 from "@assets/Homepage/BrowseCategories/Image Placeholder (6).png";
import backgroundCard7 from "@assets/Homepage/BrowseCategories/Image Placeholder (7).png";
import iconCard from "@assets/Icons/PaintBrush.svg";
import iconCard1 from "@assets/Icons/Swatches.svg";
import iconCard2 from "@assets/Icons/MusicNotes.svg";
import iconCard3 from "@assets/Icons/Camera.svg";
import iconCard4 from "@assets/Icons/VideoCamera.svg";
import iconCard5 from "@assets/Icons/MagicWand.svg";
import iconCard6 from "@assets/Icons/Basketball.svg";
import iconCard7 from "@assets/Icons/Planet.svg";

import { v4 as uuidv4 } from "uuid";

const BrowseCategories = () => {
  // Cards List render data
  const categoryCardsData = [
    {
      id: uuidv4(),
      name: "Art",
      background: backgroundCard,
      icon: iconCard,
    },
    {
      id: uuidv4(),
      name: "Collectibles",
      background: backgroundCard1,
      icon: iconCard1,
    },
    {
      id: uuidv4(),
      name: "Music",
      background: backgroundCard2,
      icon: iconCard2,
    },
    {
      id: uuidv4(),
      name: "Photography",
      background: backgroundCard3,
      icon: iconCard3,
    },
    {
      id: uuidv4(),
      name: "Video",
      background: backgroundCard4,
      icon: iconCard4,
    },
    {
      id: uuidv4(),
      name: "Utility",
      background: backgroundCard5,
      icon: iconCard5,
    },
    {
      id: uuidv4(),
      name: "Sport",
      background: backgroundCard6,
      icon: iconCard6,
    },
    {
      id: uuidv4(),
      name: "Virtual Worlds",
      background: backgroundCard7,
      icon: iconCard7,
    },
  ];

  return (
    <section className="content-wrapper">
      <div>
        {/* Section Title */}
        <h3 className="pb-[60px] hidden lg:block">Browse Categories</h3>
        <h4 className="pb-[60px] block lg:hidden">Browse Categories</h4>
        {/* Cards list */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-[30px]">
          {categoryCardsData.map((item) => (
            <a
              key={item.id}
              href="#"
              className="lg:w-[240px] lg:h-[316px] sm:w-[150px] sm:h-[209px] rounded-[20px] bg-bg-secondary hover-scale"
            >
              <div className="relative overflow-hidden rounded-t-[20px]">
                <img src={item.background} className="blur-[7.5px] " alt="" />
                <img
                  src={item.icon}
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] absolute lg:top-17 lg:left-17 top-8 left-8 "
                  alt=""
                />
              </div>
              <div className="pt-5 pb-6 px-[30px] lg:block hidden">
                <h5>{item.name}</h5>
              </div>
              <div className="pt-5 pb-6 px-[20px] lg:hidden block">
                <p>{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
