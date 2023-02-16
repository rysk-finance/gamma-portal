import { SupportedNetworks } from './networks'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY

type graphEndPointType = {
  [key in SupportedNetworks]: string
}

export const mainnetProvider = `https://mainnet.infura.io/v3/${INFURA_KEY}`

export const networkToProvider: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.ArbitrumRinkeby]: `https://rinkeby.arbitrum.io/rpc`,
  [SupportedNetworks.ArbitrumGoerli]: `https://goerli.arbitrum.io/rpc`,
  [SupportedNetworks.Arbitrum]: 'https://arb1.arbitrum.io/rpc',
}

export const networkIdToName: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.ArbitrumRinkeby]: `Arbitrum Testnet`,
  [SupportedNetworks.ArbitrumGoerli]: `Arbitrum Testnet Goerli`,
  [SupportedNetworks.Arbitrum]: 'Arbitrum',
}

export const subgraph: graphEndPointType = {
  [SupportedNetworks.ArbitrumRinkeby]: 'https://api.thegraph.com/subgraphs/name/ugolino/ryskopyntestnet',
  [SupportedNetworks.ArbitrumGoerli]: 'https://api.thegraph.com/subgraphs/name/devey/rysk-opyngamma-arbitrum-goerli',
  [SupportedNetworks.Arbitrum]: 'https://api.thegraph.com/subgraphs/name/rysk-finance/rysk-opyn-gamma-arbitrum',
}

export const ZeroXEndpoint: { [key in SupportedNetworks]: { http: string; ws: string } } = {
  [SupportedNetworks.ArbitrumRinkeby]: {
    http: '',
    ws: '',
  },
  [SupportedNetworks.ArbitrumGoerli]: {
    http: '',
    ws: '',
  },
  [SupportedNetworks.Arbitrum]: {
    http: '',
    ws: '', // prevent useWebsocket error
  },
}
