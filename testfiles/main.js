import { html, css } from "../src/mod.js";

const Main = $ => {
	
	let todo = [],
		add = () => {
			todo.push($`#task`.value);
			$`#task`.value = "";
		},
		mainStyle = () => css`
			* {
				color: ${$`#task`.value}
			}

			${Calculator} > #index {
				color: ${Calculator}
			}
		`;

	return () => html`
		<div style=${mainStyle}>
			<ul>${todo.map(el => html`
				<li>${el}</li>
			`)}</ul>
			<input id=task type=text/>
			<input type=button onclick=${add}/>
		</div>
	`;
}

document.body.append(html.createElement(Main));