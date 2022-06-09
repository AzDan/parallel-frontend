import React from 'react';
import './styles/visualisation-tab.scss';

function VisualisationTabs() {
  return (
    <div className='visualisation-tab'>
      <a className='visualisation-tab--link' href="#">1st Visualisation</a>
      <a className='visualisation-tab--link selected' href="#">2nd Visualisation</a>
      <a className='visualisation-tab--link' href="#">3rd Visualisation</a>
    </div>
  )
}

export default VisualisationTabs