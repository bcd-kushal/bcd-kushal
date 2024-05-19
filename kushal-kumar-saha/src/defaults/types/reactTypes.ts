import React, { SetStateAction } from "react"

export type ClassNameType               = string 
export type UseRefType<T>               = React.RefObject<T>
export type SetStateType<T>             = React.Dispatch<SetStateAction<T>>
export type ChildrenType                = Readonly<React.ReactNode>
export type FormSubmitType              = React.FormEvent<HTMLFormElement>