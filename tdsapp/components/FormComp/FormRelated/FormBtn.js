import React from 'react'

const FormBtn = ({btnIcon, onClick}) => {
    return (
        <button
        onClick={onClick}
        className="bg-green-500 w-full py-3 rounded self-end text-white shadow-sm"
        type="submit"
      >
        {btnIcon}
      </button>
    )
}

export default FormBtn
