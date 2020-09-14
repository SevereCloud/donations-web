
const code = ".PostBar {\n    display: flex;\n    align-items: center;\n    height: 44px;\n}\n\n.PostBar__button {\n    align-self: stretch;\n    min-width: 84px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    color: var(--content_placeholder_text)\n}\n\n.PostBar__button .Icon {\n    margin-left: 16px; \n    margin-right: 4px;\n    color: var(--content_placeholder_icon)\n}\n\n.PostBar__views {\n    position: absolute;\n    right: 0;\n    margin-left: auto;\n    min-width: 84px;\n    display: flex;\n    align-items: center;\n    color: var(--content_placeholder_text)\n}\n.PostBar__views .Icon{\n    margin-left: 16px; \n    margin-right: 7px;\n    color: var(--snippet_icon_tertiary);\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);