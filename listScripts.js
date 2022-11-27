$(function(){

    let myList = localStorage["list"];
    myList = JSON.parse(myList);
    localStorage.removeItem("list");
    for(let i =0; i < myList.length; i++){
        $("#printedList").append(
            "<li>" + myList[i] + "</li>"
        )
    }



})