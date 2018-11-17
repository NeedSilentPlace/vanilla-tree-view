// Load application styles
import 'styles/index.less';

// Load tree data
import TREE_DATA from './data';

// ================================
// START YOUR APP HERE
// ================================

var data = TREE_DATA;
var tree = document.getElementById('tree');
var ul = document.createElement('ul');
ul.setAttribute('id', 'top');
tree.appendChild(ul);
document.getElementById('top').appendChild(makeTree(data));

function makeTree(treeData){
  var li = document.createElement('li');
  var content = document.createTextNode(treeData.name);
  var ul = document.createElement('ul');

  li.appendChild(content);
  li.appendChild(ul);
  li.classList.add('folder');
  treeData.children.push({name: '+'});

  for(var i = 0; i < treeData.children.length; i++){
    if(treeData.children[i].children){
      ul.appendChild(makeTree(treeData.children[i]));
    } else {
      if(treeData.children[i].name === '+'){
        makeClick(makeDeepTree(treeData.children[i]), treeData.children, i);
      } else {
        makeDblclick(makeDeepTree(treeData.children[i]), treeData.children[i]);
      }
    }
  }

  function makeDeepTree(insideData){
    var li = document.createElement('li');
    var content = document.createTextNode(insideData.name);
    li.appendChild(content);

    if(insideData.name === '+'){
      li.classList.add('plusLi');
    } else {
      li.classList.add('file');
    }
    ul.appendChild(li);

    return li;
  }

  function makeDblclick(list, treeData){
    list.addEventListener('dblclick',function(){
      treeData.children = [{name : '+'}];

      var ul = document.createElement('ul');
      var li = document.createElement('li');
      var content = document.createTextNode('+');

      li.appendChild(content);
      li.classList.add('plusLi');
      event.target.classList.remove('file');
      event.target.classList.add('folder');
      ul.appendChild(makeClick(li, treeData.children, treeData.children.length-1));
      event.target.appendChild(ul);
    }, {once : true});

    return list;
  }

  function makeClick(list, treeData, dataIndex){
    list.addEventListener('click',function(){
      treeData.splice(treeData.length-1, 0, { name : 'branch'});

      var baby = event.target.parentNode.children;
      var li = document.createElement('li');
      var content = document.createTextNode('branch');

      li.appendChild(content);
      li.classList.add('file');
      event.target.parentNode.insertBefore(makeDblclick(li, treeData[dataIndex]), event.target.parentNode.childNodes[baby.length - 1]);
      dataIndex++;
    });

    return list;
  }

  return li;
}

/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
