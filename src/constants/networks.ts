// import Ethereum from '../imgs/Ethereum.png'
// import AVAX from '../imgs/WAVAX.webp'
import Arbitrum from '../imgs/Arbitrum.svg'

export enum SupportedNetworks {
  // Mainnet = 1,
  // Ropsten = 3,
  // Kovan = 42,
  // Matic = 137,
  // Avalanche = 43114,
  Arbitrum = 42161,
  ArbitrumRinkeby = 421611,
  ArbitrumGoerli = 421613,
}

export const networkIdToExplorer = {
  [SupportedNetworks.ArbitrumRinkeby]: 'https://testnet.arbiscan.io/',
  [SupportedNetworks.ArbitrumGoerli]: 'https://goerli.arbiscan.io/',
  [SupportedNetworks.Arbitrum]: 'https://arbiscan.io/',
}

export const networkToLogo: { [key in SupportedNetworks]: string } = {
  [SupportedNetworks.ArbitrumRinkeby]: Arbitrum,
  [SupportedNetworks.ArbitrumGoerli]: Arbitrum,
  [SupportedNetworks.Arbitrum]: Arbitrum,
}

export const isMainnet: { [key in SupportedNetworks]: boolean } = {
  [SupportedNetworks.ArbitrumRinkeby]: false,
  [SupportedNetworks.ArbitrumGoerli]: false,
  [SupportedNetworks.Arbitrum]: true,
}

export const isSupportedByMetaMask = (network: SupportedNetworks) => {
  return false
}

export const networkToTokenConfig = (networkId: SupportedNetworks) => {
  if (isSupportedByMetaMask(networkId)) return undefined
  if (networkId !== SupportedNetworks.Arbitrum)
    return {
      name: 'Arbitrum Testnet',
      symbol: 'AETH',
      decimals: 18,
    }
  else
    return {
      name: 'Arbitrum ETH',
      symbol: 'AETH',
      decimals: 18,
    }
}
