import Layout from "./components/layout/Layout"

const App = () => {
  return (
    <Layout>
       <div>
         <section className="min-h-screen" id="about">About</section>
         <section className="min-h-screen" id="projects">Projects</section>
         <section className="min-h-screen" id="skills">Skills</section>
         <section className="min-h-screen" id="contact">Contact</section>
       </div>
    </Layout>
  )
}

export default App
