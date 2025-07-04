import primaryDog1x from "@assets/TrendingCollection/dog1x.png";
import primaryDog2x from "@assets/TrendingCollection/dog2x.png";
import secondaryCat1x from "@assets/TrendingCollection/cat1x.png";
import secondaryCat2x from "@assets/TrendingCollection/cat2x.png";
import secondaryBear1x from "@assets/TrendingCollection/bear1x.png";
import secondaryBear2x from "@assets/TrendingCollection/bear2x.png";
import primaryMushroom1x from "@assets/TrendingCollection/PrimaryMushroom.png";
import primaryMushroom2x from "@assets/TrendingCollection/PrimaryMushroomr@2x.png";
import secondaryMushroom1x from "@assets/TrendingCollection/SecondaryMushroom.png";
import secondaryMushroom2x from "@assets/TrendingCollection/SecondaryMushroom@2x.png";
import secondaryMush1x from "@assets/TrendingCollection/SecondaryMush.png";
import secondaryMush2x from "@assets/TrendingCollection/SecondaryMush@2x.png";
import primaryRobot1x from "@assets/TrendingCollection/PrimaryRobot.png";
import primaryRobot2x from "@assets/TrendingCollection/PrimaryRobot@2x.png";
import secondaryRobot1x from "@assets/TrendingCollection/SecondaryRobot.png";
import secondaryRobot2x from "@assets/TrendingCollection/SecondaryRobot@2x.png";
import secondaryR1x from "@assets/TrendingCollection/SecondaryRobot2.png";
import secondaryR2x from "@assets/TrendingCollection/SecondaryRobot2@2x.png";
import avatarFox from "@assets/Avatars/Avatar Placeholder (5).png";
import avatarHuman from "@assets/Avatars/Avatar Placeholder (6).png";
import avatarRobot from "@assets/Avatars/Avatar Placeholder (11).png";

const TrendingCollection = () => {
  const collectionData = [
    {
      title: "DSGN Animals",
      imgUser: avatarFox,
      nameUser: "MrFox",
      primaryImage1x: primaryDog1x,
      primaryImage2x: primaryDog2x,
      secondaryImages: [
        { small: secondaryCat1x, large: secondaryCat2x },
        { small: secondaryBear1x, large: secondaryBear2x },
        { small: secondaryBear2x, large: secondaryBear2x },
        { small: secondaryBear2x, large: secondaryBear2x },
      ],
    },
    {
      title: "Magic Mushrooms",
      imgUser: avatarHuman,
      nameUser: "Shroomie",
      primaryImage1x: primaryMushroom1x,
      primaryImage2x: primaryMushroom2x,
      secondaryImages: [
        { small: secondaryMushroom1x, large: secondaryMushroom2x },
        { small: secondaryMush1x, large: secondaryMush2x },
        { small: secondaryMushroom1x, large: secondaryMushroom2x },
        { small: secondaryMushroom1x, large: secondaryMushroom2x },
        { small: secondaryMushroom1x, large: secondaryMushroom2x },
        { small: secondaryMushroom1x, large: secondaryMushroom2x },
      ],
    },
    {
      title: "Disco Machines",
      imgUser: avatarRobot,
      nameUser: "BeKind2Robots",
      primaryImage1x: primaryRobot1x,
      primaryImage2x: primaryRobot2x,
      secondaryImages: [
        { small: secondaryRobot1x, large: secondaryRobot2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
        { small: secondaryR1x, large: secondaryR2x },
      ],
    },
  ];

  return (
    <section>
      <div className="content-wrapper">
        {/* Title */}
        <div className="flex flex-col gap-2.5">
          <h3>Trending Collection</h3>
          <p className="text-[22px] capitalize">Checkout our weekly updated trending collection.</p>
        </div>
        {/* Cards */}
        <div className="mt-[60px] grid grid-cols-3 gap-[30px]">
          {collectionData.map((item, index) => {
            const countSecondaryImages = item.secondaryImages.length - 2;
            return (
              <div key={index} className="flex flex-col gap-3.5">
                {/* Render main image */}
                <a href="#">
                  <img
                    className="hover-scale"
                    src={`${item.primaryImage1x}`}
                    srcSet={`${item.primaryImage1x} 1x, ${item.primaryImage2x} 2x`}
                    alt=""
                  />
                </a>

                {/* Render sub images */}
                <div className="flex gap-3.5 items-center justify-between">
                  {item.secondaryImages.slice(0, 2).map((image, index) => (
                    <a href="#">
                      <img
                        key={index}
                        src={image.small}
                        srcSet={`${image.small} 1x, ${image.large} 2x`}
                        className="hover-scale"
                        alt=""
                      />
                    </a>
                  ))}
                  {/* Render count sub images */}
                  {countSecondaryImages > 0 ? (
                    <a href="#">
                      <h5 className="w-[100px] h-[100px] bg-action px-3.5 py-8 font-space-mono font-bold text-center rounded-[20px] hover-scale">
                        {countSecondaryImages}+
                      </h5>
                    </a>
                  ) : (
                    <a href="">
                      <h5 className="w-[100px] h-[100px] bg-action px-3.5 py-8 font-space-mono font-bold flex justify-center items-center rounded-[20px] hover-scale">
                        Bonus Img
                      </h5>
                    </a>
                  )}
                </div>
                {/* Cards footer */}
                <div className="flex flex-col gap-2.5">
                  <h5>{item.title}</h5>
                  <div className="flex gap-[12px]">
                    <img src={item.imgUser} alt="imgUser" className="w-[24px] h-[24px]" />
                    <p className="text-base">{item.nameUser}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
