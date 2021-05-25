// 将占位符图片替换为点击的链接中的图片
// DOM 方法
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description")
  placeholder.setAttribute("src", source); // 改变占位符的 src
  description.firstChild.nodeValue = text
}

// 获取 body 元素的全体子元素
// function countBodyChildren() {
//   var body_element = document.getElementsByTagName("body")[0];
//   alert(body_element.childNodes.length) // 15 childNodes属性返回的数组包含所有类型的节点，而不仅仅是元素节点
// }

// window.onload = countBodyChildren;