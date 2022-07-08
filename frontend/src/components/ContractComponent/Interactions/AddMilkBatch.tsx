import InteractionElement from "../InteractionElement"
import React, { useContext } from "react"
import { useFunctions } from "../../../providers/FunctionsProvider"
import { LocationContext } from "../../../providers/LocationProvider"

export const AddMilkBatch = () => {
  const { addMilkBatch } = useFunctions()
  const location = useContext(LocationContext)

  return (
    <InteractionElement
      containsForm={false}
      title={"Add Milk Batch"}
      buttonFunction={() => {
        if (!location) {
          alert("Please Allow location")
          return
        }
        addMilkBatch(location)
      }}
    />
  )
}
