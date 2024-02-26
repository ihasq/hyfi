import { random64 } from "./random64";

const tempMap = new Map(),
	oneTimeKey = random64(),
	tempParser = new DOMParser(),
	html = (templates, ...values) => {
		const joinedString = templates.join(""),
			templateRef = tempMap.get(joinedString);
		
		if(templateRef === undefined) {
			let serializedHTMLBuffer = "";

			templates.forEach((tempIndex, indexNum) => {
				serializedHTMLBuffer += tempIndex;
				if(indexNum !== templates.length - 1) {
					serializedHTMLBuffer += `hyfi${oneTimeKey}${indexNum}\s`
				}
			});

			const parsedTemp = tempParser.parseFromString(serializedHTMLBuffer, "text/html").body;

			for(let valueSearchNum = 0; valueSearchNum < values.length; valueSearchNum++) {
				const searchToken = `hyfi${oneTimeKey}${valueSearchNum}`,
					foundTag = parsedTemp.querySelector(searchToken);
				
				if(foundTag === undefined) {

				} else {

				}

				if(foundEl === undefined) {
				} else {
					serializedHTMLBuffer = serializedHTMLBuffer.replace(`${searchToken}\s`,"")
					if(typeof values[valueSearchNum] !== "object") {
						throw TypeError("the attributes in hyfi must be an object");
					};
					for(const attrIndex in values[valueSearchNum]) {
						foundEl[attrIndex] = values[valueSearchNum][attrIndex];
					}
				}

				if(foundTag === undefined) {
					serializedHTMLBuffer = serializedHTMLBuffer.replace(
						`${searchToken}\s`,
						`<span id="${searchToken}"></span>`
					)
				} else {

				}

			}

			tempMap.set(joinedString)
		}
	};

html.createElement = function(entryPoint) {

};

html.createClass = function(config) {
	
}

export { html };