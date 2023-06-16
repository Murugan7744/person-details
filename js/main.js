




var person = [{
    imgsrc: "images/team1.jpeg",
    head1: "Sundar Pichai",
    head2: "Pichai Sundararajan (born June 10, 1972[3][4][5]), better known as Sundar Pichai (/ˈsʊndɑːr pɪˈtʃaɪ/), is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google."
},

{
    imgsrc: "images/team2.jpeg",
    head1: "Mukesh Ambani",
    head2: "Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire businessman. He is currently the chairman and managing director of Reliance Industries, India's most valuable company by market value.[4] With an estimated net worth of $87.2 billion as of May 2023, he is the richest person in Asia and 13th richest in the world.[5][6] He was listed as one of the 100 most influential people in the world by Time magazine in 2019."
},
{
    imgsrc: "images/team3.jpeg",
    head1: "Bill Gates",
    head2: "William Henry Gates III (born October 28, 1955) is an American business magnate, investor, and philanthropist. He is best known for co-founding software giant Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being its largest until May 2014."
}]

var check = document.getElementById("btn");
var picture = document.getElementById("images");
var title = document.getElementById("title");
var detail = document.getElementById("detail");




check.addEventListener("click",function() {

var cont=Math.round(Math.random()*2);
     picture.src=person[cont].imgsrc;
     title.innerHTML=person[cont].head1;
     detail.innerHTML=person[cont].head2;        

})
