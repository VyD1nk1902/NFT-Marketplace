import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalHeader from "@components/ModalHeader";
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
      <div className="overflow-x-hidden">
        <Header />
        <ModalHeader />
        <HeroSection />
        <TrendingCollection />
        <TopArtists />
        <BrowseCategories />
        <DiscoveryMore />
        <Highlight />
        <HowItWorks />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
