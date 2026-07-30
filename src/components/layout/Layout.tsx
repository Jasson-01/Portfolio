import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen bg-linear-to-b from-blue-600/70 via-cyan- to-gray">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
