import React from "react";
import ChildComponent from "../six/ChildComponent.component.js";

export default class ParentComponent extends React.Component {
	state = { data: "Hello World" };
    
	render() {
		return <ChildComponent data={this.state.data} />;
	}
}
