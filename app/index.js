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
tree.appendChild(ul);

function makeTree(x){                                         // children이 있는 object의 name 값
    var li = document.createElement('li');
    var content = document.createTextNode(x.name);
    var ul = document.createElement('ul');
    li.appendChild(content);
    li.appendChild(ul);
    li.style.color = '#DF7401';
    li.style.fontFamily = 'Impact';
    x.children.push({name: '+'});

    function makeDeepTree(x){                                         //name만 있는 object의 value
        var li = document.createElement('li');
        var content = document.createTextNode(x.name);
        li.appendChild(content);
        li.style.fontFamily = 'sans-serif';
        if(x.name === '+'){
            li.style.color = 'blue';
          }
        else{
            li.style.color = 'green';
          }

        ul.appendChild(li);
        return li;
    }

    function makeDblclick(self, shoot){
        self.addEventListener('dblclick',function(){
            shoot.children = [{name : '+'}];
            event.target.style.color = '#DF7401';
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            var content = document.createTextNode('+');
            li.appendChild(content);
            li.style.color = 'blue';
            li.style.fontFamily = 'sans-serif';
            event.target.style.fontFamily = 'Impact';
            ul.appendChild(makeClick(li, shoot.children, shoot.children.length-1));
            event.target.appendChild(ul);
            console.log(TREE_DATA);
        },{once:true});
        return self;
    }

    function makeClick(self, shoot, n){
      //  var closure = n
        self.addEventListener('click',function(){
            shoot.splice(shoot.length-1, 0, { name : 'branch'});
            var baby = event.target.parentNode.children;
            var li = document.createElement('li');
            var content = document.createTextNode('branch');
            li.appendChild(content);
            li.style.fontFamily = 'sans-serif';
            li.style.color = 'green';
            //li.style.color = "green";
            event.target.parentNode.insertBefore(makeDblclick(li, shoot[n]), event.target.parentNode.childNodes[baby.length - 1]);
            console.log(TREE_DATA);
            n++;
        });
        return self;
    }

    for(var i = 0; i < x.children.length; i++){
        if('children' in x.children[i]){
            ul.appendChild(makeTree(x.children[i]));
        }
        else{
            if(x.children[i].name === '+'){
                makeClick(makeDeepTree(x.children[i]), x.children, i);
            }
            else{
                makeDblclick(makeDeepTree(x.children[i]), x.children[i]);
            }
        }
    }

    return li;
}

var ulList = document.getElementsByTagName('ul');
ulList[0].appendChild(makeTree(data));

/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
