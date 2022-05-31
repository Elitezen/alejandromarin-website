import './App.scss';
import Header from './components/Header/Header';
import SidebarNav from './components/Header/Navigation/SidebarNav';
import AboutMe from './components/AboutMe/AboutMe';

export default function App() {
  return (
    <>
      <Header/>
      <SidebarNav/>
      <AboutMe/>
    </>
  );
}