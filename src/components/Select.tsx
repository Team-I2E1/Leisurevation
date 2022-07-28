import {useEffect} from "react"
import {useState} from "react"
import tw from "tailwind-styled-components"

const Select: SelectType = ({data, id}) => {
  const [defaultValue, setDefaultValue] = useState(true)
  useEffect(() => {
    setDefaultValue((state) => !state)
  }, [])
  return (
    <SelectBox id={id}>
      <option value="">선택해주세요</option>
      {data?.map((el, idx) => {
        return <option key={idx.toString()}>{id === "people" ? el + "명" : el}</option>
      })}
    </SelectBox>
  )
}
export default Select

type SelectType = (props: {data: string[]; id: string}) => JSX.Element

const SelectBox = tw.select`
mx-2
`
