import Image from 'next/image'


const ImageComponent = ({source, alt, filosof}) => {
    return (
        <figure className="relative">
        <Image
          className="img-styling"
          src={source}
          alt={`${alt} image`}
        />
        <figcaption className="absolute left-5 bottom-5 z-10 imgText font-secondary text-white">
          {filosof}
        </figcaption>
      </figure>
    )
}

export default ImageComponent
