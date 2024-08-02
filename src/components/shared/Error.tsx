import { memo } from 'react'

const Error = ({ error }: { error: string }) => {
  return (
    <div className="text-center mt-4 text-red-500">{error}</div>
  )
}

export default memo(Error);