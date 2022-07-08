import InteractionElement from "../InteractionElement"
import React from "react"
import { useFunctions } from "../../../providers/FunctionsProvider"
import { FormikConfig } from "formik"
import * as Yup from "yup"
import { FormSkeleton } from "../FormSkeleton"
import { FormField } from "../../../types"

export type AddStepValues = {
  milkBatchId: string
}

const fields: Array<FormField> = [
  {
    __tag: "input",
    type: "number",
    name: "milkBatchId",
    placeholder: "Milk Batch Id",
  },
]

export const AddLot = () => {
  const { addLot } = useFunctions()
  const formId = "addLot"

  const formikConfig: FormikConfig<AddStepValues> = {
    initialValues: {
      milkBatchId: "",
    },
    onSubmit: async (values) => {
      await addLot(parseInt(values.milkBatchId))
    },
    validationSchema: Yup.object({
      milkBatchId: Yup.number().required("Required"),
    }),
  }

  return (
    <InteractionElement title={"Add Lot"} containsForm={true} formId={formId}>
      <FormSkeleton formikConfig={formikConfig} fields={fields} id={formId} />
    </InteractionElement>
  )
}
