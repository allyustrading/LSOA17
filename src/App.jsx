import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApproachPage from './pages/ApproachPage'
import PathwaysPage from './pages/PathwaysPage'
import ResearchPage from './pages/ResearchPage'
import CommunityPage from './pages/CommunityPage'
import ProjectsPage from './pages/ProjectsPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'

function useHashRoute() {
  const getRoute = () => window.location.hash.replace('#/', '') || 'home'
  const [route, setRoute] = useState(getRoute())
  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    if (!window.location.hash) window.location.hash = '#/home'
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return route
}

export default function App() {
  const route = useHashRoute()
  const CurrentPage = useMemo(() => ({
    home: HomePage,
    about: AboutPage,
    approach: ApproachPage,
    pathways: PathwaysPage,
    research: ResearchPage,
    community: CommunityPage,
    projects: ProjectsPage,
    support: SupportPage,
    contact: ContactPage,
  }[route] || HomePage), [route])

  return (
    <div className="site">
      <SiteHeader route={route} />
      <AnimatePresence mode="wait">
        <motion.main key={route} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.18}}>
          <CurrentPage />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  )
}
