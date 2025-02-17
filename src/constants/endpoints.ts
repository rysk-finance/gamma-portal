import { SupportedNetworks } from './networks'

type graphEndPointType = {
  [key in SupportedNetworks]: string
}

const isPublic = process.env.REACT_APP_PUBLIC === 'true'
const INFURA_KEY = process.env.REACT_APP_INFURA_KEY

export const mainnetProvider = `https://mainnet.infura.io/v3/${INFURA_KEY}`

export const networkToProvider: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.Mainnet]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedNetworks.Goerli]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedNetworks.Avalanche]: 'https://api.avax.network/ext/bc/C/rpc',
  [SupportedNetworks.ArbitrumGoerli]: `https://endpoints.omniatech.io/v1/arbitrum/goerli/public`,
  [SupportedNetworks.Arbitrum]: 'https://arb1.arbitrum.io/rpc',
  [SupportedNetworks.Matic]: 'https://rpc-mainnet.maticvigil.com/',
  [SupportedNetworks.ArbitrumRinkeby]: `https://rinkeby.arbitrum.io/rpc`,
}

export const networkIdToName: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.Mainnet]: `Mainnet`,
  [SupportedNetworks.Goerli]: `Goerli`,
  [SupportedNetworks.Avalanche]: 'Avalanche',
  [SupportedNetworks.Arbitrum]: 'Arbitrum',
  [SupportedNetworks.Matic]: 'Polygon',
  [SupportedNetworks.ArbitrumRinkeby]: `Arbitrum Testnet`,
  [SupportedNetworks.ArbitrumGoerli]: `Arbitrum Testnet Goerli`,
}

export const subgraph: graphEndPointType = {
  [SupportedNetworks.Mainnet]: isPublic
    ? 'https://api.thegraph.com/subgraphs/name/opynfinance/gamma-mainnet'
    : 'https://api.thegraph.com/subgraphs/name/opynfinance/playground',
  [SupportedNetworks.Goerli]: 'https://api.thegraph.com/subgraphs/name/opynfinance/gamma-goerli',
  [SupportedNetworks.Avalanche]: 'https://api.thegraph.com/subgraphs/name/opynfinance/gamma-avax',
  [SupportedNetworks.Arbitrum]: process.env.REACT_APP_SUBGRAPH_URL,
  [SupportedNetworks.Matic]: 'https://api.thegraph.com/subgraphs/name/opynfinance/gamma-matic',
  [SupportedNetworks.ArbitrumRinkeby]: 'https://api.thegraph.com/subgraphs/name/ugolino/ryskopyntestnet',
  [SupportedNetworks.ArbitrumGoerli]: process.env.REACT_APP_SUBGRAPH_URL,
}

export const ZeroXEndpoint: { [key in SupportedNetworks]: { http: string; ws: string } } = {
  [SupportedNetworks.Mainnet]: {
    http: 'https://api.0x.org/',
    ws: 'wss://api.0x.org/orderbook/v1',
  },
  [SupportedNetworks.Goerli]: {
    http: '',
    ws: 'wss://api.0x.org/orderbook/v1', // prevent useWebsocket error
  },
  [SupportedNetworks.Arbitrum]: {
    http: '',
    ws: 'wss://api.0x.org/orderbook/v1', // prevent useWebsocket error
  },
  [SupportedNetworks.Avalanche]: {
    http: 'https://avalanche.api.0x.org/',
    ws: 'wss://api.0x.org/orderbook/v1', // prevent useWebsocket error
  },
  [SupportedNetworks.Matic]: {
    http: '',
    ws: 'wss://api.0x.org/orderbook/v1', // prevent useWebsocket error
  },
  [SupportedNetworks.ArbitrumRinkeby]: {
    http: '',
    ws: '',
  },
  [SupportedNetworks.ArbitrumGoerli]: {
    http: '',
    ws: '',
  },
}
