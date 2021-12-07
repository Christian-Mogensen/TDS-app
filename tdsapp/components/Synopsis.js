
const Synopsis = ({para}) => {
    return (
        <div className="leading-loose px-3 pb-5">
        {para.map((paragraf, index) => (
          <p
            className="first-of-type:first-letter:text-4xl first-of-type:first-letter:font-bold first-of-type:first-letter:float-left first-of-type:first-letter:mr-2 pb-5"
            key={index}
          >
            {paragraf.para}
          </p>
        ))}
      </div>
    )
}

export default Synopsis
