import React from "react"
import styled from "styled-components"
import { User } from "../types"
import { ConnectWallet } from "./ConnectWallet"
import ThemeToggler from "./ThemeToggler"
import { UserInfo } from "./UserInfo"

const NavWrapper = styled.div`
  flex: 0 0 88px;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1``

type ThemeTogglerProps = {
  themeToggler: () => void
}

const Navbar = ({ themeToggler }: ThemeTogglerProps) => {
  return (
    <NavWrapper>
      <Title>Cheese Chain Project</Title>
      <div style={{ display: "flex", gap: 8 }}>
        <UserInfo />
        <ConnectWallet />
        <ThemeToggler themeToggler={themeToggler} />
      </div>
    </NavWrapper>
  )
}

export default Navbar
