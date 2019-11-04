/* var imgs = $("img");
$("#hate-box").append(imgs) */
const loveBox = $("#love-box");
const hateBox = $("#hate-box") 
loveBox.append($(".image0"));
loveBox.append($(".image1"));
const imgIds = ["#img2", "#img3", "#img4"]
    .map(function (id){ return $(id);
});
hateBox.append(imgIds);
loveBox.append($(".image5"));
hateBox.append($(".image6"));
hateBox.append($(".last-image[title='image7']"));
loveBox.append($(".last-image[src='images/8.jpg']"));
hateBox.append($("img:last-of-type"));

$("#love-box").children().addClass("toto");

const h3 = $("<h3>tot titi</h3>");

hateBox.prepend(h3);

loveBox.prepend(h3);
h3.text("dodo")
$("#img3").remove();
$(".image5").css("border", "3px dotted gold");
h3.appendTo("body")
$(".image5").appendTo(hateBox);
$("body").append("<div>toto</div>")

