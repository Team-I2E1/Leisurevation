import {MouseEventHandler} from "react"
import {theme} from "tailwind.config"
import styled from "styled-components"

interface ColorProps {
  primary: string
  secondary: string
  accent: string
  neutral: string
  "base-100": string
  info: string
  success: string
  warning: string
  error: string
}

interface FontWeightProps {
  normal: number
  semibold: number
  bold: number
}

const colors = theme!.colors as unknown as ColorProps
const fontWeights = theme!.fontWeight as unknown as FontWeightProps

interface ButtonProps {
  children: string
  type: "button" | "submit"
  borderRadius: "1rem" | "2rem"
  color: keyof ColorProps
  fontSize: string
  fontWeight: keyof FontWeightProps
  width: string
  height: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonWrapper = styled.button<ButtonProps>`
  border-radius: ${({borderRadius}) => borderRadius};
  background-color: ${({color}) => colors[color]};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeights[fontWeight]};
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const Button = ({children, type, borderRadius, color, fontSize, fontWeight, width, height, onClick}: ButtonProps) => {
  return (
    <ButtonWrapper
      className="flex justify-center items-center text-neutral px-8 min-w-fit"
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      height={height}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
