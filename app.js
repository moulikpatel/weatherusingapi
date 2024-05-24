let input=document.getElementById("search");
let btn=document.querySelector("button i");
let api="https://api.weatherapi.com/v1/current.json?key=06670a77ce9d47a4a0b132611242405&q=";
btn.addEventListener('click',async ()=>{
    console.log("working");
    let val=input.value
    let url=`${api}${val}`; 
    let response =await fetch(url);
    let data =await response.json();
    let locame=data.location.name;
    let icon=data.current.condition.icon;
    let temp=data.current.temp_c;
    let wind=data.current.wind_kph;
    let cloud=data.current.cloud;
    let res=document.getElementById("resu");
    res.innerHTML=` <img src="${icon}" alt="">
    <h1>${temp}°C</h1>
    <h3>${locame}</h3>
    <div class="bottom">

    <div class="humidity">
        <i class="fa fa-cloud"></i><p>${cloud}</p>

    </div>
    <div class="wind">
        <i class="fa fa-wind"></i><p>${wind}<span>KMPH</span></p>

    </div>
    </div>`
})

