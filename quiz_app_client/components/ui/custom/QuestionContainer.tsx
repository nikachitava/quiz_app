"use client";

import QuestionCard from "@/components/ui/custom/QuestionCard";
import { useState } from "react";
import { questionsData } from "../../../DATA.js";
import { Button } from "../button";

const QuestionContainer = () => {
	const [currentQuest, setCurrentQuest] = useState(0);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [score, setScore] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleAnswer = (option: string) => {
		setSelectedOption(option);
		setIsSubmitted(false);
	};

	const handleSubmit = () => {
		if (!selectedOption) return;

		if (selectedOption === questionsData[currentQuest].correct_answer) {
			setScore((score) => (score += 1));
		} else {
			setScore((score) => (score -= 1));
		}

		if (currentQuest < questionsData.length - 1) {
			setCurrentQuest(currentQuest + 1);
		} else {
			alert(`Quiz finished! Your score is ${score + 1}`);
		}

		setSelectedOption(null);
		setIsSubmitted(true);
	};

	const generateQuestion = (questionNumber: number) => {
		const lastQuestion = questionsData.length;

		if (questionNumber > lastQuestion) return null;
		return (
			<QuestionCard
				question={questionsData[questionNumber].question}
				answer_1={questionsData[questionNumber].answer_1}
				answer_2={questionsData[questionNumber].answer_2}
				answer_3={questionsData[questionNumber].answer_3}
				answer_4={questionsData[questionNumber].answer_4}
				selectedOption={selectedOption}
				handleAnswer={handleAnswer}
			/>
		);
	};
	return (
		<section className="container mt-20 max-w-[1500px] m-auto border-2 border-white p-8">
			<h1
				className={`text-2xl my-2 font-bold  ${
					score >= 0 ? "text-green-500" : "text-red-500"
				}`}
			>
				Score: {score}
			</h1>
			{generateQuestion(currentQuest)}
			<div className="flex justify-center">
				<Button
					className="w-1/2 mt-8"
					onClick={handleSubmit}
					disabled={isSubmitted}
				>
					{isSubmitted ? "Next Question" : "Submit"}
				</Button>
			</div>
		</section>
	);
};

export default QuestionContainer;
