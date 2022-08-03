import tw from "tailwind-styled-components"

const Footer = () => {
  return(
    <FooterWrapper className="w-full h-sm absolute bottom-0 flex border-t-2">
      <TeamImage className="h-10" src="./teamLogo.png" alt="LeisureVation 로고"/>
      <InformationWrapper className="flex flex-row gap-10 pt-12 ml-4">
        <Introduction className="font-semibold text-xl underline" href="/">서비스 소개</Introduction>
        <TeamLink className="font-semibold text-xl underline" href="https://github.com/Team-I2E1" target="_blank" rel="noopener noreferer">Github 링크</TeamLink>
        <Guide className="font-semibold text-xl underline" href="/">사용 방법</Guide>
      </InformationWrapper>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = tw.footer`
`
const TeamImage = tw.img``

const InformationWrapper = tw.div``

const Introduction = tw.a``

const TeamLink = tw.a``

const Guide = tw.a``
