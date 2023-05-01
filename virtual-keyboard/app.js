function textArea() {
  const textArea = document.createElement('textarea');
  const placeHolder = document.createTextNode('');
  textArea.appendChild(placeHolder);
  document.body.appendChild(textArea);
}

textArea();

let keyboardButton = document.createElement('div');
keyboardButton.id = 'content';
keyboardButton.innerHTML = '';
document.body.appendChild(keyboardButton);

let mainKeys = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100,
  102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46,
  47,
];

function init() {
  let key = '';
  for (let index = 0; index < mainKeys.length; index++) {
    if (index == 12 || index == 24) {
      key += '<div class="newString"></div>';
    }
    key +=
      '<div class="mainKey" data="' +
      mainKeys[index] +
      '">' +
      String.fromCharCode(mainKeys[index]) +
      "</div>";
  }
  document.querySelector('#content').innerHTML = key;
}

init();

document.onkeypress = function (event) {
  document.querySelectorAll('#content .mainKey').forEach(function (element) {
    element.classList.remove('active');
  })
  document.querySelector('#content .mainKey[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll("#content .mainKey").forEach(function (element) {
  element.onclick = function (event) {
    document.querySelectorAll("#content .mainKey").forEach(function (element) {
      element.classList.remove('active');
    });
    let code = this.getAttribute('data');
    this.classList.add('active');
  }
});