import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="nav-link flex w-[100vh] justify-evenly mb-10 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/custom-hooks">Custom Hooks</NavLink>
      <NavLink to="/cleanup-useEffect">Clean Up UseEffect</NavLink>
      <NavLink to="/hooks-hell">React Hooks Hell</NavLink>
    </div>
  )
}
