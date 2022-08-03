import Header from "src/components/Header"
import Footer from "src/components/Footer"
import tw from "tailwind-styled-components/dist/tailwind"

const Main = () => {

  return (
    <div>
      <Header userImage={"https://moplqfgeemqv2103108.cdn.ntruss.com/service/159880024_03cfeb717bb6c45aa65d89555ec3f631.jpg?type=m&w=900&h=900&autorotate=true&quality=90"}/>
      <Div></Div>
      <Footer/>
    </div>
  )
}


export default Main

const Div = tw.div`
  h-sm
`

