import { useEffect, type ReactNode } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<>
			<button
				type="button"
				className="fixed inset-0 z-40 cursor-default bg-black/50"
				onClick={onClose}
				aria-label="Cerrar modal"
			/>

			<div
				className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#bcd0fd] p-6 shadow-lg"
				role="dialog"
				aria-modal="true"
			>
				<button
					type="button"
					onClick={onClose}
					className="felx flex-row absolute right-2 top-2 font-extrabold text-gray-600 hover:text-blue-800"
					aria-label="Cerrar modal"
				>
					✕
				</button>

				{children}
			</div>
		</>
	);
};

export default Modal;
