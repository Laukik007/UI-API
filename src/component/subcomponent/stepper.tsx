import React, { useState } from "react";

const Stepper: React.FC = () => {
	const [activeStep, setActiveStep] = useState<number>(1);
	const steps: string[] = [
		"Program Details",
		"Application Form",
		"WorkFlow",
		"Preview",
	];

	return (
		<div
			style={{
				display: "flex",
				// border: "1px solid rgb(204, 204, 204)",
				justifyContent: "space-around",
				width: "100%",
			}}
		>
			{steps.map((step, index) => (
				<div
					key={index}
					style={{
						padding: "2rem 10px",
						display: "flex",
						color: activeStep === index ? "white" : "black",
						boxShadow:
							activeStep === index ? "2px 2px 5px #888" : "none",
						height: "40px",
						// marginRight: index !== steps.length - 1 ? "10px" : "0", // Add right margin except for the last step
						backgroundColor:
							activeStep === index ? "#00635B" : "transparent", // Background color for the active step
						cursor: "pointer",
						justifyContent: "center",
						alignItems: "center",
						width: "32.5%",
						border: "1px solid #ebe6e6",
					}}
					onClick={() => setActiveStep(index)}
				>
					<p style={{ margin: 0 }}>{step}</p>
				</div>
			))}
		</div>
	);
};

export default Stepper;
