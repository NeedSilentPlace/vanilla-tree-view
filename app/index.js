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

function test1(x){                                         // children이 있는 object의 name 값
    var li = document.createElement('li');
    var content = document.createTextNode(x.name);
    var ul = document.createElement('ul');
    li.appendChild(content);
    li.appendChild(ul);
    x.children.push({name: '+'});

    function test2(x){                                         //name만 있는 object의 value
        var li = document.createElement('li');
        var content = document.createTextNode(x.name);
        li.appendChild(content);
        ul.appendChild(li);
        return li;
    }

    function dblclick(self, shoot){
        self.addEventListener('dblclick',function(){
            shoot.children = [{name : '+'}];
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            var content = document.createTextNode('+');
            li.appendChild(content);
            ul.appendChild(click(li, shoot.children, shoot.children.length-1));
            this.appendChild(ul);
            console.log(TREE_DATA);
        },{once:true});
        return self;
    }

    function click(self, shoot, n){
      //  var closure = n
        self.addEventListener('click',function(){
            shoot.splice(shoot.length-1, 0, { name : 'branch'});
            var baby = this.parentNode.children;
            var li = document.createElement('li');
            var content = document.createTextNode('branch');
            li.appendChild(content);
            //li.style.color = "green";
            this.parentNode.insertBefore(dblclick(li, shoot[n]), this.parentNode.childNodes[baby.length - 1]);
            console.log(TREE_DATA);
            n++;
        });
        return self;
    }

    for(var i = 0; i < x.children.length; i++){
        if('children' in x.children[i]){
            ul.appendChild(test1(x.children[i]));
        }
        else{
            if(x.children[i].name === '+'){
                click(test2(x.children[i]), x.children, i);
            }
            else{
                dblclick(test2(x.children[i]), x.children[i]);
            }
        }
    }

    return li;
}

var ulList = document.getElementsByTagName('ul');
ulList[0].appendChild(test1(data));

/* DO NOT REMOVE */
module.hot.accept();
/* DO NOT REMOVE */
