var locations = [];



//get weather using api
function getWeather(spot){
    let city = spot || document.getElementById(searchText).value();
    document.querySelector("#searchText").value = "";
    let getApi = '';
    fetch(getApi)

    .then((res)=>res.json())
    .then (data =>{
        $(".weatherInfo").empty();
        $(".weatherInfo").append('<section> id ="box1" class="box1"><div id = "city" class= "title is -2"> ${data.city.name} </div></section>')
        document.getElementById("city").textContent = data.city.name;
        console.log(data);
    });
}

function dailyData(data){
    var days = data.daily.slice(0,5);
    days.forEach(day=> {
        var xTime = day.dt;
        var date = new Date(xTime * 1000);
        $("#dayHighlight").append(
            'div class = "<div class="card has-background-link "><h2 class="card-header-title">${date}</h2><p>Temperature: ${day.temp.day}</p><p>getWeather: "/></p><p>Humidity: ${day.humidity}</p><p>UV index: ${day.uvi}</p></div>'
        );
    })
    console.log(data)
}





function mainDayCard(data){
    $(".box1").append(
        `<div> Temperature: ${data.current.temp}</div>
       <div> Wind: ${data.current.wind_speed}</div>
       <div> Humidity: ${data.current.humidity}</div>
       <div id = "uvIndex"> UV Index: ${data.current.uvi}</div>`
      );
       var uv = document.getElementById('uvIndex');
       if(data.current.uvi <4){
       $("#uvIndex").css('background-color','green')}
       else if(data.current.uvi >4 && data.current.uvi <7){
       $("#uvIndex").css('background-color','yellow')}
       else{
       $("#uvIndex").css('background-color','red')}
       $("#uvIndex").css('width', '15%')
}

function clearMainDay(){
    $(".weatherInfo").empty();
}

document.getElementById("searchForm").addEventListener("click",function(event){
    clearMainDay();
    console.log("Button has been clicked")
    getWeather();
});