import './SidebarNav.scss';
import $ from 'jquery';

export default function SidebarNav() {
  function closeSideNav() {
    $('#sidebar-nav')
      .css('right', '-300px');
    $('#shadow-wrapper')
      .css('opacity', '0')
      .css('display', 'none');
  }

  return (
    <>
      <nav id="sidebar-nav">
        <button id="sidebarnav-open" onClick={() => closeSideNav()}>
          &equiv;
        </button>
      </nav>
      <div id="shadow-wrapper">
        
      </div>
    </>
  )
}