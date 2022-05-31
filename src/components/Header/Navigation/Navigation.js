import { Link } from 'react-router-dom'
import './Navigation.scss'

export default function Navigation() {
  return (
    <nav>
      <Link to="/#" className='header-link'>Projects</Link>
      <a href="https://github.com/Elitezen" target="_blank" rel="noreferrer">GitHub</a>
      <a href="#contact" target="_blank" rel="noreferr">Contact Me</a>
    </nav>
  )
}