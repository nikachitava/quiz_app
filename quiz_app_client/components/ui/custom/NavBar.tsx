import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<header className="container ">
			<div className="flex  justify-between items-center py-4">
				<Link href={"/"}>
					<h1 className="text-primary text-3xl font-bold">
						QUIZ APP
					</h1>
				</Link>
				<p>Sing in</p>
			</div>
		</header>
	);
};

export default NavBar;
