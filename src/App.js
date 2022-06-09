import React from 'react';
import axios from 'axios';
import ChartContainer from './ChartContainer';
import Filters from './Filters';
import SideNav from './SideNav';
import './styles/App.scss';
import VisualisationTabs from './VisualisationTabs';

function App() {
  const [rawData, setRawData] = React.useState();

  React.useEffect(() => {
    axios.get("/apidata")
    .then(response => console.log(response.data))
  },[])

  return (
    <div className="App">
      <SideNav/>
      <div className='right-content'>
        <Filters/>
        <VisualisationTabs/>
        <ChartContainer/>
      </div>
    </div>
  );
}

export default App;
