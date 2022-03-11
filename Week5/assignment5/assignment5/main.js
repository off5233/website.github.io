var numcommand = 1;

function postFunction() 
{ 
    var TEXTinput = document.getElementById("text1").value;
    var topic1 = document.getElementById("topic1");
    var command1 = document.getElementById("comment1");
    var command2 = document.getElementById("comment2");
    if(numcommand == 1){  topic1.innerText = TEXTinput;  }
    else if(numcommand == 2){  command1.innerText = "command1 : "+TEXTinput;  }
    else if(numcommand == 3){  command2.innerText = "command2 : "+TEXTinput;  }
    else{  alert("maxcommand"); }

    numcommand++;

}

function clearFunction() 
{ 
    var topic1 = document.getElementById("topic1");
    var command1 = document.getElementById("comment1");
    var command2 = document.getElementById("comment2");
    topic1.innerText = "";  
    command1.innerText = "";  
    command2.innerText = "";  
    numcommand = 1;

}
