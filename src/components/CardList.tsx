import CardItem from "./CardItem"

export interface Post {
  id: string
  category: "activity" | "space"
  title: string
  description: string
  address: string
  position: {lat: number; log: number}
  reviews: string[]
  shopName: string
  price: number
  possiblePeople: number
  shopImage: string[]
  rate: number
  businessHour: {open: string; close: string}
  unitTime: number
  unavailable: {
    date: string
    time: string[]
  }[]
  postLikes: number
}

const CardList = ({posts}: {posts: Post[]}) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 mx-8">
      {posts.map((post) => (
        <CardItem
          key={post["id"]}
          image={post["shopImage"][0]}
          rate={post["rate"]}
          title={post["title"]}
          address={post["address"]}
          unitTime={post["unitTime"]}
          possiblePeople={post["possiblePeople"]}
          price={post["price"]}
        ></CardItem>
      ))}
    </div>
  )
}

export default CardList
