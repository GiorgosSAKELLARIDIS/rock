function getRock(){
    let value = Math.floor(Math.random() * 3)+1;
    if (value == 1)
    {return("scissors")}
    else if(value==2)
    {return("paper")}
    else
    {return("rock")}
}


function game(){
    const    value1 = document.getElementById('selection').value;
    console.log(value1);
    let comp = getRock()
    console.log(comp);

    if (value1=="paper"){
        if (comp=="paper")
        {console.log("draw")}
        if (comp=="scissors")
        {console.log("you lost")}
        if (comp=="rock")
        {console.log("you won")}
    }
    if (value1=="rock"){
        if (comp=="paper")
        {console.log("you lost")}
        if (comp=="scissors")
        {console.log("you won")}
        if (comp=="rock")
        {console.log("draw")}
    }
    if (value1=="scissors"){
        if (comp=="paper")
        {console.log("you won")}
        if (comp=="scissors")
        {console.log("draw")}
        if (comp=="rock")
        {console.log("you lost")}
    }
}