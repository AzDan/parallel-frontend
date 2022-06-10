import React from 'react';
import Select from 'react-select';
import './styles/filters.scss';

const Filters = (props) => {

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [selectedPage, setSelectedPage] = React.useState();
  const [selectedTime, setSelectedTime] = React.useState();

  const updatePageSelected = (page) => {
    setSelectedPage(page);
    props.changeGlobalPageFilter(page)
  }

  const updateTimeSelected = (time) => {
    setSelectedTime(time);
    props.changeGlobalTimeFilter(time)
  }

  const clearAllFilters = () => {
    updatePageSelected(null)
    updateTimeSelected(null)
  }

  const timeOptions = [
    {value: 1, label: '9:00 - 9:15 am'},
    {value: 2, label: '9:15 - 9:30 am'},
    {value: 3, label: '9:30 - 9:45 am'},
    {value: 4, label: '9:45 - 10:00 am'},
    {value: 5, label: '10:00 - 10:15 am'},
    {value: 6, label: '10:15 - 10:30 am'},
  ];

  const pageOptions = [];

  for(var el in props.pageViewData) {
    pageOptions.push({
      value: el, label: el
    })
  }

  React.useEffect(() => {
    if(props.activeTab!=1) {
      setIsDisabled(false)
    }
    else {
      setIsDisabled(true)
    }
  },[props.activeTab])

  return (
    <div className='filters'>
      
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={false}
        isClearable={true}
        name="page"
        options={pageOptions}
        value={selectedPage}
        onChange={updatePageSelected}
      />

      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        name="time"
        options={timeOptions}
        value={selectedTime}
        onChange={updateTimeSelected}
      />

      <a href="#" onClick={() => clearAllFilters()}>Clear Filters</a>

    </div>
  )
}

export default Filters