import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

export function WalletConnectComponent({ handleConnect }) {
  const { isConnected, address, chain } = useAccount();

  useEffect(() => {
    if (isConnected && address && chain) {
      handleConnect(address, chain.name, isConnected);
    }
  }, [isConnected, address, chain]); 

  return (
    <div className="flex gap-5">
      <w3m-button balance='hide' />
      <w3m-network-button />
    </div>
  );
}
