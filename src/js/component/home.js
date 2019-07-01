import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
//create your first component7];

export class MayorNumero extends React.Component {
	constructor(props) {
		super(props);
	}
	numeroMayor = (a, b, c) => {
		return a > b && a > c ? a : b > c ? b : c > a ? c : a;
	};
	render() {
		return (
			<div>
				el mayor es:
				{this.numeroMayor(this.props.a, this.props.b, this.props.c)}
			</div>
		);
	}
}
MayorNumero.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number,
	c: PropTypes.number
};
