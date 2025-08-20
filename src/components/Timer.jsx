// import { useState, } from "react";
import BtnComp from "./BtnComp";

// Correct implementation
const Timer = () => {
	// const [seconds, setSeconds] = useState(0);
	// const [isRunning, setIsRunning] = useState(false);
	// const intervalRef = useRef(null);

	// const startTimer = () => {
	//   setIsRunning(true);
	//   intervalRef.current = setInterval(() => {
	//     setSeconds((prev) => prev + 1);
	//   }, 1000);
	//   console.log("int1", intervalRef.current);
	// };

	// const pauseTimer = () => {
	//   setIsRunning(false);
	//   console.log("int2", intervalRef.current);
	//   clearInterval(intervalRef.current); // Actually stops the interval
	//   console.log("int3", intervalRef.current);
	//   // intervalRef.current = null;
	//   console.log("int4", intervalRef.current);
	// };

	// const resetTimer = () => {
	//   clearInterval(intervalRef.current);
	//   setSeconds(0);
	//   setIsRunning(false);
	//   intervalRef.current = null;
	// };

	// Cleanup on unmount
	// useEffect(() => {
	//   return () => {
	//     if (intervalRef.current) {
	//       clearInterval(intervalRef.current);
	//     }
	//   };
	// }, []);

	return (
		// <div>
		//   <p>{seconds}</p>
		//   <button onClick={isRunning ? pauseTimer : startTimer}>
		//     {isRunning ? "Pause" : "Start"}
		//   </button>

		//   <button onClick={resetTimer}>Reset</button>
		// </div>

		<div>
			<BtnComp />
			{/* <BtnComp /> */}
		</div>
	);
};
export default Timer;
