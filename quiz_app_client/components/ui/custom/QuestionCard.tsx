import { IQuestion } from "@/interface/IQuestion";
import React from "react";

const QuestionCard: React.FC<IQuestion> = ({
	question,
	answer_1,
	answer_2,
	answer_3,
	answer_4,
}) => {
	return (
		<section className="container mt-20 max-w-[1500px] m-auto ">
			<div className="border-2 border-white p-4 flex flex-col gap-8 rounded-md">
				<div className="border-2 border-white text-center p-8 rounded-md">
					<h1>{question}</h1>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div className="probably_answer_button rounded-md">
						{answer_1}
					</div>
					<div className="probably_answer_button rounded-md">
						{answer_2}
					</div>
					<div className="probably_answer_button rounded-md">
						{answer_3}
					</div>
					<div className="probably_answer_button rounded-md">
						{answer_4}
					</div>
				</div>
			</div>
		</section>
	);
};

export default QuestionCard;
