import React from 'react'
import { CgClose } from 'react-icons/cg'

const ErrorCom = () => {
  return (
    <div className="fixed w-full top-16 flex justify-between ps-4 pr-5 items-center p-2 bg-red-500">
          Something went wrong please try later.
          <CgClose />
        </div>
  )
}

export default ErrorCom