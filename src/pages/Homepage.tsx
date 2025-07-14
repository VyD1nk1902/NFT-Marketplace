import HeroSection from "@modules/Homepage/HeroSection";
import TrendingCollection from "@modules/Homepage/TrendingCollection";
import TopArtists from "@modules/Homepage/TopArtists";
import BrowseCategories from "@modules/Homepage/BrowseCategories";
import DiscoveryMore from "@modules/Homepage/Discovery";
import Highlight from "@modules/Homepage/Highlight";
import HowItWorks from "@modules/Homepage/HowItWorks";
import Subscribe from "@modules/Homepage/Subscribe";

const Homepage = () => {
  return (
    <>
      <div>
        <HeroSection />
        <TrendingCollection />
        <TopArtists />
        <BrowseCategories />
        <DiscoveryMore />
        <Highlight />
        <HowItWorks />
        <Subscribe />
      </div>
    </>
  );
};

export default Homepage;
