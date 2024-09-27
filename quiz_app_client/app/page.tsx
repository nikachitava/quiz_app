"use client";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/custom/NavBar";
import QuestionContainer from "@/components/ui/custom/QuestionContainer";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {
	const [startGame, setStartGame] = useState(false);

	const handleStartGame = () => {
		setStartGame((startGame) => !startGame);
	};

	const { user } = useContext(AuthContext);

	if (!user) {
		redirect("/authorization");
	}

	return (
		<div className="min-h-screen">
			<NavBar />
			<h1>user: {user ? "true" : "false"}</h1>
			<div className="container mt-20">
				<Button onClick={handleStartGame}>
					{startGame ? "Leave Game" : "Start Game"}
				</Button>
			</div>
			{startGame && <QuestionContainer />}
		</div>
	);
}
