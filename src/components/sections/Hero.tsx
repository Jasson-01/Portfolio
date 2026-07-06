
const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[calc(100vh-60px)] bg-gradient-to-b from-blue-300 to-white">
      <div className="flex gap-x-12 border justify-center items-center ">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-6xl font-bold tracking-tight text-center">Jasson A. Davila Bustamante</h1>
          <p className="max-w-md text-gray-800">Estudiante de Ciencias de la Computación en la Universidad de Buenos Aires  | Interesado en Software Engineering, Algoritmos y Estructuras de Datos | Open Source | Desarrollo Full Stack</p>
        </div>
        <div className="border w-full h-full object-cover">
          <img src="/assets/images_perfil/jason-perfil-2.png" alt="imagen perfil" />
        </div>
      </div>
    </section>
  )
}

export default Hero
