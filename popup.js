// $(function () {
//   $('#submitbtn').onclick(function() {
//     window.alert("Submit btn is clicked");
//   });
// });

function savebtnClick() {
    document.getElementById('submitbtn').style.backgroundColor = "Red";
  //return true;
}
document.getElementById('submitbtn').onclick = savebtnClick;


function showbookmarks() {
chrome.bookmarks.getTree(function(itemTree){
  //localStorage.setItem('bookmarkstree', JSON.stringify(obj));
  console.log(JSON.stringify(itemTree));
  //document.getElementById('tree1').tree({data: itemTree});
    itemTree.forEach(function(item){
        processNode(item);
    });
});
}

function processNode(node) {
    // recursively process child nodes
    if(node.children) {
        node.children.forEach(function(child) { processNode(child); });
    }

    // print leaf nodes URLs to console
    if(node.url) {} //console.log(node.url); }
}

document.getElementById('showbookmarksBtn').onclick = showbookmarks;

document.body.style.width = '500px';
document.body.style.height = '300px';
