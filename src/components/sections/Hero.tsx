
const Hero = () => {
  return (
    <section className="flex flex-col justify-start pt-24 items-center min-h-[calc(100vh-60px)] bg-linear-to-b from-blue-300 to-white">
      <div className="flex gap-x-12 justify-center items-start">
        <div className="flex flex-col justify-start items-stretch space-y-8">
          <h1 className="text-6xl font-bold tracking-tight">Jasson A. Davila <br />Bustamante</h1>
          <p className="max-w-md text-gray-800 text-2xl">Estudiante de Ciencias de la Computación en la Universidad de Buenos Aires  | Interesado en Software Engineering, Algoritmos y Estructuras de Datos | Open Source | Desarrollo Full Stack.</p>
        </div>
        <div className="w-96 h-96 object-cover">
          <img className="w-full h-full object-cover" src="/assets/images_perfil/jason-perfil-2.png" alt="imagen perfil" />
        </div>
      </div>
    </section>
  )
}

export default Hero
