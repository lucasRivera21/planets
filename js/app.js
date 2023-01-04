//array = [name, color, source, overview[description, img, active], structure[description, img, active], surface[description, img, active], secondInfo[rotation, revolution, radius, temp], activate]
const mercuryArray = ['mercury', '#419EBB', 'https://en.wikipedia.org/wiki/Mercury_(planet)', [`Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`, '/img/planet-mercury.svg', true], [`Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`, '/img/planet-mercury-internal.svg', false], [`Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's.`, '/img/geology-mercury.png', false], ['58.6 DAYS', '87.97 DAYS', '2,439.7 KM', '430°C'], true];
const venusArray = ['venus', '#EDA249', 'https://en.wikipedia.org/wiki/Venus', [`Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`, '/img/planet-venus.svg', false], [`The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`, '/img/planet-venus-internal.svg', false], [`Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`, '/img/geology-venus.png', false], ['243 DAYS', '224.7 DAYS', '6,051.8 KM', '471°C'], false];
const earthArray = ['earth', '#6F2ED6', 'https://en.wikipedia.org/wiki/Earth', [`Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`, '/img/planet-earth.svg', false], [`Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`, '/img/planet-earth-internal.svg', false], [`The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`, '/img/geology-earth.png', false], ['0.99 DAYS', '365.26 DAYS', '6,371 KM', '16°C'], false];
const marsArray = ['mars', '#D14C32', 'https://en.wikipedia.org/wiki/Mars', [`Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`, '/img/planet-mars.svg', false], [`Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`, '/img/planet-mars-internal.svg', false], [`Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`, '/img/geology-mars.png', false], ['1.03 DAYS', '1.88 YEARS', '3,389.5 KM', '-28°C'], false];
const jupiterArray = ['jupiter', '#D83A34', 'https://en.wikipedia.org/wiki/Jupiter', [`Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`, '/img/planet-jupiter.svg', false], [`When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`, '/img/planet-jupiter-internal.svg', false], [`The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`, '/img/geology-jupiter.png', false], ['9.93 HOURS', '11.86 YEARS', '69,911 KM', '-108°C'], false];
const saturnArray = ['saturn', '#CD5120', 'https://en.wikipedia.org/wiki/Saturn', [`Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`, '/img/planet-saturn.svg', false], [`Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`, '/img/planet-saturn-internal.svg', false], [`The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.`, '/img/geology-saturn.png', false], ['10.8 HOURS', '29.46 YEARS', '58,232 KM', '-138°C'], false];
const uranusArray = ['uranus', '#1EC2A4', 'https://en.wikipedia.org/wiki/Uranus', [`Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`, '/img/planet-uranus.svg', false], [`The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`, '/img/planet-uranus-internal.svg', false], [`The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`, '/img/geology-uranus.png', false], ['17.2 HOURS', '84 YEARS', '25,362 KM', '-195°C'], false];
const neptuneArray = ['neptune', '#2D68F0', 'https://en.wikipedia.org/wiki/Neptune', [`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`, '/img/planet-neptune.svg', false], [`Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`, '/img/planet-neptune-internal.svg', false], [`Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`, '/img/geology-neptune.png', false], ['16.08 HOURS', '164.79 YEARS', '24,622 KM', '-201°C'], false];

//constructor
class Planet{
    constructor(name, color, source, overview, structure, surface, secondInfo, active){
        this.name = name;
        this.color = color;
        this.source = source;
        this.overview = overview; //[description, img, active]
        this.structure = structure; //[description, img, active]
        this.surface = surface; //[description, img, active]
        this.secondInfo = secondInfo; //[rotation, revolution, radius, temp]
        this.active = active;
    }
}

//Objects
const mercury = new Planet(...mercuryArray);
const venus = new Planet(...venusArray);
const earth = new Planet(...earthArray);
const mars = new Planet(...marsArray);
const jupiter = new Planet(...jupiterArray);
const saturn = new Planet(...saturnArray);
const uranus = new Planet(...uranusArray);
const neptune = new Planet(...neptuneArray);

const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

const planetsContainer = document.querySelector('.planets-container');
const allPlanets = document.querySelectorAll('.planet-selector');

const namePlanet = document.querySelector('.main-text__planet-name');
const planetInfoMain = document.querySelector('.main-text__planet-info');
const link = document.querySelector('.source-link__wikipedia');
const calc = document.querySelectorAll('.box__value');

const buttonContainer = document.querySelector('.buttons');
const btnOverview = document.querySelector('.btn-overview');
const allBtn = document.querySelectorAll('.overview');

const img = document.querySelector('.img')
const imgGeology = document.querySelector('.img-geology');

const planetUtily = {
    color: '#419EBB',
    infoOverview: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
    infoStructure: `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`,
    infoSurface: `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's.`,
    img: '/img/planet-mercury.svg',
    imgStructure: '/img/planet-mercury-internal.svg',
    imgSurface: '/img/geology-mercury.png'
}

start();

//WHEN PRESS NAV BAR
planetsContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){
        deselector();
        deselectorBtn();
        imgGeology.style.display = 'none';

        let selectedPlanet = document.querySelector('.'+e.target.classList[0]);
        let planet = planets[e.target.classList[0][1]];
        console.log(planet);
        planetUtily.color = planet.color;

        planetUtily.img = planet.overview[1];
        planetUtily.imgStructure = planet.structure[1];
        planetUtily.imgSurface = planet.surface[1];
        img.src = planetUtily.img;

        /////////
        allBtn[0].classList.add('btn-active');
        if(screen.width > 766){
            allBtn[0].style.backgroundColor = planetUtily.color;
        }
        
        planetUtily.infoOverview = planet.overview[0];
        planetInfoMain.textContent = planetUtily.infoOverview;

        planetUtily.infoStructure = planet.structure[0];

        planetUtily.infoSurface = planet.surface[0];
        
        selectedPlanet.classList.add('selected-planet');
        document.styleSheets[0].addRule('.selected-planet:after', 'background-color: ' + planet.color + ';');
        document.styleSheets[0].addRule('.selected-planet:before', 'background-color: ' + planet.color + ';');
        changePlanet(planet.name, planet.source, planet.secondInfo);
    }
})

//WHEN PRESS BTN FOR STRUCTURE
buttonContainer.addEventListener('click', (e) => {
    if(e.target.tagName != 'DIV'){
        deselectorBtn();
        switch(e.target.classList[0]){
            case 'val-overview':
                allBtn[0].classList.add('btn-active');
                allBtn[0].style.backgroundColor = planetUtily.color;
                planetInfoMain.textContent = planetUtily.infoOverview;
                img.src = planetUtily.img;
                imgGeology.style.display = 'none';
                break;
            case 'val-structure':
                allBtn[1].classList.add('btn-active');
                allBtn[1].style.backgroundColor = planetUtily.color;
                planetInfoMain.textContent = planetUtily.infoStructure;
                img.src = planetUtily.imgStructure;
                imgGeology.style.display = 'none';
                break;
            case 'val-surface':
                allBtn[2].classList.add('btn-active');
                allBtn[2].style.backgroundColor = planetUtily.color;
                planetInfoMain.textContent = planetUtily.infoSurface;
                img.src = planetUtily.img;
                imgGeology.src = planetUtily.imgSurface;
                imgGeology.style.display = 'block';
                break;
            default:
                console.log('unknown');
        }
    }
})

//DESCELECTOR NAV BAR
function deselector(){
    allPlanets.forEach(p => p.classList.remove('selected-planet'));
}

//DESCELECTOR BTN STRUCTURE
function deselectorBtn(){
    allBtn.forEach(b => {
        b.classList.remove('btn-active');
        b.style.backgroundColor = 'transparent';
    });
}

function start(){
    allPlanets[0].classList.add('selected-planet');
    document.styleSheets[0].addRule('.selected-planet:after', 'background-color: ' + planets[0].color + ';');
    document.styleSheets[0].addRule('.selected-planet:before', 'background-color: ' + planets[0].color + ';');
    btnOverview.style.backgroundColor = planets[0].color;
    imgGeology.style.display = 'none';
}

function changePlanet(name, source, secondInfo){
    namePlanet.textContent = name.toUpperCase();
    link.href = source;
    secondInfo.forEach((info, index) => {
        calc[index].textContent = info;
    });
}

//**********************************************************************************************************
//BTN MENU BURGER

const planetsBarHamburger = document.querySelector('.planets-bar');
const containerMainHamburger = document.querySelector('.container-main');

const menuContainer = document.querySelector('.nav__menu-burger');
const allButtons = document.querySelectorAll('.btn-hamburger');
const btnHamburger = document.querySelector('.hamburger');
const main = document.querySelector('.main');

menuContainer.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'button'){
        clearButton();

        e.target.classList.add('planet-active'); 

        let planet = planets[e.target.classList[0][1]];
        planetUtily.color = planet.color;

        planetUtily.infoOverview = planet.overview[0];
        planetInfoMain.textContent = planetUtily.infoOverview;

        planetUtily.infoStructure = planet.structure[0];

        planetUtily.infoSurface = planet.surface[0];

        planetUtily.img = planet.overview[1];
        planetUtily.imgStructure = planet.structure[1];
        planetUtily.imgSurface = planet.surface[1];
        img.src = planetUtily.img;

        changePlanet(planet.name, planet.source, planet.secondInfo);
    }
})

const buttonsSmall = document.querySelector('.buttons-small');
buttonsSmall.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() !== 'div'){
        console.log(e.target.classList[0])
    }
})

const clearButton = () =>{
    allButtons.forEach(b => b.classList.remove('planet-active'));
    btnHamburger.classList.remove('active');
    planetsBarHamburger.classList.remove('active');
    containerMainHamburger.classList.remove('active');

}