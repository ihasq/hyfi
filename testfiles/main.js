import { html, css } from "../src/mod.js";

const Calculator = () => {

}

const Main = ($) => {

	const todo = [];

	function add() {
		todo.push($.querySelector`#task`.value);
		$.querySelector`#task`.value = "";
	};

	const mainStyle = () => css`
		* {
			color: ${$`#task`.value}
		}
	`;

	return () => html`
		<div style=${mainStyle}>
			<ul>${todo.map(el => html`
				<li>${el}</li>
			`)}</ul>
			<${Calculator}/>
			<input id=task type=text/>
			<input type=button onclick=${add}/>
		</div>
	`;
}

document.body.append(html.createElement(Main));

