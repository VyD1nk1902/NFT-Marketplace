import BrowseCategories from "@modules/Homepage/BrowseCategories";
import Header from "@modules/Homepage/Header";
import HeroSection from "@modules/Homepage/HeroSection";
import TopArtists from "@modules/Homepage/TopArtists";
import TrendingCollection from "@modules/Homepage/TrendingCollection";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Header />
        <HeroSection />
        <TrendingCollection />
        <TopArtists />
        <BrowseCategories />
      </div>
    </>
  );
};

export default Homepage;
