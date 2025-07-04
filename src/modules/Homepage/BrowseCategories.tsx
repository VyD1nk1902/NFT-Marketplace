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

const BrowseCategories = () => {
  const categoryCardsData = [
    {
      name: "Art",
      background: backgroundCard,
      icon: iconCard,
    },
    {
      name: "Collectibles",
      background: backgroundCard1,
      icon: iconCard1,
    },
    {
      name: "Music",
      background: backgroundCard2,
      icon: iconCard2,
    },
    {
      name: "Photography",
      background: backgroundCard3,
      icon: iconCard3,
    },
    {
      name: "Video",
      background: backgroundCard4,
      icon: iconCard4,
    },
    {
      name: "Utility",
      background: backgroundCard5,
      icon: iconCard5,
    },
    {
      name: "Sport",
      background: backgroundCard6,
      icon: iconCard6,
    },
    {
      name: "Virtual Worlds",
      background: backgroundCard7,
      icon: iconCard7,
    },
  ];

  return (
    <section className="content-wrapper">
      <div>
        <h3 className="pb-[60px]">Browse Categories</h3>
        <div className="grid grid-cols-4 gap-[30px]">
          {categoryCardsData.map((item) => (
            <a key={item.name} href="#" className="w-[240px] h-[316px] rounded-[20px] bg-bg-secondary hover-scale">
              <div className="relative overflow-hidden rounded-t-[20px]">
                <img src={item.background} className="blur-[7.5px] " alt="" />
                <img src={item.icon} className="absolute top-17 left-17" alt="" />
              </div>
              <div className="pt-5 pb-6 px-[30px]">
                <h5>{item.name}</h5>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
