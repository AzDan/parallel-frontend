import React from 'react';
import axios from 'axios';
import ChartContainer from './ChartContainer';
import Filters from './Filters';
import SideNav from './SideNav';
import './styles/App.scss';
import VisualisationTabs from './VisualisationTabs';
import Loader from './Loader';

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [pageViewData, setPageViewData] = React.useState();
  const [hoursViewData, setHoursViewData] = React.useState();
  const [userViewData, setUserViewData] = React.useState();
  const [activeTab, setActiveTab] = React.useState(1);

  const changeActiveTab = (tabNumber) => {
    setActiveTab(tabNumber)
  }

  React.useEffect(() => {
    axios.get("/apidata")
    .then(response => {
      setData(response.data);
      return response.data;
    })
    .then(rawData => {
      console.log(rawData);
      setPageViewData(rawData.pageViewData);
      setHoursViewData(rawData.hourViewData);
      setUserViewData(rawData.userViewData);
    }) 
  },[])

  React.useEffect(() => {
    if(data.length !== 0) {
      setIsLoading(false);
    }
  },[data])

  return (
    <div className="App">
      {isLoading ? 
        (
          <Loader/>
        )
        :
        (
          <>
            <SideNav activeTab={activeTab} setActiveTab={changeActiveTab}/>
            <div className='right-content'>
              <Filters/>
              <VisualisationTabs activeTab={activeTab} setActiveTab={changeActiveTab}/>
              <ChartContainer 
                activeTab={activeTab} 
                pageViewData={pageViewData}
                hoursViewData={hoursViewData}
                userViewData={userViewData}/>
            </div>
          </>
        )
      
      }
    </div>
  );
}

export default App;
