import './SidebarNav.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default function SidebarNav() {
  function closeSideNav() {
    $('#sidebar-nav')
      .css('right', '-300px');
    $('#shadow-wrapper')
      .css('display', 'none');
  }

  function closeAll() {
    $('#opened-certification')
      .css('display', 'none')
    closeSideNav();
    $('#shadow-wrapper')
      .css('display', 'none');
  }

  return (
    <>
      <nav id="sidebar-nav">
        <ul>
          <li>
            <Link to="/#" className='header-link'>Projects</Link>
          </li>
          <li>
            <a href="https://github.com/Elitezen" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="#contact" rel="noreferr" onClick={() => closeAll()}>Contact Me</a>  
          </li>
        </ul>
      </nav>
      <div id="shadow-wrapper" onClick={() => closeAll()}>
        
      </div>
    </>
  )
}