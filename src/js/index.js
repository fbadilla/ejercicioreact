//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import PropTypes from "prop-types";
import { MayorNumero } from "./component/home.js";

/*const numeroMayor = (a, b, c) => {
	return a > b && a > c ? a : b > c ? b : c > a ? c : a;
};
function Home(props) {
	return <div>el mayor es: {numeroMayor(props.a, props.b, props.c)} </div>;
}
export default Home;
Home.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number,
	c: PropTypes.number
};*/
//render your react application
ReactDOM.render(
	<MayorNumero a={5} b={13} c={12} />,
	document.querySelector("#app")
);
