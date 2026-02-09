import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Method from './components/Method'
import About from './components/About'
import Investment from './components/Investment'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Method />
        <About />
        <Investment />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
