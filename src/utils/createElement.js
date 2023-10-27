export default function createElement(tag, classInfo, text) {
  const element = document.createElement(tag);
  element.className = classInfo;
  element.textContent = text;
  return element;
}
