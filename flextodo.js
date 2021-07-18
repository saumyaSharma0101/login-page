var list_items = [
//   "Buy a new gaming laptop",
//   "Complete a previous task",
//   "Create video for YouTube",
//   "Create a new portfolio site",
];

const addItem = () => {
  document.querySelectorAll(".row").forEach((e) => e.remove());

  var item = document.getElementById("add").value;
  
  document.getElementById("add").value = "";

  list_item(item);
};
console.log(list_items);

function list_item(x) {
  if (x != undefined && x != "") {
    list_items.push(x);
  }

 list_items.slice(0,4).map((item, index) => {
    var divElement = document.createElement("div");
    var list = document.createElement("li");
    var btn = document.createElement("button");

    //var a = document.querySelector("ul");
    var a = document.getElementById("todoList");
    //console.log(a);
    a.appendChild(divElement);
    //console.log(div);
    divElement.className = "row";
    document.getElementsByClassName("row")[index].appendChild(list);
    list.className = "list";
    document.getElementsByClassName("row")[index].appendChild(btn);
    btn.className = "button";
    list.innerText = item;
    btn.innerText = "-";
    console.log(document.getElementsByClassName("row"));
  });

  //console.log(addList);
}

list_item();

function clearAll(){
    var z = document.querySelectorAll(".row");
    z.forEach(c => c.remove());
}
