import tw from "tailwind-styled-components"
import Calendar from "./Calendar"
import Select from "./Select"
import {CalendarIcon, LocationMarkerIcon, UserIcon, HeartIcon} from "@heroicons/react/outline"

const Filter: FilterType = ({className, ...props}) => {
  return (
    <FilterContainer className={className}>
      <Title>Filter your search :</Title>
      <CommonWrapper>
        <FilterLabel htmlFor="region">
          <LocationMarkerIcon className="h-7 w-7 m-1" />
        </FilterLabel>
        <Select id="region" data={["서울특별시", "경기도", "인천광역시", "강원도", "충청북도", "충청남도"]} />
      </CommonWrapper>
      <CommonWrapper>
        <FilterLabel htmlFor="calendar">
          <CalendarIcon className="h-7 w-7 m-1" />
        </FilterLabel>
        <Calendar id="calendar" />
      </CommonWrapper>
      <CommonWrapper>
        <FilterLabel className="accent-emerald-500/25" htmlFor="peope">
          <UserIcon className="h-7 w-7 m-1" />
        </FilterLabel>
        <Select id="people" data={["1", "2", "3", "4", "5", "6", "7", "8"]} />
      </CommonWrapper>
    </FilterContainer>
  )
}
export default Filter

type FilterType = (props: {className?: string}) => JSX.Element

const FilterContainer = tw.div`
flex
items-center
`
const Title = tw.span`
font-bold
m-4
`
const CommonWrapper = tw.div`
m-2
flex
items-center
border-2
rounded-full
border-gray-200
`
const FilterLabel = tw.label`
bg-success
rounded-full
text-center
`
