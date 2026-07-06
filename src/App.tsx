import Layout from "./components/layout/Layout"
import Hero from "./components/sections/Hero"

const App = () => {
  return (
    <Layout>
       <div>
        <Hero></Hero>
         <section className="min-h-screen" id="about">About</section>
         <section className="min-h-screen" id="projects">Projects</section>
         <section className="min-h-screen" id="skills">Skills</section>
         <section className="min-h-screen" id="contact">Contact</section>
       </div>
    </Layout>
  )
}

export default App
