//Trending Collection data
export interface SecondaryImage {
  small: string;
  large: string;
}

export interface CollectionMetaData {
  id: string;
  title: string;
  nameUser: string;
  imageKey: string;
}

export interface LocalCollectionImage {
  imgUser: string;
  primaryImage1x: string;
  primaryImage2x: string;
  secondaryImages: SecondaryImage[];
}

export interface CombinedCollectionData extends CollectionMetaData, LocalCollectionImage {}

// Artists Data
export interface ArtistMetaData {
  id: string;
  name: string;
  balance: number;
  imageKey: string;
}

export interface LocalArtistImage {
  profileImg: string;
}

export interface CombinedArtistMetaData extends ArtistMetaData, LocalArtistImage {}

// Discovery NFTs Data

export interface DiscoveryMetaData {
  id: string;
  nftName: string;
  userName: string;
  price: number;
  bid: number;
  imageKey: string;
}

export interface LocalDiscoveryImage {
  background1x: string;
  background2x: string;
  userImg: string;
}

export interface CombinedDiscoveryMetaData extends DiscoveryMetaData, LocalDiscoveryImage {}

// Marketplace NFTs Data

export interface LocalMarketplaceNFTsImage {
  background1x: string;
  background2x: string;
  artistIMG: string;
}

export interface MarketplaceNFTs {
  id: string;
  nftName: string;
  userName: string;
  price: number;
  bid: number;
  imageKey: string;
}

export interface CombinedMarketplacNFTMetaData extends LocalMarketplaceNFTsImage, MarketplaceNFTs {}

// Marketplace Collections Data

export interface LocalMarketplaceCollectionsImg {
  imgUser: string;
  primeImg1x: string;
  primeImg2x: string;
  secondaryImg: SecondaryImage[];
}

export interface MarketplaceCollections {
  id: string;
  title: string;
  nameUser: string;
  imageKey: string;
}

export interface CombinedMarketplaceCollectionMetaData extends LocalMarketplaceCollectionsImg, MarketplaceCollections {}

// Ranking Artists Data

export interface LocalRankingAvatar {
  avatarRanking: string;
}

export interface RankingArtists {
  id: string;
  rank: number;
  name: string;
  change: string | number;
  nftsSold: number;
  volume: string | number;
  imageKey: string;
}

export interface CombinedRankingMetaData extends LocalRankingAvatar, RankingArtists {}

// NFT Details Data

export interface NFTDetailCards {
  id: string;
  nftName: string;
  artistName: string;
  price: number;
  bid: number;
  imageKey: string;
}

export interface LocalNFTDetailCards {
  background1x: string;
  background2x: string;
  artistImg: string;
}

export interface CombinedNFTDetailMetaData extends NFTDetailCards, LocalNFTDetailCards {}
