// before
var title = window.document.getElementById("page-title");
title.addEventListener("click", function(e) {
  e = e || window.event;
  var thisElement = e && e.target;
  if (thisElement) {
    var isBig = thisElement.style.textTransform === "uppercase";
    thisElement.style.textTransform = isBig ? "capitalize" : "uppercase";
  }
});

// after
$("#page-subtitle").click(function() {
  var isBig = $(this).css("text-transform") === "uppercase";
  $(this).css({ "text-transform": isBig ? "capitalize" : "uppercase" });
});

// before
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = () => {
  var response = JSON.parse(xhr.responseText);
  window.document.getElementById("page-title").innerText = response.title;
};
xhr.onerror = () => console.log(xhr.statusText);
xhr.send();

// after
$.get("https://jsonplaceholder.typicode.com/posts/1").then(data => {
  $("#page-subtitle").text(data.title);
});

// append anything to it, or even remove it
$("tr:nth-child(1)").remove();
$("tr:nth-child(1)").append("<td>javascript</td>");
$("tr:nth-child(2)").append("<td>typescript</td>");
var td = $("<td>purescript</td>");
$("tr:nth-child(3)").append(td);
$("table").append("<tr><td>4.</td></tr>");
var language = $("#langage");
var td4 = $("<td></td>").append(language);
$("tr:nth-child(4)").append(td4);

// apply any css property to it
$("tr:nth-child(odd)").css("background-color", "#999999");
