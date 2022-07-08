import React from "react"
import InteractionElement from "../InteractionElement"
import { addStep } from "./interactionService"
import { FormikConfig } from "formik"
import * as Yup from "yup"
import { useFunctions } from "../../../providers/FunctionsProvider"
import { FormSkeleton } from "../FormSkeleton"
import { FormField } from "../../../types"
import { useLocation } from "../../../hooks/useLocation"

export type AddStepValues = {
  lotNumber: string
}

const fields: Array<FormField> = [
  {
    __tag: "input",
    type: "number",
    name: "lotNumber",
    placeholder: "Lot number",
  },
]

export const AddStep = () => {
  const { addStep } = useFunctions()
  const { location } = useLocation()
  const formId = "addStep"

  const formikConfig: FormikConfig<AddStepValues> = {
    initialValues: {
      lotNumber: "",
    },
    onSubmit: async (values) => {
      await addStep(parseInt(values.lotNumber), location)
    },
    validationSchema: Yup.object({
      lotNumber: Yup.number().required("Required"),
    }),
  }

  return (
    <InteractionElement title={"Add Step"} containsForm={true} formId={formId}>
      <FormSkeleton formikConfig={formikConfig} fields={fields} id={formId} />
    </InteractionElement>
  )
}
