export const ROUTES = {
  HOME: "/",
  CREATE_ACCOUNT: "/create-account",
  MARKETPLACE: "/marketplace",
  RANKINGS: "/rankings",
  CONNECT_WALLET: "/connect-wallet",

  //Dynamic routes
  NFT_DETAILS: "/nft/:id",
  ARTIST_DETAILS: "/artist/:id",

  //placeholder :id
};

//Dynamic getPath function

interface getPathProps {
  pathConstant: string;
  params: Record<string, string | number>;
}
// pathConstant: base path
// params: parameters ( value for :id)
// use Record here to describe object whose keys and values as string and number without knowing in advance their name (no need to list type of params)

export const getPath = ({ pathConstant, params }: getPathProps) => {
  if (!params) {
    return pathConstant;
  }

  let resultPath = pathConstant;
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      resultPath = resultPath.replace(`:${key}`, String(params[key]));
    }
    // (if...)Make sure code run for key in params not other prototype properties
    // replace placeholder with value of the key (id: 123)
    // use String(params[key] make sure value is string because replace() expect string
  }
  return resultPath;
};
