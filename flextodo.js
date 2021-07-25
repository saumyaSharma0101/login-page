var addItems = ["Gym", "Pay the Bills"];
var noOfTasks = 0;
var userInp = document.getElementById("userInput");

var addbtn = document.getElementById("add");
var clearAll = document.getElementById("clear");

todo();

addbtn.addEventListener("click", addList);
function addList() {
  document.querySelectorAll(".singleItem").forEach((e) => e.remove());

  if (
    userInp.value != undefined &&
    userInp.value != "" &&
    !addItems.includes(userInp.value)
  ) {
    addItems.push(userInp.value);
    noOfTasks++;
  }

  userInp.value = "";
  todo();
}

function todo() {
  addItems.slice(0, 4).forEach(function (item, index) {
    var divElement = document.createElement("div");
    divElement.classList.add("singleItem", "input-group");

    var listItem = document.createElement("input");

    listItem.classList.add(
      "items",
      "form-control",
      "border-0",
      "border-bottom"
    );
    listItem.style.marginLeft = "30px";
    listItem.style.color = "grey";
    listItem.style.fontWeight = "bold";
    listItem.style.background = "white";
    listItem.id = index;
    listItem.setAttribute("disabled", "true");
    var buton = document.createElement("button");
    buton.classList.add(
      "btn",
      "btn-outline-warning",
      "border-0",
      "border-bottom",
      "rounded-circle"
    );
    buton.style.marginLeft = "40px";
    buton.id = "btn" + index;

    var edit = document.createElement("button");
    edit.classList.add(
      "editbtn",
      "btn",
      "btn-outline-info",
      "border-0",
      "border-bottom",
      "rounded-circle"
    );

    edit.id = "edit" + index;
    edit.style.marginRight = "30px";
    listItem.value = item;
    buton.innerText = "Delete";

    edit.innerText = "Edit";

    edit.addEventListener("click", () => {
      listItem.disabled = false;
      listItem.focus();
      //listItem.select();
      listItem.addEventListener("keyup", function (e) {
        addItems[index] = listItem.value;
        if (e.keyCode == 13) {
          listItem.disabled = true;
        }
      });

      // userInp.value = document.getElementById(index).innerText;
      // addItems.splice(index, 1);
      // document.getElementById(index).remove();
      // document.getElementById(`btn${index}`).remove();
      // document.getElementById(`edit${index}`).remove();
      // noOfTasks--;
      // document.getElementById("tasks").innerText = noOfTasks;
    });

    buton.addEventListener("click", () => {
      addItems.splice(index, 1);
      // document.getElementById(index).remove();
      // document.getElementById(`btn${index}`).remove();
      // document.getElementById(`edit${index}`).remove();
      noOfTasks--;
      document.getElementById("tasks").innerText = noOfTasks;
      document.querySelectorAll(".singleItem").forEach((e) => e.remove());
      todo();
    });

    document.querySelector(".list").appendChild(divElement);
    divElement.appendChild(listItem);
    divElement.appendChild(buton);
    divElement.appendChild(edit);
  });

  document.getElementById("tasks").innerText = noOfTasks + 2;
}

clearAll.addEventListener("click", clear);
function clear() {
  document.querySelectorAll(".singleItem").forEach((e) => e.remove());
  addItems.splice(0, addItems.length);
  //addItems = [];
  noOfTasks = 0;
  document.getElementById("tasks").innerText = noOfTasks;
}

// var list_items = [];

// const addItem = () => {
//   document.querySelectorAll(".row").forEach((e) => e.remove());
//   var item = document.getElementById("add").value;
//   document.getElementById("add").value = "";
//   list_item(item);
// };

// function list_item(x) {
//   if (x != undefined && x != "") {
//     list_items.push(x);
//   }

//  list_items.slice(0,4).map((item, index) => {
//     var divElement = document.createElement("div");
//     var list = document.createElement("li");
//     var btn = document.createElement("button");

//     //var a = document.querySelector("ul");
//     var a = document.getElementById("todoList");
//     //console.log(a);
//     a.appendChild(divElement);
//     //console.log(div);
//     divElement.className = "row";
//     document.getElementsByClassName("row")[index].appendChild(list);
//     list.className = "list";
//     document.getElementsByClassName("row")[index].appendChild(btn);
//     btn.className = "button";
//     list.innerText = item;
//     btn.innerText = "-";
//     //console.log(document.getElementsByClassName("row"));
//   });

//   //console.log(addList);
// }

// list_item();

// function clearAll(){
//     var z = document.querySelectorAll(".row");
//     z.forEach(c => c.remove());
//     list_items = [];
// }
