// ParagraphQuestion.tsx
import React from "react";
import Card from "../card/card";
import crossbtn from "/cross.svg";

interface ParagraphQuestionProps {
	questionInput: string;
	setQuestionInput: (input: string) => void;
	typeofQuestion: string;
	index: number;
	questionContent: any[];
	setQuestionContent: (content: any[]) => void;
	status: string;
	content: any;
	SelectType: (
		e: React.ChangeEvent<HTMLSelectElement>,
		selectedObjectId: string
	) => void;
	setpersonalQuestion: (content: any) => void;
}

const ParagraphQuestion: React.FC<ParagraphQuestionProps> = ({
	questionInput,
	setQuestionInput,
	index,
	questionContent,
	setQuestionContent,
	typeofQuestion,
	status,
	content,
	SelectType,
	setpersonalQuestion,
}) => {
	const inputValue = status === "editing" ? questionInput : ""; // Use questionInput as the value
	const handleDelete = () => {
		// Filter out the question with the specified content.id
		const updatedContent = questionContent.filter(
			(item) => item.id !== content.id
		);
		// Update the state to remove the deleted question
		setQuestionContent(updatedContent);
	};
	return (
		<Card type="question" heading="Question" headerColor="#D0F7FA">
			<div key={index}>
				<h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Type</h3>
				<select
					style={{ width: "100%", height: "2rem" }}
					onChange={(e) => SelectType(e, content.id)}
					value={content.type}
				>
					<option value={content.type} disabled>
						{content.type}
					</option>
					<option>paragraph</option>
					<option>mcq</option>
					<option>short answer</option>
					<option>yes/no</option>
					<option>dropdown</option>
					<option>file_upload</option>
					<option>video</option>
				</select>
			</div>
			<div>
				<h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Question</h3>
				<input
					type="text"
					placeholder="Type here"
					defaultValue={inputValue}
					onChange={(e) => setQuestionInput(e.target.value)}
					style={{ width: "100%", height: "1.5rem" }}
				></input>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					height: "2rem",
					marginTop: "1rem",
				}}
			>
				<div
					onClick={handleDelete}
					style={{ display: "flex", cursor: "pointer" }}
				>
					<img
						style={{ width: "1.6rem", cursor: "pointer" }}
						src={crossbtn}
					/>
					<span
						style={{
							color: "#A80000",
							fontWeight: "550",
							marginTop: "8px",
						}}
					>
						Delete Question
					</span>
				</div>
				<button
					style={{
						backgroundColor: "#087B2F",
						color: "white",
						cursor: "pointer",
						borderRadius: "8px",
					}}
					onClick={() => {
						const updatedContent = [...questionContent];
						updatedContent[index] = {
							...updatedContent[index],
							question: questionInput,
							status: "saved",
						};
						setQuestionContent(updatedContent);
						// setpersonalQuestion(updatedContent)
						setpersonalQuestion((prevData: any) => ({
							...prevData,
							updatedContent: updatedContent, // Update personalInformation with formData
						}));
					}}
				>
					save
				</button>
			</div>
			{typeofQuestion === "yes/no" && (
				<div style={{ marginTop: "1rem" }}>
					<label>
						<input type="checkbox" />
						Disqualify candidate if the answer is no
					</label>
				</div>
			)}
		</Card>
	);
};

export default ParagraphQuestion;
