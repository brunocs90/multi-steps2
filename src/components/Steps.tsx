import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";


import "./Steps.css";

type stepsProps = {
	currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
	return (
		<div className="steps">
			<div className="step active">
				<AiOutlineUser />
				<p>Identificação</p>
			</div>
			<div className={`step ${currentStep >= 1 ? "active" : ""}`}>
				<AiOutlineStar />
				<p>Avaliação</p>
			</div>
			<div className={`step ${currentStep >= 2 ? "active" : ""}`}>
				<RiSendPlaneLine />
				<p>Envio</p>
			</div>
		</div>
	);
};

export default Steps;
