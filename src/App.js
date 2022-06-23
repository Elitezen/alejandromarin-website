import './App.scss';
import Header from './components/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

import $ from 'jquery';

export default function App() {
  function closePopups() {
    $('#opened-certification')
      .css('display', 'none');
    $('#backdrop-wrapper')
      .css('z-index', '-1');
  }

  return (
    <>
      <div id="backdrop-wrapper" onClick={() => closePopups()}></div>
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
}