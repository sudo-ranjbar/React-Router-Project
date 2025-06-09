import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import React from "react";


function Root() {

	return (
		<div className="">
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