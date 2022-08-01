import {useState} from "react"
import {HeartIcon} from "@heroicons/react/solid"

const HeartButton = () => {
  const [isLike, setIsLike] = useState(false)

  const onClick = () => {
    setIsLike(!isLike)
  }

  return (
    <HeartIcon
      className={`cursor-pointer stroke-1 stroke-base-100 active:scale-95 duration-100 w-10 h-10 ${
        isLike ? "fill-red" : "fill-black-rgba"
      }`}
      onClick={onClick}
    />
  )
}

export default HeartButton
