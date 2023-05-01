import React, { useState,useEffect } from "react";

const FunctionalComponent=()=>{
	const [state, setState] = useState({"text":"I have not been Clicked yet"},{loading:true});
    const{text,loading}=state;

	useEffect(() => {
	  setTimeout(() => {
		setState({loading:false})
	  }, 10000);
	}, [])
	

	return (
		<div>
			<button onClick={()=>{
                setState({"text":"I've been clicked right now"})
            }}>Click me</button>
            <p>{text}</p>
			<h1>---------------------</h1>
			{loading?(<h2>Component is loading...</h2>):(<h2>Component is Done loading </h2>)}
			{/* here Ternary Operator is been Used */}
		</div>
	)
}


export default FunctionalComponent;
