import { ReactNode, memo } from 'react'

interface UserFieldProps<T> {
    label: string,
    field: T,
    defaultValue: T,
}

const UserField = <T extends ReactNode>({ label, field, defaultValue }: UserFieldProps<T>) => {
  return (
    <p><strong>{label}:</strong> {field || defaultValue}</p>
  )
}

export default memo(UserField);