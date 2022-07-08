import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { ContractContext, useContract } from "./ContractProvider";
import {
  addMilkBatch,
  addLot,
  addParticipant,
  addResult,
  addStep,
  ContractFunctions,
  removeParticipant,
} from "../components/ContractComponent/Interactions/interactionService";

export const ContractFunctionsContext = createContext<
  ContractFunctions | undefined
>(undefined);
ContractContext.displayName = "ContractContext";

export const useFunctions = (): ContractFunctions => {
  const functions = useContext(ContractFunctionsContext);
  if (!functions) {
    throw new Error("no functions");
  }
  return functions;
};

const FunctionsProvider = ({ children }: { children: ReactNode }) => {
  const contract = useContract();
  const [contractFunctions] = useState<ContractFunctions>({
    addMilkBatch: addMilkBatch(contract),
    addLot: addLot(contract),
    addStep: addStep(contract),
    addParticipant: addParticipant(contract),
    removeParticipant: removeParticipant(contract),
    addResult: addResult(contract),
  });

  return (
    <ContractFunctionsContext.Provider value={contractFunctions}>
      {children}
    </ContractFunctionsContext.Provider>
  );
};

export default FunctionsProvider;
