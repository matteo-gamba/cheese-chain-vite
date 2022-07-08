import React, { useEffect, useState } from "react"
import { Wrapper } from "./styles"
import { AddLot } from "./Interactions/AddLot"
import { AddStep } from "./Interactions/AddStep"
import { AddResult } from "./Interactions/AddResult"
import { AddParticipant } from "./Interactions/AddParticipant"
import { RemoveParticipant } from "./Interactions/RemoveParticipant"
import { AddMilkBatch } from "./Interactions/AddMilkBatch"
import { useWeb3React } from "@web3-react/core"
import { Provider } from "../../utils/provider"
import { useContract } from "../../providers/ContractProvider"
import { numberToRole, Role } from "./Interactions/interactionService"

const isMilkProducer = (role: Role) => {
  return role === Role.MilkProducer || role === Role.Administrator
}

const isBasic = (role: Role) => {
  return role === Role.Basic || role === Role.Administrator
}

const isLab = (role: Role) => {
  return role === Role.Laboratory || role === Role.Administrator
}

const isAdmin = (role: Role) => {
  return role === Role.Administrator
}

const ContractInteractions = () => {
  const { account } = useWeb3React<Provider>()
  const contract = useContract()
  const [userRole, setUserRole] = useState<Role>()

  useEffect(() => {
    const getParticipant = async (address: string) => {
      const admin = await contract.administrator()
      const participant = await contract.participants(address)
      if (admin === address) {
        setUserRole(Role.Administrator)
      } else {
        setUserRole(numberToRole[participant.role])
      }
      console.log(numberToRole[participant.role])
    }
    if (account) {
      getParticipant(account)
    }
  }, [account, contract])

  return account && userRole ? (
    <Wrapper>
      {isMilkProducer(userRole) && <AddMilkBatch />}
      {isBasic(userRole) && (
        <>
          <AddLot />
          <AddStep />
        </>
      )}
      {isLab(userRole) && <AddResult />}
      {isAdmin(userRole) && (
        <>
          <AddParticipant />
          <RemoveParticipant />
        </>
      )}
    </Wrapper>
  ) : (
    <></>
  )
}

export default ContractInteractions
