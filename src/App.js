import './App.scss';
import Header from './components/Header/Header';
import SidebarNav from './components/Header/Navigation/SidebarNav';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';

export default function App() {
  return (
    <>
      <Header/>
      <SidebarNav/>
      <AboutMe/>
      <ContactMe/>
    </>
  );
}