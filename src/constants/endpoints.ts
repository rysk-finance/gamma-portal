import { SupportedNetworks } from './networks'

type graphEndPointType = {
  [key in SupportedNetworks]: string
}

export const networkToProvider: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.ArbitrumRinkeby]: `https://rinkeby.arbitrum.io/rpc`,
  // [SupportedNetworks.Arbitrum]: 'https://arb1.arbitrum.io/rpc',
}

export const networkIdToName: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.ArbitrumRinkeby]: `Arbitrum Testnet`,
  // [SupportedNetworks.Arbitrum]: 'Arbitrum',
}

export const subgraph: graphEndPointType = {
  [SupportedNetworks.ArbitrumRinkeby]: 'https://thegraph.com/hosted-service/subgraph/ugolino/ryskopyntestnet',
  // [SupportedNetworks.Arbitrum]: '',
}

export const ZeroXEndpoint: { [key in SupportedNetworks]: { http: string; ws: string } } = {
  [SupportedNetworks.ArbitrumRinkeby]: {
    http: '',
    ws: '',
  },
  // [SupportedNetworks.Arbitrum]: {
  //   http: '',
  //   ws: '', // prevent useWebsocket error
  // },
}
