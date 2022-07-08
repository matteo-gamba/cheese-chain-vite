export type SelectOption = {
    value: string | number
    label: string
  }
  
  export type FormInputField = {
    __tag: 'input'
    type: 'number' | 'text'
    name: string
    placeholder: string
  }
  
  export type FormSelectField = {
    __tag: 'select'
    label: string
    name: string
    options: Array<SelectOption>
  }
  
  export type FormField = FormInputField | FormSelectField
  
  export type Lot = {
    testResult: {
      result: boolean
      timestamp: any
    }
    lastStep: number
  }
  
  export type Participant = {
    name: string
    role: number
    owner: string
  }
  
  export type Step = {
    owner: Participant
    timestamp: string
  }
  
  export enum Role {
    ViewOnly,
    Basic,
    Laboratory,
    MilkProducer,
    Administrator,
  }

  export const roleToString = {
    [Role.ViewOnly]: 'View Only',
    [Role.Basic]: 'Basic',
    [Role.Laboratory]: 'Laboratory',
    [Role.MilkProducer]: 'MilkProducer',
  }
  
  export type User = {
    name?: string
    role: Role
  }
  