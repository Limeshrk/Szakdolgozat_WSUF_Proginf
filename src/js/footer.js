function buildFooter() {
  var footerDiv = document.body.getElementsByTagName('div');
  var lastDiv = footerDiv[footerDiv.length - 1];

  var footerElement = document.createElement('footer');
  var divElement = document.createElement('div');
  divElement.className = 'copyright';
  var pElement = document.createElement('p');
  pElement.textContent = 'Copyright © 2023';

  divElement.appendChild(pElement);
  footerElement.appendChild(divElement);

  lastDiv.appendChild(footerElement);
}

module.exports = buildFooter;
