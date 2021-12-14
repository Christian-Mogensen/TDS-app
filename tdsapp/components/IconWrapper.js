import IconButton from "../components/IconButton";
import ShareIcon from "../components/ShareIcon";
import ArchiveIcon from "../components/ArchiveIcon";
import BookmarkIcon from "./BookmarkIcon";
const IconWrapper = () => {
    return (
        <div className="flex justify-end gap-5 py-2 dark:bg-gray-900 dark:bg-[var(--gradient-bg-right)] border-t dark:border-gray-700 px-5">
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <ArchiveIcon />
        </IconButton>
      </div>
    )
}

export default IconWrapper
