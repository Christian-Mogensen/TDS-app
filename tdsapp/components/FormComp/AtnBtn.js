import React from 'react'

const AtnBtn = ({onClick, altText}) => {
    return (
        <p
        className="cursor-pointer py-1 rounded w-full text-center text-sm border-b border-r border-t border-white dark:border-gray-700 bg-gray-200 opacity-60 hover:opacity-100 dark:bg-gray-900 font-secondary transition-all"
        onClick={onClick}
      >
        {altText}
      </p>
    )
}

export default AtnBtn
