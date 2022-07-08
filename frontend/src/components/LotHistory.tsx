import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalThemeProps } from "./ConnectWallet";
import { format } from "date-fns";
import { Wrapper } from "./ContractComponent/styles";
import { FormikConfig } from "formik";
import * as Yup from "yup";
import InteractionElement from "./ContractComponent/InteractionElement";
import { useContract } from "../providers/ContractProvider";
import { FormSkeleton } from "./ContractComponent/FormSkeleton";
import { FormField, Lot, Participant, Step } from "../types";

type GetLotFormValues = {
  lotNumber: string;
};

const fields: Array<FormField> = [
  {
    __tag: "input",
    type: "number",
    name: "lotNumber",
    placeholder: "Lot number",
  },
];

export const LotHistory = () => {
  const [steps, setSteps] = useState<Array<Step>>();
  const [admin, setAdmin] = useState<string>("");
  const [lot, setLot] = useState<Lot>();
  const contract = useContract();

  useEffect(() => {
    contract.administrator().then((res: string) => setAdmin(res));
  }, [contract]);

  const getDetails = async (lotNumber: number) => {
    const steps = [];
    const lot = await contract.lots(lotNumber);
    setLot(lot);
    let lastStep = lot.lastStep.toNumber();
    while (lastStep !== 0) {
      const step = await contract.steps(lastStep);
      console.log(step);
      lastStep = step.previousStep.toNumber();
      const stepObject = {
        owner: step.owner,
        timestamp: step.timestamp.toNumber(),
      };
      steps.push(stepObject);
    }
    const mapped = steps.map(async (step) => {
      if (step.owner === admin) {
        return {
          ...step,
          owner: {
            name: "administrator",
            role: -1,
            owner: step.owner,
          },
        };
      } else {
        const participant: Participant = await contract.participants(
          step.owner
        );
        return {
          ...step,
          owner: {
            name: participant.name,
            role: participant.role,
            owner: participant.owner,
          },
        };
      }
    });
    Promise.all(mapped).then((res) => setSteps(res.reverse()));
  };

  const formId = "getLotDetails";

  const formikConfig: FormikConfig<GetLotFormValues> = {
    initialValues: {
      lotNumber: "",
    },
    onSubmit: async (values) => {
      await getDetails(parseInt(values.lotNumber));
    },
    validationSchema: Yup.object({
      lotNumber: Yup.number().required("Required"),
    }),
  };

  return (
    <>
      <Wrapper style={{ marginTop: 40 }}>
        <InteractionElement
          title={"Get Lot Details"}
          foldable={false}
          containsForm={true}
          formId={formId}
        >
          <FormSkeleton
            formikConfig={formikConfig}
            fields={fields}
            id={formId}
          />
        </InteractionElement>
      </Wrapper>
      {lot && lot.testResult.timestamp.toNumber() === 0 && (
        <div style={{ marginTop: 40 }}>Lab Test outstanding</div>
      )}
      {lot && lot.testResult.timestamp.toNumber() !== 0 && (
        <>
          <div style={{ marginTop: 40 }}>
            Test Result: {lot.testResult.result ? "Positive" : "Negative"}
          </div>
          <div>
            {"Taken on: "}
            {format(
              new Date(parseInt(lot.testResult.timestamp.toNumber()) * 1000),
              "MM/dd/yyyy"
            )}
          </div>
        </>
      )}
      <StepsWrapper>
        {steps &&
          steps.map((step) => {
            return (
              <HistoryWrapper>
                <HistoryBlock date={step.timestamp} owner={step.owner} />
              </HistoryWrapper>
            );
          })}
      </StepsWrapper>
    </>
  );
};

const HistoryBlock = ({
  date,
  owner,
}: {
  date: string;
  owner: Participant;
}) => {
  return (
    <HistoryBlockWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {owner.name}
      </div>
      <div>{`${owner.owner.substring(0, 6)}...${owner.owner.substring(
        owner.owner.length - 4
      )}`}</div>
      <div>{format(new Date(parseInt(date) * 1000), "MM/dd/yyyy")}</div>
      <div>{format(new Date(parseInt(date) * 1000), "HH:MM")}</div>
    </HistoryBlockWrapper>
  );
};

const HistoryWrapper = styled.div`
  background-color: ${({ theme }: GlobalThemeProps) => theme.highlight};
  padding: 8px;
  margin-top: 24px;
  border-radius: 12px;
`;

const HistoryBlockWrapper = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 12px;
  background-color: ${({ theme }: GlobalThemeProps) => theme.foreground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StepsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
