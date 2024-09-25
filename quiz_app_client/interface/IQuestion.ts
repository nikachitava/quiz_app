export interface IQuestion {
    question: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
    answer_4: string;
    handleAnswer: (option: string) => void;
    selectedOption: string | null;
}