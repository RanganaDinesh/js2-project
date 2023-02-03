//>>>>>>>>>>>> POPUP  OPEN FUNCTION <<<<<<<<<<<<<<<<<<<<<
// "use strict";


function openPopup() {

    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("blur").style.visibility = "visible";
    document.getElementById("blur").style.filter = "blur(5px)"; 
   
    document.getElementById("window").style.filter = "blur(5px)"; 
    document.getElementById("remove").style.display = "none";
}

//>>>>>>>>>>>>>>>>>>>>>>POPUP CLOSING FUNCTION <<<<<<<<<<<<<<<<
function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
  
    
  document.getElementById("blur").style.filter = "none";
  document.getElementById("window").style.filter = "none"; 
  
    
}
//>>>>>>>>>>>>>>>>>>>>>> INNER POPUP CLOSING FUNCTION <<<<<<<<<<<<<<<<
function closePopup1() {
    document.getElementById("popup1").style.visibility = "hidden";
  
    
    document.getElementById("blur").style.filter = "none";
    
}



function dynamicId() {
  const did = `id-${+new Date()}`;
  return did;
}


//?>>>>>>>>>>>>>>>>>>>>>>>>>>>


function dynamicDiv(id){
  var newDiv = document.createElement("div")
  newDiv.classList.add("cards")
 
  newDiv.id = id
  newDiv.style.margin = "60px"
  newDiv.style.marginTop = "10px"
  newDiv.style.position = "relative"
  newDiv.style.height = "300px"
  newDiv.style.width = "200px"
  newDiv.style.backgroundColor = "white"
  newDiv.style.border = "1px solid black"
  newDiv.style.borderRadius = "15px"
  newDiv.style.textAlign = "center"
  newDiv.style.flexWrap="wrap"
  newDiv.style.color = "orangered"
  newDiv.style.fontSize = "25px"
  newDiv.style.justifyContent="space-around"
  newDiv.style.marginLeft="100px"
  return newDiv;
}
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>. LIST OF ELEMENTS APPENDING A LI CHILDS
function cardspopup() {
  document.getElementById("blur").style.filter = "none";
  document.getElementById("window").style.filter = "none";
  document.getElementById("popup").style.visibility = "hidden";
 
  let id = dynamicId()
  var newDiv = dynamicDiv("id");
  // newDiv.id = id
  // newDiv.style.margin = "60px"
  // newDiv.style.marginTop = "10px"
  // newDiv.style.position = "relative"
  // newDiv.style.height = "300px"
  // newDiv.style.width = "200px"
  // newDiv.style.backgroundColor = "white"
  // newDiv.style.border = "1px solid black"
  // newDiv.style.borderRadius = "15px"
  // newDiv.style.textAlign = "center"
  // newDiv.style.flexWrap="wrap"
  // newDiv.style.color = "orangered"
  // newDiv.style.fontSize = "25px"
  // newDiv.style.justifyContent="space-around"
  // newDiv.style.marginLeft="100px"
//>>>>>>>>>>>>>>>>>> INPUT DATA <<<<<<<<<<<<<,
 

  var pTag = document.createElement("p");
  pTag.classList.add("title", id);
  pTag.textContent = textdata.value;
  // pTag.addEventListener("click", function (obj_new_page) {
  //   new_page_fun(obj_new_page);
  // });
  newDiv.append(pTag);
 


/// >>>>>>>>>>>>>..HR.....<<<<<<<<<<<<<<<<

  var hr = document.createElement("hr");
  hr.classList.add("hr");
  newDiv.appendChild(hr);
  
  document.getElementById("cards").appendChild(newDiv);
  cards.style.display = "flex"
  cards.style.justifyContent = "center"
  cards.style.flexWrap = "wrap"
  
  var trash = document.createElement("span");
  trash.classList.add("delete1", "trash1", id);

  var delete1 = document.createElement("i");
  delete1.classList.add("fa-solid","fa-trash-can","delete1", id);// class="fa fa-trash-o"
  trash.appendChild(delete1);
  newDiv.append(trash);///changes>>>>>>>>>>>>>>>>

  const deleteButton = newDiv.querySelector(".trash1");
  deleteButton.addEventListener("click", function () {
    newDiv.remove();
  });

  delete1.style.backgroundColor="white"
  delete1.style.color="red"
  delete1.style.fontSize = "20px"
  delete1.style.padding = "7px"
  delete1.style.marginTop = "150px"
  delete1.style.marginLeft = "100px"

 
  
  var span1 = document.createElement("span");
  span1.classList.add("Myplus1", "mark",id);
  var Myplus1 = document.createElement("i");
  Myplus1.classList.add("fas","fa-plus-circle","Myplus1", id);
  // newDiv.append(Myplus1);
  Myplus1.style.fontSize = "20px"
  newDiv.append(Myplus1);
  span1.append(Myplus1);
  newDiv.append(span1);

  span1.onclick = function () {
    document.getElementById("popup1").dataset.parent = id;
    document.getElementById("popup1").style.visibility = "visible";
    document.getElementById("blur").style.visibility = "visible";
    document.getElementById("blur").style.filter = "blur(5px)";
  };
  

  // >>>>>>>>>>>>>>>>>>>>>ANOTHERE WINDOW <<<<<<<<<<<<<<<<<
  pTag.addEventListener("click", function () {
    document.getElementById("window").style.filter = "none";
    document.getElementById("overlap").style.visibility = "hidden";
    document.getElementById("window").style.visibility = "visible";
    document.getElementById("sends").style.visibility = "none";
    document.getElementById("blur").style.display = "none";
    let id = dynamicId()
    var newDiv = dynamicDiv("id");
   
    var pTag = document.createElement("p");
    pTag.classList.add("title", id);
    pTag.textContent = textdata.value;
    
    pTag.addEventListener("click", function (obj_new_page) {
      new_page_fun(obj_new_page);
    });
   
    newDiv.append(pTag);
    windowcard.innerHTML = "";
    windowcard.append(newDiv);
    newDiv.append(plan)
    
  })
  
  newDiv.appendChild(plan)
 


}
//>>>>>>>>>>>>>>>>>>>   inner text plans <<<<<<<<<<<<<<<<<<<
function newElement1(ele) {
  let theDivID = ele.parentElement.parentElement.dataset.parent;
    document.getElementById("blur").style.filter = "none";
    document.getElementById("popup1").style.visibility = "hidden";

   
    //console.log();
    var li = document.createElement("li");
    let id = dynamicId();
    li.id = id;
    // li.classList.add("list", id);
    var inputValue = document.getElementById("textdata1").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("plan").appendChild(li);
    }
    document.getElementById("textdata1").value = " ";
  
    var span = document.createElement("span");
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById(theDivID).appendChild(li);
  
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>> BACK TO MAIN WINDOW <<<<<<<<<<<<<<<<<<<<<<<<<<<

function backtowindow() {
  // document.getElementById("window").style.filter = "none";
  document.getElementById("overlap").style.visibility = "visible";
  document.getElementById("window").style.visibility = "hidden";
  document.getElementById("sends").style.visibility = "visible";
  document.getElementById("blur").style.display = "block";
 
}
  


