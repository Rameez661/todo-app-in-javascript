var tablee = document.getElementById("table");
function add() {
  var rollnoo = document.getElementById("rollno");
  var namee = document.getElementById("name");
  var classs = document.getElementById("class");

  var tr = document.createElement("tr");
  //   tr.setAttribute("class", "delete");
  //   tr.setAttribute("class", "delete");

  //   var td = document.createElement("td");

  var td1 = document.createElement("td");
  td1.setAttribute("class", "td1");
  var td2 = document.createElement("td");
  td2.setAttribute("class", "td2");
  var td3 = document.createElement("td");
  td3.setAttribute("class", "td3");

  var td4 = document.createElement("button");
  var td5 = document.createElement("button");

  var btndelete = document.createTextNode("Delete");
  var btnedit = document.createTextNode("Edit");

  td4.appendChild(btnedit);
  td4.setAttribute("class", "editt");
  td4.setAttribute("onclick", "editt(this)");
  td5.appendChild(btndelete);
  td5.setAttribute("class", "deletee");
  td5.setAttribute("onclick", "deletee(this)");

  //   tr.appendChild(td1);

  //   tr.appendChild(td);

  //   tr.appendChild(td1);
  //   tr.appendChild(td2);
  //   tr.appendChild(td3);

  var rollnooo = document.createTextNode(rollnoo.value);
  var nameee = document.createTextNode(namee.value);
  var classss = document.createTextNode(classs.value);

  td1.appendChild(rollnooo);
  td2.appendChild(nameee);
  td3.appendChild(classss);
  td4.appendChild(btnedit);
  td5.appendChild(btndelete);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  tablee.appendChild(tr);

  rollnoo.value = "";
  namee.value = "";
  classs.value = "";
}
function deletee(e) {
  e.parentNode.remove();
}
function editt(e) {
  var eediitt = prompt("Update Roll No.", e.parentNode.childNodes[0].innerHTML);
  e.parentNode.childNodes[0].innerText = eediitt;

  var eedditt = prompt("Update Name", e.parentNode.childNodes[1].innerHTML);
  e.parentNode.childNodes[1].innerText = eedditt;

  var eeddiit = prompt("Update Class", e.parentNode.childNodes[2].innerHTML);
  e.parentNode.childNodes[2].innerText = eeddiit;
}
function deleteall() {
  table.innerHTML = "";
}
