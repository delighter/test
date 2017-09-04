
function convertData(nestedSets) {
  nestedSets.forEach(function(nestedItem, index, currentData) {
		var children = currentData.filter(function(child) {
        return nestedItem.left < child.left && nestedItem.right > child.right;
    });

    if (children.length) {
      children.forEach(function(child) {
        var index = currentData.indexOf(child);
        delete currentData[index];
      });
      
      convertData(children);     
      nestedItem.children = children;
    }
  });
}
convertData(demoData);


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
