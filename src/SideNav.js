import './styles/sidenav.scss';

const SideNav = (props) => {
  return(
    <div className='side-nav'>
      <div className='side-nav__section'>
        <div className='user-details-container'>
          <div className='img-circle'></div>
          <div className='user-details'>
            <p className='title'>Dashboard</p>
            <p>Submitted by Shryesh</p>
          </div>
        </div>
      </div>
      <div className='side-nav__section'>
        <p className='title'>Random Dataset #1</p>
        <p>Datasource = https://resisted-aboard-koala.glitch.me/events</p>
      </div>
      <div className='side-nav__navigation'>
        <a href="#" className={'side-nav__navigation--link ' + (props.activeTab==1?'selected':'')} onClick={() => props.setActiveTab(1)}>Problem 1</a>
        <a href="#" className={'side-nav__navigation--link ' + (props.activeTab==2?'selected':'')} onClick={() => props.setActiveTab(2)}>Problem 2</a>
        <a href="#" className={'side-nav__navigation--link ' + (props.activeTab==3?'selected':'')} onClick={() => props.setActiveTab(3)}>Problem 3</a>
      </div>
    </div>
  );
}

export default SideNav;