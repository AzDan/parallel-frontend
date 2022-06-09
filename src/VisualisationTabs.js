import React from 'react';
import './styles/visualisation-tab.scss';

const VisualisationTabs = (props) => {
  return (
    <div className='visualisation-tab'>
      <a className={'visualisation-tab--link '+ (props.activeTab==1?'selected':'')} href="#" onClick={() => props.setActiveTab(1)}>1st Visualisation</a>
      <a className={'visualisation-tab--link '+ (props.activeTab==2?'selected':'')} href="#"  onClick={() => props.setActiveTab(2)}>2nd Visualisation</a>
      <a className={'visualisation-tab--link '+ (props.activeTab==3?'selected':'')} href="#" onClick={() => props.setActiveTab(3)}>3rd Visualisation</a>
    </div>
  )
}

export default VisualisationTabs