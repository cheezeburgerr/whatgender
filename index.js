const male = document.getElementById("male");
const female = document.getElementById("female");
let img = document.createElement("IMG");

document.getElementById("myBtn").onclick = function(){
    if(male.checked){
        document.getElementById("output").innerHTML = "";
        document.getElementById("question").innerHTML = "What gender are you attracted to?";
        img.setAttribute("src", "https://i1.sndcdn.com/artworks-000022718031-u6l68x-t500x500.jpg")
        img.setAttribute("width", "304");
        document.getElementById("output").appendChild(img);
    }
    else if(female.checked){
        document.getElementById("output").innerHTML = "";
        document.getElementById("question").innerHTML = "What gender are you attracted to?";
        img.setAttribute("src", "https://i.imgflip.com/7c2nir.jpg")
        img.setAttribute("width", "500");
        document.getElementById("output").appendChild(img);
    }
    else{
        document.getElementById("output").innerHTML = "Please select your gender";
    }
}
