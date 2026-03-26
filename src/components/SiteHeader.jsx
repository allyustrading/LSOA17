import logo from '../assets/logo.png'

const leftNav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Our Approach', 'approach'],
  ['Wellness Pathways', 'pathways'],
  ['Research at UNH BIC', 'research'],
]
const rightNav = [
  ['Community', 'community'],
  ['Projects', 'projects'],
  ['Support Us', 'support'],
  ['Contact Us', 'contact'],
]

function NavLink({ label, route, activeRoute }) {
  return <a href={`#/${route}`} className={activeRoute === route ? 'active' : ''}>{label}</a>
}

export default function SiteHeader({ route }) {
  return (
    <header className="topbar">
      <nav className="nav nav-left">
        {leftNav.map(([label,key]) => <NavLink key={key} label={label} route={key} activeRoute={route} />)}
      </nav>
      <a href="#/home" className="brand">
        <img src={logo} alt="Liuli Society logo" className="brand-logo" />
        <div className="brand-text">
          <div className="brand-title">Liuli Society</div>
          <div className="brand-sub">OF AMERICA</div>
        </div>
      </a>
      <nav className="nav nav-right">
        {rightNav.map(([label,key]) => <NavLink key={key} label={label} route={key} activeRoute={route} />)}
      </nav>
    </header>
  )
}
