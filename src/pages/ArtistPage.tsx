import ArtistInfo from "@modules/ArtistPage/ArtistInfo";
import CardSection from "@modules/ArtistPage/CardSection";
import CoverImg from "@modules/ArtistPage/CoverImg";

const ArtistPage = () => {
  return (
    <div>
      <CoverImg />
      <ArtistInfo />
      <CardSection />
    </div>
  );
};

export default ArtistPage;
