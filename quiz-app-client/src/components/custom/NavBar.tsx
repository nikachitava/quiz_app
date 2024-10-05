import { ModeToggle } from "./mode-toggle";

const NavBar = () => {
	return (
		<header className="bg-darktext dark:bg-black flex justify-between items-center p-4 xl:px-12 xl:py-6">
			<h2 className="text-xl font-bold text-white">QUIZ APP</h2>
			<nav>
				<ul className="flex gap-6 items-center ">
					<li className="cursor-pointer text-white">Leaderboard</li>
					<li className="cursor-pointer text-white">My Profile</li>
					<li className="cursor-pointer text-white">Create Quiz</li>
					<li className="cursor-pointer text-white">Log out</li>
					<ModeToggle />
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
