import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3Context } from "./web3Context";

const useENS = (address: string) => {
  const { provider } = useWeb3Context();
  const [ensName, setENSName] = useState<string | null>(null);

  useEffect(() => {
    const resolveENS = async () => {
      if (ethers.utils.isAddress(address)) {
        let ensName = await provider.lookupAddress(address);
        setENSName(ensName);
      }
    };
    resolveENS();
  }, [address]);

  return { ensName };
};

export default useENS;
