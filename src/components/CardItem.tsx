import Button from "./Button"
import HeartButton from "./HeartButton"
import {StarIcon} from "@heroicons/react/solid"
import {ShoppingBagIcon} from "@heroicons/react/outline"
import {SyntheticEvent} from "react"

interface CardItemProps {
  image: string
  rate: number
  title: string
  address: string
  unitTime: number
  possiblePeople: number
  price: number
}

const onErrorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "/defaultImage.png"
}

const getArea = (address: string) => {
  const splitAddress = address.split(" ")
  return splitAddress[0] + " " + splitAddress[1]
}

const CardItem = ({image, rate, title, address, unitTime, possiblePeople, price}: CardItemProps) => {
  return (
    <div className="w-full aspect-[4/5] p-4 border rounded-sm">
      <div className="relative w-full aspect-[6/4] border rounded-sm overflow-hidden">
        <img src={image} onError={onErrorImg} className="w-full h-full object-cover hover:scale-125 duration-150" />
        <div className="absolute top-2 right-2">
          <HeartButton />
        </div>
      </div>
      <div className="flex flex-col justify-between aspect-[6/4] w-full">
        <div>
          <div className="mt-4 mb-2 flex justify-center items-center w-fit h-fit">
            <StarIcon className="fill-warning w-7 h-7" />
            <p className="text-xl">{rate}</p>
          </div>
          <p className="truncate text-xl font-bold">{title}</p>
          <p className="text-lg text-gray mt-2">{getArea(address)}</p>
          <p className="text-lg text-gray my-2">
            {unitTime}분 | 최대 {possiblePeople}명
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl shrink-0">
            <span className="font-bold">￦{price.toLocaleString()}~</span>/인
          </p>
          <Button type="button" className="px-3 py-3">
            <ShoppingBagIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardItem
