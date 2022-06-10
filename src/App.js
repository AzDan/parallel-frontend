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
  const [visualisationTab, setVisualisationTab] = React.useState(1);
  const [globalTimeFilter, setGlobalTimeFilter] = React.useState();
  const [globalPageFilter, setGlobalPageFilter] = React.useState();

  const changeVisualisationTab = (tabNumber) => {
    setVisualisationTab(tabNumber);
  }

  const changeActiveTab = (tabNumber) => {
    setActiveTab(tabNumber)
  }

  const changeGlobalTimeFilter = (timeFilter) => {
    if(timeFilter !== null)
      setGlobalTimeFilter(timeFilter.value);
    else {
      setPageViewData(data.pageViewData)
      setUserViewData(data.userViewData)
    }
  }

  const changeGlobalPageFilter = (pageFilter) => {
    if(pageFilter !== null)
      setGlobalPageFilter(pageFilter.value);
    else {
      setUserViewData(data.userViewData)
    }
  }

  const updatePageViewsOnTimeChange = () => {
    const updatedPageViewData = {};

    switch(globalTimeFilter) {
      case 1: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min <= 15) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      case 2: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 15 && min <= 30) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      case 3: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 30 && min <= 45) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      case 4: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 45 && min < 60) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      case 5: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '10' && min <= 15) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      case 6: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 15 && min <= 30) {
          if(updatedPageViewData[el.pagetitle] === undefined) {
            updatedPageViewData[el.pagetitle] = 1;
          }
          else {
            updatedPageViewData[el.pagetitle]++;
          }
        }
      })
      setPageViewData(updatedPageViewData);
      break;

      default:
    }
  }

  const updateUserViewsOnTimeChange = () => {
    const updatedUserViews = {}

    switch(globalTimeFilter) {
      case 1: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min <= 15) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      case 2: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 15 && min <= 30) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      case 3: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 30 && min <= 45) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      case 4: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '09' && min > 45 && min < 60) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      case 5: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '10' && min <= 15) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      case 6: data.rawData.forEach(el => {
        var hour = el.timestamp.substring(12,14);
        var min = el.timestamp.substring(15,17);
        if(hour === '10' && min > 15 && min <= 30) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      setUserViewData(updatedUserViews);
      break;

      default:
    }
  }

  const updateUserViewsOnPageChange = () => {
    const updatedUserViews = {}
    console.log("GYAF")
    console.log(data)

    if(!isLoading) {
      data.rawData.forEach(el => {
        if(el.pagetitle === globalPageFilter) {
          if(updatedUserViews[el.uid] === undefined) {
            updatedUserViews[el.uid] = 1;
          }
          else {
            updatedUserViews[el.uid]++;
          }
        }
      })
      console.log(updatedUserViews)
      setUserViewData(updatedUserViews);
    }
  }

  const updateDataOnTimeChange = () => {
    updatePageViewsOnTimeChange();
    updateUserViewsOnTimeChange();
  }

  const updateDataOnPageChange = () => {
    updateUserViewsOnPageChange();
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

  React.useEffect(() => {
    updateDataOnTimeChange()
  },[globalTimeFilter])

  React.useEffect(() => {
    updateDataOnPageChange()
  },[globalPageFilter])

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
              <Filters 
                activeTab={activeTab} 
                pageViewData={pageViewData} 
                changeGlobalTimeFilter={changeGlobalTimeFilter}
                changeGlobalPageFilter={changeGlobalPageFilter}
              />
              <VisualisationTabs visualisationTab={visualisationTab} setVisualisationTab={changeVisualisationTab}/>
              <ChartContainer 
                activeTab={activeTab} 
                visualisationTab={visualisationTab}
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
