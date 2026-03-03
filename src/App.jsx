import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import WhatsAppFAB from './components/WhatsAppFAB'

// Eager-load Home for fast LCP
import Home from './pages/Home'

// Lazy-load remaining pages for code-splitting
const Products        = lazy(() => import('./pages/Products'))
const ProductCategory = lazy(() => import('./pages/ProductCategory'))
const Equipment       = lazy(() => import('./pages/Equipment'))
const About           = lazy(() => import('./pages/About'))
const Contact         = lazy(() => import('./pages/Contact'))
const NotFound        = lazy(() => import('./pages/NotFound'))

gsap.registerPlugin(ScrollTrigger)

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Memuat...">
      <div className="page-loader__spinner" />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main key={location.pathname} className="page-main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/products"            element={<Products />} />
            <Route path="/products/equipment"  element={<Equipment />} />
            <Route path="/products/:category"  element={<ProductCategory />} />
            <Route path="/about"               element={<About />} />
            <Route path="/contact"             element={<Contact />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppFAB />
    </>
  )
}
