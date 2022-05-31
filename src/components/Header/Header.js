import './Header.scss';
import Navigation from './Navigation/Navigation';
import $ from 'jquery';

export default function Header() {
  function openSideNav() {
    $('#sidebar-nav')
      .css('right', '0');
    $('#shadow-wrapper')
      .css('display', 'block')
      .css('background-color', '#000')
      .css('opacity', '0.2');
  }

  return (
    <header>
      <h1>Alejandro Marin</h1>
      <Navigation/>

      <button id="sidebarnav-open" onClick={() => openSideNav()}>
        &equiv;
      </button>
    </header>
  )
}