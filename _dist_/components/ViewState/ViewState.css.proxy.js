
const code = ".progress {\n    width: 100%;\n    background-color: rgba(184, 193, 204, 0.5);\n    height: 24px;\n    border-radius: 6px;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n}\n\n.progress div:nth-child(2) {\n    flex: 1;\n}\n\n.progress-inner-text {\n    color: #818c99;\n    margin-left: 8px;\n    margin-right: 8px;\n    position: relative;\n    order: 4;\n    bottom: 0;\n}\n\n.progress-inner-text-bar {\n    color: #4bb34b;\n    margin-left: 8px;\n    margin-right: 8px;\n    position: relative;\n    bottom: 0;\n}\n\n.progress-inner-text-container {\n    display: flex;\n    align-items: center;\n}\n\n.bar {\n    background-color: #4bb34b;\n    height: 24px;\n    border-radius: 6px;\n    opacity: 1;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.bar-finish {\n    background-color: #4bb34b;\n    height: 24px;\n    border-radius: 6px;\n    opacity: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.bar-inner-text {\n    color: #ffffff;\n    margin-left: 8px;\n    margin-right: 8px;\n    position: relative;\n    bottom: 0;\n}\n\n.progress-label {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 6px;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);