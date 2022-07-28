import React, {useState} from "react"
import DatePicker from "react-datepicker"
import ko from "date-fns/locale/ko"
import tw from "tailwind-styled-components"

const Calendar: CalendarType = ({id, ...props}) => {
  const today = new Date()
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <DatePicker
      locale={ko}
      id={id}
      customInput={<CustomInput autocomplete="off" />}
      placeholderText="날짜를 선택해주세요"
      selected={startDate}
      onChange={handleChange}
      minDate={today}
      startDate={startDate}
      endDate={endDate}
      monthsShown={2}
      dateFormat="yyyy-MM-dd"
      closeOnScroll={(e) => e.target === document}
      selectsRange
      isClearable
    />
  )
}
export default Calendar

type CalendarType = (props: {id: string}) => JSX.Element
const CustomInput = tw.input`
w-64
mx-2
`
