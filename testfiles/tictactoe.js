import { html } from "./src/mod.js"

const Square = ({ onclick, $ }) => ({ value } = $) => html`
	<button class="square" onclick=${onclick}>
		${value}
	</button>
`;

// $.$ === $

const Board = ({ $, onPlay }) => {

	function handleClick(i) {
		const clickedSquare = $(Square).all[i];
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		const nextSquares = squares.slice();

		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}

		onPlay(nextSquares);
	}

	return ({ xIsNext, squares } = $) => {
	  
		const winner = calculateWinner(squares);
		let status = winner? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

		return html`
			<div>
				<div class="status">${status}</div>
				<div class="board-row">
					<${Square} value=${squares[0]} onclick=${() => handleClick(0)}/>
					<${Square} value=${squares[1]} onclick=${() => handleClick(1)}/>
					<${Square} value=${squares[2]} onclick=${() => handleClick(2)}/>
				</div>
				<div class="board-row">
					<${Square} value=${squares[3]} onclick=${() => handleClick(3)}/>
					<${Square} value=${squares[4]} onclick=${() => handleClick(4)}/>
					<${Square} value=${squares[5]} onclick=${() => handleClick(5)}/>
				</div>
				<div class="board-row">
					<${Square} value=${squares[6]} onclick=${() => handleClick(6)}/>
					<${Square} value=${squares[7]} onclick=${() => handleClick(7)}/>
					<${Square} value=${squares[8]} onclick=${() => handleClick(8)}/>
				</div>
			<div/>
		`;
	};
}