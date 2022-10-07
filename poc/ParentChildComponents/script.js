let parent = document.getElementsByClassName('parent')[0];
let childs = document.querySelectorAll('.child');

//  faster
let getChildFromParent = parent.querySelectorAll('.child')

// getting child from parent tag
// console.log(parent.children)

// console.log(parent.getElementsByClassName('.b2'))



// console.log(childs, getChildFromParent)
// id---> #

console.log(parent.getBoundingClientRect())

// parent[0].style.height = '1000px'
// console.log(parent[0].getBoundingClientRect().height)


// -------------------------------------------------------------


// getting parent from child components

let firstChild = childs[0];
// console.log(firstChild.parentElement)

// -------------------------------------------------------------


// for(let i=0;i<childs.length;i++)
// console.log(childs[i])
