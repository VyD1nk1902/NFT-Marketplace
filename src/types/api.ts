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

export interface LocalMarketplaceImage {
  background1x: string;
  background2x: string;
  artistIMG: string;
}
