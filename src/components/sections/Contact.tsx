import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="px-60 py-8">
			<h2 className="text-5xl font-bold">Contacto</h2>
			<div className="mt-8 flex flex-row gap-x-16">
				<div className="flex flex-col flex-1">
					<div className="border w-full h-96 flex items-center justify-center">
						Imagen
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<form action="" method="post" className="space-y-4">
						<input
							className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="text"
							id="nombre"
							placeholder="Your name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<input
							className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
							type="email"
							id="email"
							placeholder="Your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<textarea
							className="min-h-52 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
							name="mensaje"
							id="mensaje"
							placeholder="Whrite your message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>

						<button
							type="submit"
							className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
						>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
