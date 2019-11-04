const form = [
    { name:"Prénom", type: "text"}, 
    { name: "Nom", type: "text"},
    { name: "Téléphone", type: "tel"},
    { name: "Email", type: "email"}
];
for (const el of form) {
    const ipt = $('<div><label>' + 
        el.name + 
        '</label><input type="' + 
        el.type + 
        '" placeholder="Tapez ici..." /></div>');
    $("body").append(ipt);
}
$("<button>Enregistrer</button>").appendTo("body");

$("button").click(function () {
    console.log("toto");
});

$("label").after("*");
$("input[type='tel']").parent().remove()