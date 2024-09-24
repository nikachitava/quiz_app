import NavBar from "@/components/ui/custom/NavBar";
import QuestionCard from "@/components/ui/custom/QuestionCard";

export default function Home() {
	return (
		<div className="max-h-screen">
			<NavBar />
			<QuestionCard
				question={"Who Won World cup 2010"}
				answer_1={"France"}
				answer_2={"Brazil"}
				answer_3={"Argentina"}
				answer_4={"Spain"}
			/>
		</div>
	);
}
