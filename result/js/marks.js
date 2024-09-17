function marks(event){
    event.preventDefault();
    var eng = parseInt(document.getElementById("english").value);
    var phy = parseInt(document.getElementById("physics").value);
    var chem = parseInt(document.getElementById("chem").value);
    var math = parseInt(document.getElementById("maths").value);
    var comp = parseInt(document.getElementById("comp").value);

    add = +eng + +phy + +chem + +math + +comp;
    perc = (add*100/600);
    document.getElementById("add").innerHTML = add;
    document.getElementById("perc").innerHTML = perc;
    total_grade = document.getElementById("grade");
    


    if(perc>80)
    {
        total_grade.innerHTML = "Grade A";
    }
    else if(perc>60)
    {
        total_grade.innerHTML = "Grade B";
    }
    else{
        total_grade.innerHTML = "Grade C";
    }

    
}
