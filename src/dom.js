//根据题目写的代码  不够细节
window.dom = {
    find(selector){
       return document.querySelectorAll(selector)
    },

    style(node,name,value){
        node.style[name] = value
    },

    each(nodeList , fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    }

}
