import React from 'react'

const Inputfield = ({type, placeholder, ref}) => {
    return (
        <input className="p-3 dark:text-white focus:border-b-4 border-current outline-none bg-transparent border-b-2" type={type} placeholder={placeholder} ref={ref} />
    )
}

export default Inputfield
