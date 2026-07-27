import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="bg-slate-50">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
