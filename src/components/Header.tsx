import tw from "tailwind-styled-components"

interface Header {
  userImage: string
}

const Header = ({userImage = "https://moplqfgeemqv2103108.cdn.ntruss.com/service/159880024_03cfeb717bb6c45aa65d89555ec3f631.jpg?type=m&w=900&h=900&autorotate=true&quality=90"}: Header) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImage src="./logo.png"/>
      </LogoWrapper>
      <ImageWrapper>
        <Image className="w-xs h-xs rounded-full ring-2 ring-info" alt="프로필 사진" src={userImage}/>
      </ImageWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = tw.header`
  w-full
  bg-base-100
  inline-block
  h-5
  absolute
  inset-x-0 
  top-0
  drop-shadow-md
  flex
`

const LogoWrapper = tw.div`
  h-5
  inline-block
  ml-2
  cursor-pointer	
`

const LogoImage = tw.img`
  h-5
`

const ImageWrapper = tw.div`
  mt-2
  absolute
  top-0
  right-6
  cursor-pointer	
`

const Image = tw.img`
`


export default Header

