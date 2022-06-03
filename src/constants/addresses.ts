import { SupportedNetworks } from './networks'
import { Token } from '../types/index'

type Tokens = {
  [key in SupportedNetworks]: Token[]
}

export const ZERO_ADDR = '0x0000000000000000000000000000000000000000'

export const eth: Token = {
  name: 'Ether',
  id: ZERO_ADDR,
  symbol: 'ETH',
  decimals: 18,
}

export const tokens: Tokens = {
  [SupportedNetworks.ArbitrumRinkeby]: [
    eth,
    {
      name: 'USDC',
      id: '0x3c6c9b6b41b9e0d82fed45d9502edffd5ed3d737',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0xe32513090f05ed2ee5f3c5819c9cce6d020fefe7',
      symbol: 'WETH',
      decimals: 18,
    },
  ],
  // [SupportedNetworks.Arbitrum]: [
  //   {
  //     name: 'USDC',
  //     id: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  //     symbol: 'USDC',
  //     decimals: 6,
  //   },
  //   {
  //     name: 'Wrapped Ether',
  //     id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  //     symbol: 'WETH',
  //     decimals: 18,
  //   },
  //   {
  //     name: 'Wrapped Bitcoin',
  //     id: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  //     symbol: 'WBTC',
  //     decimals: 8,
  //   },
  // ],
}

type SystemAddresses = {
  [key in SupportedNetworks]: {
    controller: string
    calculator: string
    factory: string
    addressBook: string
    whitelist: string
    pool: string
    zeroxExchange: string
  }
}

export const addresses: SystemAddresses = {
  [SupportedNetworks.ArbitrumRinkeby]: {
    controller: '0xb2923CAbbC7dd78e9573D1D6d755E75dCB49CE47',
    calculator: '0xa91B46bDDB891fED2cEE626FB03E2929702951A6',
    factory: '0xcBcC61d56bb2cD6076E2268Ea788F51309FA253B',
    addressBook: '0x2d3E178FFd961BD8C0b035C926F9f2363a436DdC',
    pool: '0xDD91EB7C3822552D89a5Cb8D4166B1EB19A36Ff2',
    whitelist: '0x0cc0b0C984036e0942544F70A5708Ab16463cd31',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
  // [SupportedNetworks.Arbitrum]: {
  //   controller: '',
  //   calculator: '',
  //   factory: '',
  //   addressBook: '',
  //   pool: '',
  //   whitelist: '',
  //   zeroxExchange: '0x0000000000000000000000000000000000000000',
  // },
}

export const blacklistOTokens: { [key in SupportedNetworks]: string[] } = {
  [SupportedNetworks.ArbitrumRinkeby]: [ZERO_ADDR],
  // [SupportedNetworks.Arbitrum]: [ZERO_ADDR],
}

type KnownOperator = {
  address: string
  name: string
  description: string
  author: string
  audited: boolean
}

export const knownOperators: {
  [key in SupportedNetworks]: KnownOperator[]
} = {
  [SupportedNetworks.ArbitrumRinkeby]: [],
  // [SupportedNetworks.Arbitrum]: [],
}

export const getETHAggregators = (networkId: SupportedNetworks) => {
  return ''
}

export const getPrimaryPaymentToken = (networkId: SupportedNetworks) => {
  return tokens[networkId].find(t => t.symbol === 'USDC') as Token
}

export const getUSDC = (networkId: SupportedNetworks) => {
  return tokens[networkId].find(t => t.symbol === 'USDC') || eth
}

export const getWeth = (networkId: SupportedNetworks) => {
  // return the wrapped native token
  return tokens[networkId].find(t => t.symbol === 'WETH' || t.symbol === 'WAVAX') as Token
}

export const getPayableProxyAddr = (networkId: SupportedNetworks) => {
  return knownOperators[networkId].find(o => o.name === 'PayableProxy')
}
