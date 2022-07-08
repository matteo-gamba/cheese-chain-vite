import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { Contract, ethers, Signer } from "ethers"
import { useWeb3React } from "@web3-react/core"
import { Provider } from "../utils/provider"
import CheeseChainArtifact from "../artifacts/contracts/CheeseChainV2.sol/CheeseChainV2.json"
import RegisterContract from "../components/ContractComponent/RegisterContract"
import { Role } from "../types"
import { useDispatch } from "react-redux"
import { login } from "../store"

export const ContractContext = createContext<Contract | undefined>(undefined)
ContractContext.displayName = "ContractContext"

export const useContract = (): Contract => {
  const contract = useContext(ContractContext)
  if (!contract) {
    throw new Error("contract missing")
  }
  return contract
}

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { library , account} = useWeb3React<Provider>()
  const [signer, setSigner] = useState<Signer>()
  const [contract, setContract] = useState<Contract | undefined>()
  const dispatch = useDispatch()

  useEffect((): void => {
    if (!library) {
      setSigner(undefined)
      return
    }

    setSigner(library.getSigner())
  }, [library])

  useEffect(() => {
    const envContract = import.meta.env.REACT_APP_CONTRACT

    if (!signer) return
    if (envContract === "" || envContract === undefined) return

    const CheeseChain = new ethers.Contract(
      envContract,
      CheeseChainArtifact.abi,
      signer
    )
    setContract(CheeseChain)
  }, [setContract, signer])

  useEffect(() => {
    const getParticipant = async (address: string) => {
      const admin = await contract?.administrator()
      const participant = await contract?.participants(address)
      if (admin === address) {
        dispatch(login({role: Role.Administrator}))
      } else {
        dispatch(login({role: participant.role, name: participant.name}))
      }
    }
    if (account && contract) {
      getParticipant(account)
    }
  },[dispatch, contract, account])

  return contract === undefined ? (
    <RegisterContract setContract={setContract} />
  ) : (
    <ContractContext.Provider value={contract}>
      {children}
    </ContractContext.Provider>
  )
}

export default ContractProvider
