const FormLabel = ({children}) => {
    return (
        <label className="absolute z-[9] text-xl top-1/2 -translate-y-1/2 left-3 text-current first-letter:capitalize labelanimation">{children}</label>
    )
}

export default FormLabel
