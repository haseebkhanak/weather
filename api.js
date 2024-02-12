const citiesInPakistan = [
    "_",
    "Islamabad",
    "Karachi",
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Gujranwala",
    "Hyderabad",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujrat",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Larkana",
    "Sheikhupura",
    "Jhang",
    "Rahim Yar Khan",
    "Mardan",
    "Kasur",
    "Dera Ghazi Khan",
    "Mirpur Khas",
    "Nawabshah",
    "Kamoke",
    "Okara",
    "Gilgit",
    "Chiniot",
    "Sadiqabad",
    "Burewala",
    "Jacobabad",
    "Muzaffargarh",
    "Muridke",
    "Jhelum",
    "Shikarpur",
    "Hafizabad",
    "Kohat",
    "Khanewal",
    "Dadu",
    "Gojra",
    "Mandi Bahauddin",
    "Tando Allahyar",
    "Daska",
    "Khairpur",
    "Dera Ismail Khan",
    "Charsadda",
    "Kandhkot",
    "Hasilpur",
    "Arifwala",
    "Attock",
    "Chichawatni",
    "Bhakkar",
    "Mianwali",
    "Jaranwala",
    "Mingora",
    "Chishtian",
    "Dera Allahyar",
    "Pasrur",
    "Hub",
    "Lodhran",
    "Shahdadkot",
    "Muree",
    "Zahir Pir",
    "Muzaffarabad",
    "Kot Addu",
    "Turbat",
    "Dera Murad Jamali",
    "Parachinar",
    "Gwadar",
    "Kohlu",
    "Ghotki",
    "Khanpur",
    "Leiah",
    "Tando Adam",
    "Hala",
    "Tando Muhammad Khan",
    "Umerkot",
    "Kotri",
    "Dera Bugti",
    "Chilas",
    "Khushab",
    "Gujar Khan",
    "Tando Jam",
    "Rajanpur",
    "Jalalpur Jattan",
    "Karak",
    "Kundian",
    "Tank",
    "Naushahro Firoz",
    "New Mirpur City",
    "Kashmor",
    "Matiari",
    "Thatta",
    "Badin",
    "Sibi",
    "Dera Allah Yar",
    "Kamalia",
    "Usta Muhammad",
    "Harunabad",
    "Samundri",
    "Shahdadpur",
    "Tando Allahyar",
    "Pindi Gheb",
    "Dipalpur",
    "Lehri",
    "Sindhri",
    "Qila Saifullah",
    "Bahawalnagar",
    "Pishin",
    "Sanghar",
    "Kandiaro",
    "Zhob",
    "Jam Sahib",
    "Haripur",
    "Moro",
    "Shahkot",
    "Dargai",
    "Jhang Sadr",
    "Ahmadpur East",
    "Kot Radha Kishan",
    "Mansehra",
    "Loralai"
];

let sorted_cities=[]
for(let i=0;i<citiesInPakistan.length-1;i++)
{
    for(let j=i+1;j<citiesInPakistan.length;j++)
    {
        if(citiesInPakistan[i]>citiesInPakistan[j])
        {
            let temp=citiesInPakistan[i]
            citiesInPakistan[i]=citiesInPakistan[j]
            citiesInPakistan[j]=temp
        }
    }
}

sorted_cities=[...citiesInPakistan]

let select=document.querySelector("#city")
let city=document.querySelector(".container #cities")

for(let citiesName of sorted_cities)
{
    let option=document.createElement("option")
    option.values=citiesName
    option.innerHTML=citiesName
    select.appendChild(option)
    
    if(citiesName==="_")
    {
        option.selected=true
    }

}

let con=document.querySelector(".con")
let main3=document.querySelector(".main3")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let temp=document.querySelector(".temp")
let precip=document.querySelector(".precip")
let condition=document.querySelector(".condition")
let humidity=document.querySelector(".humidity")
let feelslike=document.querySelector(".feelslike")
let max=document.querySelector(".max")
let min=document.querySelector(".min")
let loc=document.querySelector(".loc")
let wind=document.querySelector(".wind")
let one=document.querySelector(".one")

let baseurl="https://api.weatherapi.com/v1/forecast.json?key=afd1118f873b47bf99d170312231508&q="
async function currentForecast()
{   
    if(city.value==="" || !sorted_cities.includes(city.value))
    {
        alert("Please provide correct input")
        return
    }

else{
    let display=false
    if(display==false)
    {

    one.innerHTML = ""

    con.style.display="block"
    temp.style.display="block"
    loc.style.display="block"
    feelslike.style.display="block"
    condition.style.display="block"
    humidity.style.display="block"
    precip.style.display="block"
    wind.style.display="block"
    max.style.display="block"
    min.style.display="block"

    let URL=`${baseurl} ${city.value}`
    let response=await fetch(URL)
    let data=await response.json()
    console.log(data)
    temp.innerHTML= ("Now "+ data.current.temp_c + "<sup>o</sup>" +"C")
    loc.innerHTML= (data.location.name)
    feelslike.innerHTML= ("Feels like: "+ data.current.feelslike_c + "<sup>o</sup>" +"C")
    condition.innerHTML= (data.current.condition.text)
    humidity.innerHTML=("Humidity: "+ data.current.humidity +"%")
    precip.innerHTML= ("Precip: "+data.current.precip_in +"%")
    wind.innerHTML=("Wind: "+data.current.wind_kph + "Km/h")
    max.innerHTML=("Max: "+data.forecast.forecastday[0].day.maxtemp_c + "<sup>o</sup>" +"C")
    min.innerHTML=("Min: "+data.forecast.forecastday[0].day.mintemp_c + "<sup>o</sup>" +"C")
    }
}
}
display=true

async function twoDaysforecast()
{
   if(city.value==="" || !sorted_cities.includes(city.value))
    {
        alert("Please provide correct input")
        return
    }

else{
    if(display==true)
    {
        one.innerHTML = ""
        con.style.display="none"
        temp.style.display="none"
        loc.style.display="none"
        feelslike.style.display="none"
        condition.style.display="none"
        humidity.style.display="none"
        precip.style.display="none"
        wind.style.display="none"
        max.style.display="none"
        min.style.display="none"
        main3.style.display="block"

        let URL=`${baseurl} ${city.value}`
        let response=await fetch(URL)
        let data=await response.json()
    
        let len=data.forecast.forecastday[0].hour.length 
        for(let i=0;i<len;i++)
        {
            one.innerHTML+=("<span style='color: black;font-size: 20px'>Time: "+data.forecast.forecastday[0].hour[i].time + "<br>")
            one.innerHTML+=("<span style='font-size: 30px'>"+data.forecast.forecastday[0].hour[i].temp_c + "<sup>o</sup>" +"C" +"<br>")
            one.innerHTML+=("<span style='font-size: 15px'>Precip: "+data.forecast.forecastday[0].hour[i].chance_of_rain + "%"+"<br>")
            one.innerHTML+=("<span style='font-size: 15px'>"+data.forecast.forecastday[0].hour[i].condition.text+"<br>")
            one.innerHTML+=("<span style='font-size: 15px'>Feeles like: "+data.forecast.forecastday[0].hour[i].feelslike_c + "<sup>o</sup>" +"C"+"<br>")
            one.innerHTML+=("<span style='font-size: 15px'>Wind: "+data.forecast.forecastday[0].hour[i].wind_kph + "km/h" +"<br>"+"<br>")
        }
        
    }
    }
    // console.log(data.forecast.forecastday[0])

}

// const codes={
//     800: "01d",
//     701:"50d"
// }

// async function icon(){
// for(let Id in codes)
// {
//     if(Id==800)
//     {
//         let pic=codes[Id]
//         let url=`https://openweathermap.org/img/wn/${pic}.png`
//         let image=document.querySelector("#img1")
//         image.src=url
//     }

//     if(Id==701)
//     {
//         let pic=codes[Id]
//         let url=`https://openweathermap.org/img/wn/${pic}.png`
//         let image=document.querySelector("#img1")
//         image.src=url
//     }
    
// }

// }

// function handleButtonClick() {
//     currentForecast();
//     icon();
// }

btn1.addEventListener("click", currentForecast);

btn2.addEventListener("click",twoDaysforecast)
// icon()
