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

function drawNestedSetsTree(data, node) {
  
  const ul = document.createElement('ul');
  
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    
    if (typeof item.children != 'undefined' && item.children.length) {
    	drawNestedSetsTree(item.children, li);
    }

    ul.appendChild(li);
  });
  node.appendChild(ul);
}
