import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<section className="flex min-h-screen flex-col items-center justify-start bg-slate-300 px-4 py-8 scroll-mt-24 sm:px-8 lg:px-12">
			<div className="mx-auto w-full max-w-7xl">
				<div className="mb-8">
					<p className="text-4xl font-extrabold uppercase tracking-tight text-blue-600 sm:text-5xl">
						Contacto
					</p>
				</div>

				<div className="grid gap-8 rounded-4xl border border-gray-200 bg-white p-6 shadow-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
					<div className="flex flex-col justify-center rounded-3xl bg-linear-to-br from-blue-600 to-cyan-400 p-8 text-white">
						<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3rem]">
							Hablemos
						</p>
						<h3 className="text-3xl font-bold">
							¿Tienes un proyecto en mente?
						</h3>
						<div className="mt-6 space-y-2 text-sm">
							<p>📧 jasson.davila001@gmail.com</p>
							<p>📍 Buenos Aires, Argentina</p>
						</div>
					</div>

					<form action="" method="post" className="flex flex-col gap-4">
						<input
							className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
							type="text"
							id="nombre"
							placeholder="Tu nombre"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<input
							className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
							type="email"
							id="email"
							placeholder="Tu correo"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<textarea
							className="min-h-44 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
							name="mensaje"
							id="mensaje"
							placeholder="Escribe tu mensaje"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>

						<button
							type="submit"
							className="rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
						>
							Enviar mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
