import React, { ReactNode, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { GlobalThemeProps } from "./ConnectWallet"
import { FaUser } from "react-icons/fa"
import { useSelector } from "react-redux"
import { selectUser } from "../store"
import { Role, roleToString } from "../types"

export const UserInfo = () => {
  const [open, setOpen] = useState<boolean>(false)
  const user = useSelector(selectUser)

  const displayUser: ReactNode = useMemo(() => {
    return (
      <div>
        {user
          ? user?.role === Role.Administrator
            ? `Administrator`
            : `${user?.name} (${roleToString[user.role]})`
          : ""}
      </div>
    )
  }, [user])

  return (
    <Wrapper onClick={() => setOpen((v) => !v)}>
      {open ? <FaUser /> : <InfoWrapper>{displayUser}</InfoWrapper>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  background-color: ${({ theme }: GlobalThemeProps) => theme.highlight};
  border-radius: 16px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  :hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.highlightBorder};
  }
`

const InfoWrapper = styled.div`
  display: flex;
`
