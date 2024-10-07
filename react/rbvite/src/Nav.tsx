import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='w-full bg-white/80'>
      <ul className='mb-3 flex h-8 items-center justify-around shadow backdrop-blur-sm'>
        <li>
          <NavLink to='/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink
            to='/my'
            style={({ isActive }) => (isActive ? { color: 'red' } : {})}
          >
            My
          </NavLink>
        </li>
        <li>
          <NavLink to='/items'>Items</NavLink>
        </li>
        <li>
          <NavLink to='/items/1'>ItemDetail</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>Hello</NavLink>
        </li>
      </ul>
    </nav>
  );
}
