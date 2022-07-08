import React, { ReactElement } from "react";
import { useWeb3React } from "@web3-react/core";
import { Provider } from "../../utils/provider";
import styled from "styled-components";
import { GlobalThemeProps } from "./index";

const Networks: Record<number, string> = {
  1: "Ethereum",
  3: "Ropsten",
  4: "Rinkeby",
  42: "Kovan",
  31337: "Hardhat",
};

export const ChainDisplayer = (): ReactElement => {
  const { chainId } = useWeb3React<Provider>();

  return (
    <Wrapper>
      <img
        style={{ height: 20, width: 20, marginRight: 8 }}
        src={"/ETHLogo.png"}
        alt={"ETHLogo"}
      />
      <span>{chainId && Networks[chainId]}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }: GlobalThemeProps) => theme.highlight};
  border-radius: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
