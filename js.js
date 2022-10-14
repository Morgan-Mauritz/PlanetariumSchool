var planetDescription = document.getElementById("planetDescription");
var planetName = document.getElementById("planetName");
var planets = document.getElementsByClassName('planetContainer');
var planetDescriptionText = document.getElementById('planetText');

async function getPlanetInfo()
{
    let response = await fetch('./planetInfo.json');
    return await response.json();
}

async function focusPlanet(object)
{
    var planetInfo = await getPlanetInfo();

    console.log(planetInfo.planets);

    for (var x = 0; x < 6; x++)
    {
        if(planetInfo.planets[x].name.toUpperCase() == object.id.toUpperCase())
        {
            planetName.textContent = planetInfo.planets[x].name;
            planetDescription.textContent = planetInfo.planets[x].description;
        }
    }

    for(const planet of planets)
    {
        if(planet.id != object.id){planet.style.visibility = "hidden";}
    }

    object.classList.add("focusPlanet");
    object.classList.remove("planetHoverEffect");
    
    planetName.style.display = "block";
    planetDescription.style.animation="openBox 3s forwards";
    planetDescription.style.animationDelay = "1000ms"


    planetName.style.animation="fadeIn 2s";

    document.getElementById("backButton").style.visibility = "visible";
    document.getElementById("articleContainer").style.visibility = "visible";
    document.getElementById("header").style.visibility = 'hidden';

    return;
}

function addPlanetsBack()
{
    var planets = document.getElementsByClassName('planetContainer');

    planetDescription.style.animation = "";
    planetName.style.animation = "";

    planetName.style.display = "none";

    planetDescription.style.maxHeight = "0px";
    planetDescription.style.padding = "0px";
    planetDescription.style.border = "0px";
    

    for(const planet of planets)
    {
        if(planet.classList.contains("focusPlanet")){
            planet.classList.remove("focusPlanet");
        }
        if(planet.classList.contains("planetHoverEffect")){}
        else{
            planet.classList.add("planetHoverEffect");
        }

        planet.style.visibility = "visible";
        
    }

    document.getElementById("backButton").style.visibility = "hidden";
    document.getElementById("header").style.visibility = 'visible';
    document.getElementById("articleContainer").style.visibility = "hidden";
}