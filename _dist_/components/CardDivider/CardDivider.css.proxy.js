
const code = ".CardDivider {\n    background-color: var(--background_page);\n    width: 100%;\n}\n\n.CardDivider--android {\n    height: 8px;\n}\n\n.CardDivider--ios {\n    height: 8px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);