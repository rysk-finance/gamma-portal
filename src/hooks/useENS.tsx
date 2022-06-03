import { providers } from 'ethers'
import { useEffect, useState } from 'react'
import { mainnetProvider } from '../constants'
import { useConnectedWallet } from '../contexts/wallet'

export function useENS(address: string | null | undefined) {
  const { networkId } = useConnectedWallet()

  const [ensName, setENSName] = useState<string | null>(null)

  useEffect(() => {
    async function resolveENS() {
      if (address) {
        const provider = await new providers.JsonRpcProvider(mainnetProvider)
        const name = await provider.lookupAddress(address)
        if (name) setENSName(name)
      }
    }
    resolveENS()
  }, [address, networkId])

  return { ensName }
}
