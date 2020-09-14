
const code = "/* Chrome, Safari, Edge, Opera */\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n\n/* Firefox */\n\ninput[type=number] {\n    -moz-appearance: textfield;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);