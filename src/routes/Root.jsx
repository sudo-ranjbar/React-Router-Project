import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


function Root() {

	return (
		<div>
			<header className="main-header">
				<Navbar />
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Root