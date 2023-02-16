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
      id: '0x33a010E74A354bd784a62cca3A4047C1A84Ceeab',
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
  [SupportedNetworks.ArbitrumGoerli]: [
    eth,
    {
      name: 'USDC',
      id: '0x6775842ae82bf2f0f987b10526768ad89d79536e',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x53320bE2A35649E9B2a0f244f9E9474929d3B699',
      symbol: 'WETH',
      decimals: 18,
    },
  ],
  [SupportedNetworks.Arbitrum]: [
    {
      name: 'USDC',
      id: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      symbol: 'WETH',
      decimals: 18,
    },
  ],
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
    controller: '0x2acb561509a082bf2c58ce86cd30df6c2c2017f6',
    calculator: '0xa91B46bDDB891fED2cEE626FB03E2929702951A6',
    factory: '0xcBcC61d56bb2cD6076E2268Ea788F51309FA253B',
    addressBook: '0x2d3E178FFd961BD8C0b035C926F9f2363a436DdC',
    pool: '0xDD91EB7C3822552D89a5Cb8D4166B1EB19A36Ff2',
    whitelist: '0x0cc0b0C984036e0942544F70A5708Ab16463cd31',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
  [SupportedNetworks.ArbitrumGoerli]: {
    controller: '0x11a602a5F5D823c103bb8b7184e22391Aae5F4C2',
    calculator: '0xcD270e755C2653e806e16dD3f78E16C89B7a1c9e',
    factory: '0x7595F9c5B93f1478dC0836BdFCb87fF3A8970B10',
    addressBook: '0xd6e67bF0b1Cdb34C37f31A2652812CB30746a94A',
    pool: '0x0E0Ad3eA82EFAeAFb4476f5E8225b4746B88FD9f',
    whitelist: '0xf6651D140AEEE442E91A6BAe418c4993d0190370',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
  [SupportedNetworks.Arbitrum]: {
    controller: '0x594bD4eC29F7900AE29549c140Ac53b5240d4019',
    calculator: '0x749a3624ad2a001F935E3319743f53Ecc7466358',
    factory: '0xBa1952eCdbA02de66fCf73f29068e8cf072644ec',
    addressBook: '0xCa19F26c52b11186B4b1e76a662a14DA5149EA5a',
    pool: '0xb9F33349db1d0711d95c1198AcbA9511B8269626',
    whitelist: '0x84CaCC4103CeE1Da9b79f9Ed0Ed97414240D9c6F',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
}

export const blacklistOTokens: { [key in SupportedNetworks]: string[] } = {
  [SupportedNetworks.ArbitrumRinkeby]: [ZERO_ADDR],
  [SupportedNetworks.ArbitrumGoerli]: [ZERO_ADDR],
  [SupportedNetworks.Arbitrum]: [ZERO_ADDR],
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
  [SupportedNetworks.ArbitrumGoerli]: [],
  [SupportedNetworks.Arbitrum]: [],
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
