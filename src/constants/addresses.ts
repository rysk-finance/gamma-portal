import { SupportedNetworks } from './networks'
import { Token } from '../types/index'

type Tokens = {
  [key in SupportedNetworks]: Token[]
}

export const feeRecipient = '0x707D44b65BA91C42f212e8bB61f71cc69fBf8fd7'

const isPublic = process.env.REACT_APP_PUBLIC === 'true'
export const ZERO_ADDR = '0x0000000000000000000000000000000000000000'

export const eth: Token = {
  name: 'Ether',
  id: ZERO_ADDR,
  symbol: 'ETH',
  decimals: 18,
}

export const tokens: Tokens = {
  [SupportedNetworks.Mainnet]: [
    eth,
    {
      name: 'USDC',
      id: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      symbol: 'WETH',
      decimals: 18,
    },
    {
      name: 'Wrapped Bitcoin',
      id: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      symbol: 'WBTC',
      decimals: 8,
    },
    {
      name: 'yvUSDC',
      id: '0xa354f35829ae975e850e23e9615b11da1b3dc4de',
      symbol: 'yvUSDC',
      decimals: 6,
    },
  ],
  [SupportedNetworks.Goerli]: [
    eth,
    {
      name: 'USDC',
      id: '0xd87ba7a50b2e7e660f678a895e4b72e7cb4ccd9c',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
      symbol: 'WETH',
      decimals: 18,
    },
    {
      name: 'Wrapped Bitcoin',
      id: '0xc04b0d3107736c32e19f1c62b2af67be61d63a05',
      symbol: 'WBTC',
      decimals: 8,
    },
  ],
  [SupportedNetworks.Avalanche]: [
    {
      name: 'Wrapped AVAX',
      id: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      symbol: 'WAVAX',
      decimals: 18,
    },
    {
      name: 'USDC',
      id: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
      symbol: 'USDC',
      decimals: 6,
    },
  ],
  [SupportedNetworks.ArbitrumGoerli]: [
    eth,
    {
      name: 'USDC',
      id: '0x408c5755b5c7a0a28d851558ea3636cfc5b5b19d',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x3b3a1de07439eeb04492fa64a889ee25a130cdd3',
      symbol: 'WETH',
      decimals: 18,
    },
    {
      name: 'USDC',
      id: '0x6775842ae82bf2f0f987b10526768ad89d79536e',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x53320be2a35649e9b2a0f244f9e9474929d3b699',
      symbol: 'WETH',
      decimals: 18,
    }
  ],
  [SupportedNetworks.Arbitrum]: [
    {
      name: 'USDC',
      id: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      symbol: 'WETH',
      decimals: 18,
    },
    {
      name: 'Wrapped Bitcoin',
      id: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
      symbol: 'WBTC',
      decimals: 8,
    },
  ],
  [SupportedNetworks.Matic]: [
    {
      name: 'USDC',
      id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      symbol: 'USDC',
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      id: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      symbol: 'WETH',
      decimals: 18,
    },
    {
      name: '(POS) Wrapped Bitcoin',
      id: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      symbol: 'WBTC',
      decimals: 8,
    },
  ],
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
  [SupportedNetworks.Mainnet]: {
    controller: isPublic ? '0x4ccc2339F87F6c59c6893E1A678c2266cA58dC72' : '0xde158Fa7022f11707d4a3570eec4621B35d83829',
    calculator: isPublic ? '0xfaa67e3736572645B38AF7410B3E1006708e13F4' : '0x9a33230f59Cc7Cc9A084E0098A2b2934FC7BF7c0',
    factory: isPublic ? '0x7C06792Af1632E77cb27a558Dc0885338F4Bdf8E' : '0xE21127f47B365d3b1467746804f32BF8dCf47e26',
    addressBook: isPublic ? '0x1E31F2DCBad4dc572004Eae6355fB18F9615cBe4' : '0x57ADe7D5E9D2F45A07f8039Da7228ACC305fbeaF',
    pool: isPublic ? '0x5934807cC0654d46755eBd2848840b616256C6Ef' : '0x0Cb5BDBf1726f7CC720B21EA910ACeda9FdDf680',
    whitelist: isPublic ? '0xa5EA18ac6865f315ff5dD9f1a7fb1d41A30a6779' : '0x2244364c94a9FCb6f9ae3A4cF38f279706011882',
    zeroxExchange: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
  },
  [SupportedNetworks.Goerli]: {
    controller: '0x45fD0117d2eE5d70840880cCDcD3e03Dc328aef1',
    calculator: '0xAc536Eb464dF9284f9BEB02226329827Ed69Cd5D',
    factory: '0xd7A7ec5c82b847A3d30Fed3052f5C2bb42069317',
    addressBook: '0x234241E33909F3dA1fB2B9DC2bCa2BB5116f50eE',
    pool: '0xdE576696Ed6e64328355d5c87fC031e1198609F6',
    whitelist: '0x14235E3AEEFc155D6d48fA942ee84F15Cbd62a28',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
  [SupportedNetworks.Avalanche]: {
    controller: '0x9e3b94819aaF6de606C4Aa844E3215725b997064',
    calculator: '0xBD5A1Dc654B5476B94F81755E68d1C8f0AAc2AFd',
    factory: '0x25bC1cD298512885F0e452833198BCBb149f66a5',
    addressBook: '0xBCa124824326CF8aBc5E2E569FFf3A6f17110510',
    pool: '0xCCF6629aEaB734E621Cc59EBb0297196774fDb9D',
    whitelist: '0xe9963AFfc9a53e293c9bB547c52902071e6087c9',
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
  [SupportedNetworks.Matic]: {
    controller: '0x7a23c712bddde52b22d8ff52e4cdadb1bcb0b203',
    calculator: '0x5C16b2fae97ab59814F34632202D7DE69c45c057',
    factory: '0xedD70E045903D34fBA7302B5094D37EAceb1397c',
    addressBook: '0xa87ECDaEA486bB0baEeB77FF0630364772A6bbFE',
    pool: '0x30aE5DEBc9EdF60a23cD19494492b1ef37afA56d',
    whitelist: '0x9E435A5Cb48aeE2C156a8E541ee645e1c171d012',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
  [SupportedNetworks.ArbitrumRinkeby]: {
    controller: '0x2acb561509a082bf2c58ce86cd30df6c2c2017f6',
    calculator: '0xa91B46bDDB891fED2cEE626FB03E2929702951A6',
    factory: '0xcBcC61d56bb2cD6076E2268Ea788F51309FA253B',
    addressBook: '0x2d3E178FFd961BD8C0b035C926F9f2363a436DdC',
    pool: '0xDD91EB7C3822552D89a5Cb8D4166B1EB19A36Ff2',
    whitelist: '0x0cc0b0C984036e0942544F70A5708Ab16463cd31',
    zeroxExchange: '0x0000000000000000000000000000000000000000',
  },
}

export const blacklistOTokens: { [key in SupportedNetworks]: string[] } = {
  [SupportedNetworks.Mainnet]: [ZERO_ADDR],
  [SupportedNetworks.Goerli]: [ZERO_ADDR],
  [SupportedNetworks.Arbitrum]: [ZERO_ADDR],
  [SupportedNetworks.Avalanche]: [ZERO_ADDR],
  [SupportedNetworks.Matic]: [ZERO_ADDR],
  [SupportedNetworks.ArbitrumRinkeby]: [ZERO_ADDR],
  [SupportedNetworks.ArbitrumGoerli]: [ZERO_ADDR],
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
  [SupportedNetworks.Mainnet]: [
    {
      address: isPublic ? '0x8f7dd610c457fc7cb26b0f9db4e77581f94f70ac' : '0xa05157b27b7db2eb63bb0c11412b71e7de027f89',
      name: 'PayableProxy',
      description: 'Proxy contract to help mint calls with ETH instead of WETH',
      audited: true,
      author: 'Opyn',
    },
  ],
  [SupportedNetworks.Goerli]: [],
  [SupportedNetworks.Avalanche]: [],
  [SupportedNetworks.Arbitrum]: [
    {
      address: '0x91332064B2aB742eFBB0Ee416895dffB5fA85053',
      name: 'PayableProxy',
      description: 'Proxy contract to help mint calls with ETH instead of WETH',
      audited: true,
      author: 'Opyn',
    },
  ],
  [SupportedNetworks.Matic]: [
    {
      address: '0xb03036798511912359EDfff10c54E29db718f658',
      name: 'PayableProxy',
      description: 'Proxy contract to help mint calls with MATIC instead of WMATIC',
      audited: true,
      author: 'Opyn',
    },
  ],
  [SupportedNetworks.ArbitrumRinkeby]: [],
  [SupportedNetworks.ArbitrumGoerli]: [],
  [SupportedNetworks.Arbitrum]: [],
}

export const getETHAggregators = (networkId: SupportedNetworks) => {
  if (networkId === SupportedNetworks.Mainnet) return '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'
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
