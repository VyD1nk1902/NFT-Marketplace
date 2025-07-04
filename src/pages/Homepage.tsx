import Header from "@modules/Homepage/Header";
import HeroSection from "@modules/Homepage/HeroSection";
import TrendingCollection from "@modules/Homepage/TrendingCollection";
import TopArtists from "@modules/Homepage/TopArtists";
import BrowseCategories from "@modules/Homepage/BrowseCategories";
import DiscoveryMore from "@modules/Homepage/Discovery";
import Highlight from "@modules/Homepage/Highlight";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Header />
        <HeroSection />
        <TrendingCollection />
        <TopArtists />
        <BrowseCategories />
        <DiscoveryMore />
        <Highlight />
      </div>
    </>
  );
};

export default Homepage;
