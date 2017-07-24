function drawNestedSetsTree(data, node) {
  // Удалите весь код ниже и замените его на свою реализацию
  const ul = document.createElement('ul');
  data.forEach(({ title }) => {
    const li = document.createElement('li');
    li.textContent = title;
    ul.appendChild(li);
  });
  node.appendChild(ul);
}



if (typeof module !== 'undefined') {
  module.exports = drawNestedSetsTree;
}