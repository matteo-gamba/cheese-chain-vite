import { Contract } from 'ethers'
import { serializeError } from 'eth-rpc-errors'
import { AddParticipantFormValues } from './AddParticipant'
import { Coordinates, getLocation } from '../../../utils/location'

export type ContractFunctions = {
  addMilkBatch: (coordinates?: Coordinates) => Promise<void>
  addLot: (milkBatchId: number) => Promise<void>
  addStep: (lotNumber: number, coordinates?: Coordinates) => Promise<void>
  addParticipant: ({
    name,
    role,
    address,
  }: {
    name: string
    role: Role
    address: string
  }) => Promise<void>
  removeParticipant: (address: string) => Promise<void>
  addResult: (lotNumber: number, result: boolean) => Promise<void>
}

// add milk Batch

export const addMilkBatch = (contract: Contract) => async (
  location?: Coordinates,
) => {
  try {
    location = location ? location : await getLocation()
    console.log('adding milk batch')
    const tx = await contract.addMilkBatch(location)
    const receipt = await tx.wait()
    console.log(receipt)
  } catch (e) {
    window.alert(serializeError(e).message)
  }
}

// add Lot

export const addLot = (contract: Contract) => async (milkBatchId: number) => {
  try {
    console.log('adding lot')
    const tx = await contract.addLot([milkBatchId])
    const receipt = await tx.wait()
    console.log(receipt)
  } catch (e) {
    window.alert(serializeError(e).message)
  }
}

// add step

export type AddStepFunction = (lotNumber: number) => Promise<void>

export const addStep = (contract: Contract) => async (
  lotNumber: number,
  coordinates?: Coordinates,
) => {
  try {
    console.log('adding step')
    coordinates = coordinates ? coordinates : await getLocation()
    const tx = await contract?.addStep(lotNumber, coordinates)
    const receipt = await tx.wait()
  } catch (e) {
    window.alert(serializeError(e).message)
  }
}

// add Participant

export enum Role {
  ViewOnly,
  Basic,
  Laboratory,
  MilkProducer,
  Administrator,
}

export const roleNames = {
  [Role.ViewOnly]: 'View Only',
  [Role.Basic]: 'Basic',
  [Role.Laboratory]: 'Laboratory',
  [Role.MilkProducer]: 'Milk Producer',
}

export const numberToRole: Record<number, Role> = {
  0: Role.ViewOnly,
  1: Role.Basic,
  2: Role.Laboratory,
  3: Role.MilkProducer,
}

export const addParticipant = (contract: Contract) => async ({
  name,
  address,
  role,
}: AddParticipantFormValues) => {
  console.log('adding participant')

  try {
    const tx = await contract.addParticipant({
      name,
      role: role,
      owner: address,
    })
    console.log(tx)
    const receipt = await tx.wait()
    console.log(receipt)
  } catch (e) {
    window.alert(e)
  }
}

// add Lab Result
export type AddResultFunction = (
  lotNumber: number,
  result: boolean,
  contract: Contract,
) => Promise<void>

export const addResult = (contract: Contract) => async (
  lotNumber: number,
  result: boolean,
) => {
  console.log('adding Result')
  console.log('result: ', result)

  try {
    const tx = await contract.addLabResult(lotNumber, result)
    console.log(tx)
    const receipt = await tx.wait()
    console.log(receipt)
  } catch (e) {
    window.alert(serializeError(e).message)
  }
}

// remove participant

export type RemoveParticipantFunction = (
  address: string,
  contract: Contract,
) => Promise<void>

export const removeParticipant = (contract: Contract) => async (
  address: string,
) => {
  console.log('removing participant')

  try {
    const tx = await contract.removeParticipant(address)
    console.log(tx)
    const receipt = await tx.wait()
    console.log(receipt)
  } catch (e) {
    window.alert(serializeError(e).message)
  }
}
