export const config = {
  RPC_URL: "https://rpc-testnet.clan.network",
  REST_URL: "https://rest-testbet.clan.network",
  STAKING_URL: "https://stake-testnet.clan.network/stake",
  NETWORK_NAME: "Clan Network",
  NETWORK_TYPE: "testnet",
  CHAIN_ID: "playstation-2",
  CHAIN_NAME: "Clan Network - testnet",
  COIN_DENOM: "CLAN",
  COIN_MINIMAL_DENOM: "uclan",
  COIN_DECIMALS: 6,
  PREFIX: "clan",
  COIN_TYPE: 118,
  COINGECKO_ID: "-",
  GAS_PRICE_STEP_LOW: 0.0025,
  GAS_PRICE_STEP_AVERAGE: 0.025,
  GAS_PRICE_STEP_HIGH: 0.04,
  FEATURES: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
};
