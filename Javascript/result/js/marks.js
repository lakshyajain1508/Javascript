function marks(){

    var eng = parseInt(document.getElementById("english").value);
    var phy = parseInt(document.getElementById("physics").value);
    var chem = parseInt(document.getElementById("chem").value);
    var math = parseInt(document.getElementById("maths").value);
    var comp = parseInt(document.getElementById("comp").value);

    add = eng + phy + chem + math + comp;
    perc = (add*100/600);
    document.write("Total Marks = " +add +"<br>");
    document.write("Total Percentage = " +perc +"%" +"<br>");
    document.write("Result = ");
    
    if(perc>80)
    {
        document.write("Grade A");
    }
    else if(perc>60)
    {
        document.write("Grade B");
    }
    else{
        document.write("Grade C");
    }

    
}
