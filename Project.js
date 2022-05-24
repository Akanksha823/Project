console.log("This is notes app.");

let Addbtn = document.getElementById('Addbtn');
Addbtn.EventListener = ("click",function(e){

    let Addtxt = document.getElementById('Addtxt');
    let notesElement = localStorage.getItem("notes")

    if(notes == null){
        notesobj = [];
    }
    else{
        notesObj =  JSON.parse(notes);
    }

    notesObj.push (Addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    Addtxt.value ="";
    console.log(notesObj);
    })