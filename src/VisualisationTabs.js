import React from 'react';
import './styles/visualisation-tab.scss';

const VisualisationTabs = (props) => {
  return (
    <div className='visualisation-tab'>
      <a className={'visualisation-tab--link '+ (props.visualisationTab==1?'selected':'')} href="#" onClick={() => props.setVisualisationTab(1)}>1st Visualisation</a>
      <a className={'visualisation-tab--link '+ (props.visualisationTab==2?'selected':'')} href="#" onClick={() => props.setVisualisationTab(2)}>2nd Visualisation</a>
      <a className={'visualisation-tab--link '+ (props.visualisationTab==3?'selected':'')} href="#" onClick={() => props.setVisualisationTab(3)}>3rd Visualisation</a>
    </div>
  )
}

export default VisualisationTabs