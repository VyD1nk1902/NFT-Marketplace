import NFTDetail from "@modules/NftPage/NFTDetail";
import NFTMore from "@modules/NftPage/NFTMore";
import ImagePlaceholder from "@modules/NftPage/ImagePlaceholder";

const NftPage = () => {
  return (
    <div>
      <ImagePlaceholder />
      <NFTDetail />
      <NFTMore />
    </div>
  );
};

export default NftPage;
