import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header() {
  const count = useSelector(state => state.count);
  return (
    <header>
      <nav>
        <ul>
          <li class="title">
            <NavLink to='/home' activeClassName='active'> BoTS!!! </NavLink>
          </li>
          <li>
            <NavLink to='/bots' activeClassName='active'> Products </NavLink>
          </li>
          <li>
            <NavLink to='/cart' activeClassName='active'> Cart {count===0?'':count} </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header