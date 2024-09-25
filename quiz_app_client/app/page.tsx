"use client";

import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/custom/NavBar";
import QuestionContainer from "@/components/ui/custom/QuestionContainer";
import { useState } from "react";

export default function Home() {
	const [startGame, setStartGame] = useState(false);

	const handleStartGame = () => {
		setStartGame((startGame) => !startGame);
	};
	return (
		<div className="max-h-screen">
			<NavBar />
			<div className="container mt-20">
				<Button onClick={handleStartGame}>
					{startGame ? "Leave Game" : "Start Game"}
				</Button>
			</div>
			{startGame && <QuestionContainer />}
		</div>
	);
}
