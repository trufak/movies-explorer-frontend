import { Link } from 'react-router-dom';
import './Logo.css'

const Logo = ({ additionalClass }) => {
  return (
    <Link className={`logo ${additionalClass}`} to='/' />
  )
}

export default Logo;
