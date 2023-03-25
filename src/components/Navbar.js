import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <div>
        Cohort 97!
      </div>
      <div>
        <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/students'><button>Students</button></NavLink>
        <NavLink to='/students/new'><button>+ Add</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar