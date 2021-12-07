
const MainHeader = ({title, date}) => {
    return (
        <header className="flex flex-col-reverse text-center gap-3 pb-10 pt-5 border-b dark:border-gray-700">
        <h2 className="text-xl">{title}</h2>
        <h3 className="text-5xl text-left leading">{date}</h3>
      </header>
    )
}

export default MainHeader
