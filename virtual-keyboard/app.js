function textArea() {
  const textArea = document.createElement("textarea");
  const placeHolder = document.createTextNode("Enter your text");
  textArea.appendChild(placeHolder);
  document.body.appendChild(textArea);
}

textArea();

