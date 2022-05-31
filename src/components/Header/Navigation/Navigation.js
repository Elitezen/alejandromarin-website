import { Link } from 'react-router-dom'
import './Navigation.scss'

export default function Navigation() {
  return (
    <nav>
      <Link to="/#" className='header-link'>Projects</Link>
      <Link to="/#" className='header-link'>GitHub</Link>
      <Link to="/#" className='header-link'>Contact Me</Link>
    </nav>
  )
}