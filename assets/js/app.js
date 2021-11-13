// Sun

class Star {
    constructor(nombre, edad, masa, temperatura, clasificacion, gravedad, composicion,img) {
        this.nombre = nombre;
        this.edad = edad;
        this.masa = masa;
        this.temperatura = temperatura;
        this.clasificacion = clasificacion;
        this.gravedad = gravedad;
        this.composicion = composicion;
        this.img = img;
    }

}

const Sun = new Star ("El Sol", "4650 millones de años", "1,9891 x 10^30 kg", "5.778 K", "Tipo G", "274 m/s^2", "Hidrógeno, helio, oxígeno, carbono, neón, hierro, nitrógeno, silicio, magnesio y azufre", "/assets/img/Sun.png");

const sun = document.querySelector(".sun");
const sunModal = document.querySelector(".sun-modal");

sun.addEventListener("click", ()=> {
    sunModal.classList.remove("hide");

    const sunTitle = document.querySelector("#sun-title");
    sunTitle.innerText = Sun.nombre;

    const sunImg = document.querySelector("#sun-img");
    sunImg.setAttribute("src", `${Sun.img}`);

    const sunC1 = document.querySelector("#sun-c-1");
    const sunC2 = document.querySelector("#sun-c-2");
    const sunC3 = document.querySelector("#sun-c-3");
    const sunC4 = document.querySelector("#sun-c-4");
    const sunC5 = document.querySelector("#sun-c-5");
    const sunC6 = document.querySelector("#sun-c-6");

    sunC1.innerText = `Edad: ${Sun.edad}`;
    sunC2.innerText = `Masa: ${Sun.masa}`;
    sunC3.innerText = `Temperatura (Superficie): ${Sun.temperatura}`;
    sunC4.innerText = `Clasificación: ${Sun.clasificacion}`;
    sunC5.innerText = `Gravedad: ${Sun.gravedad}`;
    sunC6.innerText = `Composición química: ${Sun.composicion}`;
});

const layOutSun = document.querySelector(".layout-sun");
const closeBtnSun = document.querySelector(".close-sun");
closeBtnSun.addEventListener("click", ()=> {
    layOutSun.classList.add("hide");
});

// Planet Class

class Planet {
    constructor(nombre, edad, masa, clasificacion, gravedad, orbita, rotacion, satelites, composicion) {
        this.nombre = nombre;
        this.edad = edad;
        this.masa = masa;
        this.clasificacion = clasificacion;
        this.gravedad = gravedad;
        this.orbita = orbita;
        this.rotacion = rotacion;
        this.satelites = satelites;
        this.composicion = composicion;
    }
}


// Mercury

const Mercury = new Planet ("Mercurio", "4503 Millonoes de años", "3,285 x 10^23 kg", "Planeta rocoso", " 3,7 m/s^2", "87,2 días terrestres", "58,7 días terrestres", 0, "Potasio, sodio, oxígeno atómico, argón, helio, oxígeno molecular, nitrógeno, dióxido de carbono, agua e hidrógeno.");

const mercury = document.querySelector(".mercury");
const mercuryModal = document.querySelector(".mercury-modal");

mercury.addEventListener("click", ()=> {
    mercuryModal.classList.remove("hide");

    const mercuryTitle = document.querySelector("#mercury-title");
    mercuryTitle.innerText = Mercury.nombre;

    const mercuryImg = document.querySelector("#mercury-img");
    mercuryImg.setAttribute("src", "assets/img/mercurio.png");

    const mercC1 = document.querySelector("#merc-c-1");
    const mercC2 = document.querySelector("#merc-c-2");
    const mercC3 = document.querySelector("#merc-c-3");
    const mercC4 = document.querySelector("#merc-c-4");
    const mercC5 = document.querySelector("#merc-c-5");
    const mercC6 = document.querySelector("#merc-c-6");
    const mercC7 = document.querySelector("#merc-c-7");
    const mercC8 = document.querySelector("#merc-c-8");

    mercC1.innerText = `Edad: ${Mercury.edad}`;
    mercC2.innerText = `Masa: ${Mercury.masa}`;
    mercC3.innerText = `Clasificación: ${Mercury.clasificacion}`;
    mercC4.innerText = `Gravedad: ${Mercury.gravedad}`;
    mercC5.innerText = `Órbita: ${Mercury.orbita}`;
    mercC6.innerText = `Rotación: ${Mercury.rotacion}`;
    mercC7.innerText = `Satélites: ${Mercury.satelites}`;
    mercC8.innerText = `Composición química: ${Mercury.composicion}`;

});

const layOutMercury = document.querySelector(".layout-mercury");
const closeBtnMercury = document.querySelector(".close-merc");
closeBtnMercury.addEventListener("click", ()=> {
    layOutMercury.classList.add("hide");
});


// Venus

const Venus = new Planet ("Venus", "4503 millones de años", " 4,867 × 10^24 kg", "Planeta rocoso", "8,87 m/s^2", "224,7 días terrestres", "243 días terrestres", 0, "Dióxido de carbono, nitrógeno, dióxido de azufre, vapor de agua, monóxido de carbono, argón, helio, neón, sulfuro de carbono,  cloruro de hidrógeno y flouruo de hidrógeno");

const venus = document.querySelector(".venus");
const venusModal = document.querySelector(".venus-modal");

venus.addEventListener("click", ()=> {
    venusModal.classList.remove("hide");

    const venusTitle = document.querySelector("#venus-title");
    venusTitle.innerText = Venus.nombre;

    const venusImg = document.querySelector("#venus-img");
    venusImg.setAttribute("src", "assets/img/venus.png");

    const venC1 = document.querySelector("#ven-c-1");
    const venC2 = document.querySelector("#ven-c-2");
    const venC3 = document.querySelector("#ven-c-3");
    const venC4 = document.querySelector("#ven-c-4");
    const venC5 = document.querySelector("#ven-c-5");
    const venC6 = document.querySelector("#ven-c-6");
    const venC7 = document.querySelector("#ven-c-7");
    const venC8 = document.querySelector("#ven-c-8");

    venC1.innerText = `Edad: ${Venus.edad}`;
    venC2.innerText = `Masa: ${Venus.masa}`;
    venC3.innerText = `Clasificación: ${Venus.clasificacion}`;
    venC4.innerText = `Gravedad: ${Venus.gravedad}`; 
    venC5.innerText = `Órbita: ${Venus.orbita}`;
    venC6.innerText = `Rotación: ${Venus.rotacion}`;
    venC7.innerText = `Satélites: ${Venus.satelites}`;
    venC8.innerText = `Composición química: ${Venus.composicion}`;
});

const layOutVenus = document.querySelector(".layout-venus");
const closeBtnVen = document.querySelector(".close-ven");
closeBtnVen.addEventListener("click", ()=> {
    layOutVenus.classList.add("hide");
});


// Earth

const Earth = new Planet ("Tierra", "4543 millones de años", "5,9736×10^24 kg", "Planeta rocoso", "9,8 m/s^2", "365-366 días", "1 día", 1, "Nitrógeno, oxígeno, argón, dióxido de carbono, neón, hidrógeno, helio, metano, óxido nitroso, xenón y monóxido de carbono");

const earth = document.querySelector(".earth");
const earthModal = document.querySelector(".earth-modal");

earth.addEventListener("click", ()=> {
    earthModal.classList.remove("hide");

    const earthTitle = document.querySelector("#earth-title");
    earthTitle.innerText = Earth.nombre;

    const earthImg = document.querySelector("#earth-img");
    earthImg.setAttribute("src", "assets/img/tierra.png");

    const earthC1 = document.querySelector("#earth-c-1");
    const earthC2 = document.querySelector("#earth-c-2");
    const earthC3 = document.querySelector("#earth-c-3");
    const earthC4 = document.querySelector("#earth-c-4");
    const earthC5 = document.querySelector("#earth-c-5");
    const earthC6 = document.querySelector("#earth-c-6");
    const earthC7 = document.querySelector("#earth-c-7");
    const earthC8 = document.querySelector("#earth-c-8");

    earthC1.innerText = `Edad: ${Earth.edad}`;
    earthC2.innerText = `Masa: ${Earth.masa}`;
    earthC3.innerText = `Clasificación: ${Earth.clasificacion}`;
    earthC4.innerText = `Gravedad: ${Earth.gravedad}`; 
    earthC5.innerText = `Órbita: ${Earth.orbita}`;
    earthC6.innerText = `Rotación: ${Earth.rotacion}`;
    earthC7.innerText = `Satélites: ${Earth.satelites}`;
    earthC8.innerText = `Composición química: ${Earth.composicion}`;
});

const layOutEarth = document.querySelector(".layout-earth");
const closeBtnEarth = document.querySelector(".close-earth");
closeBtnEarth.addEventListener("click", ()=> {
    layOutEarth.classList.add("hide");
});



//  Mars 

const Mars = new Planet ("Marte", "4603 Millones de años", "6,4185 × 10^23","Planeta rocoso", "3,72 m/s^2", "687 días terrestres", "1,6 días terrestres", 2, "Dióxido de carbono, nitrógeno, argón, oxígeno, monóxido de carbono, vapor de agua, óxido nitroso, neón, agua pesada, xenón, ozono, metano y peróxido de hidrógeno.");

const mars = document.querySelector(".mars");
const marsModal = document.querySelector(".mars-modal");

mars.addEventListener("click", ()=> {
    marsModal.classList.remove("hide");

    const marsTitle = document.querySelector("#mars-title");
    marsTitle.innerText = Mars.nombre;

    const marsImg = document.querySelector("#mars-img");
    marsImg.setAttribute("src", "assets/img/marte.png");

    const marsC1 = document.querySelector("#mars-c-1");
    const marsC2 = document.querySelector("#mars-c-2");
    const marsC3 = document.querySelector("#mars-c-3");
    const marsC4 = document.querySelector("#mars-c-4");
    const marsC5 = document.querySelector("#mars-c-5");
    const marsC6 = document.querySelector("#mars-c-6");
    const marsC7 = document.querySelector("#mars-c-7");
    const marsC8 = document.querySelector("#mars-c-8");

    marsC1.innerText = `Edad: ${Mars.edad}`;
    marsC2.innerText = `Masa: ${Mars.masa}`;
    marsC3.innerText = `Clasificación: ${Mars.clasificacion}`;
    marsC4.innerText = `Gravedad: ${Mars.gravedad}`; 
    marsC5.innerText = `Órbita: ${Mars.orbita}`;
    marsC6.innerText = `Rotación: ${Mars.rotacion}`;
    marsC7.innerText = `Satélites: ${Mars.satelites}`;
    marsC8.innerText = `Composición química: ${Mars.composicion}`;
});

const layOutMars = document.querySelector(".layout-mars");
const closeBtnMars = document.querySelector(".close-mars");
closeBtnMars.addEventListener("click", ()=> {
    layOutMars.classList.add("hide");
});


//  Ceres

const Ceres = new Planet ("Ceres", "4573 Millones de años", "9,43±0,07×10^20 kg", "Planeta enano", "0,28 m/s^2", "1683,15 días terrestres", "9,07 horas", 0);

const ceres = document.querySelector(".ceres");
const ceresModal = document.querySelector(".ceres-modal");

ceres.addEventListener("click", ()=> {
    ceresModal.classList.remove("hide");

    const ceresTitle = document.querySelector("#ceres-title");
    ceresTitle.innerText = Ceres.nombre;

    const ceresImg = document.querySelector("#ceres-img");
    ceresImg.setAttribute("src", "assets/img/ceres.png");

    const ceresC1 = document.querySelector("#ceres-c-1");
    const ceresC2 = document.querySelector("#ceres-c-2");
    const ceresC3 = document.querySelector("#ceres-c-3");
    const ceresC4 = document.querySelector("#ceres-c-4");
    const ceresC5 = document.querySelector("#ceres-c-5");
    const ceresC6 = document.querySelector("#ceres-c-6");
    const ceresC7 = document.querySelector("#ceres-c-7");
    const ceresC8 = document.querySelector("#ceres-c-8");

    ceresC1.innerText = `Edad: ${Ceres.edad}`;
    ceresC2.innerText = `Masa: ${Ceres.masa}`;
    ceresC3.innerText = `Clasificación: ${Ceres.clasificacion}`;
    ceresC4.innerText = `Gravedad: ${Ceres.gravedad}`; 
    ceresC5.innerText = `Órbita: ${Ceres.orbita}`;
    ceresC6.innerText = `Rotación: ${Ceres.rotacion}`;
    ceresC7.innerText = `Satélites: ${Ceres.satelites}`;
});

const layOutCeres = document.querySelector(".layout-ceres");
const closeBtnCeres = document.querySelector(".close-ceres");
closeBtnCeres.addEventListener("click", ()=> {
    layOutCeres.classList.add("hide");
});


// Jupiter

const Jupiter = new Planet("Júpiter", "4603 Millones de años", "1,898 × 10^27 kg", "Gigante gaseoso", "24,79 m/s^2", "399 días terrestres", "9,5 horas", 4, "Hidrógeno, helio, metano, vapor de agua, amoníaco, etano, fosfano y sulfuro de hidrógeno.");

const jupiter = document.querySelector(".jupiter");
const jupiterModal = document.querySelector(".jupiter-modal");

jupiter.addEventListener("click", ()=> {
    jupiterModal.classList.remove("hide");

    const jupiterTitle = document.querySelector("#jupiter-title");
    jupiterTitle.innerText = Jupiter.nombre;

    const jupiterImg = document.querySelector("#jupiter-img");
    jupiterImg.setAttribute("src", "assets/img/jupiter.png");

    const jupiterC1 = document.querySelector("#jupiter-c-1");
    const jupiterC2 = document.querySelector("#jupiter-c-2");
    const jupiterC3 = document.querySelector("#jupiter-c-3");
    const jupiterC4 = document.querySelector("#jupiter-c-4");
    const jupiterC5 = document.querySelector("#jupiter-c-5");
    const jupiterC6 = document.querySelector("#jupiter-c-6");
    const jupiterC7 = document.querySelector("#jupiter-c-7");
    const jupiterC8 = document.querySelector("#jupiter-c-8");

    jupiterC1.innerText = `Edad: ${Jupiter.edad}`;
    jupiterC2.innerText = `Masa: ${Jupiter.masa}`;
    jupiterC3.innerText = `Clasificación: ${Jupiter.clasificacion}`;
    jupiterC4.innerText = `Gravedad: ${Jupiter.gravedad}`; 
    jupiterC5.innerText = `Órbita: ${Jupiter.orbita}`;
    jupiterC6.innerText = `Rotación: ${Jupiter.rotacion}`;
    jupiterC7.innerText = `Satélites: ${Jupiter.satelites}`;
    jupiterC8.innerText = `Composición química: ${Jupiter.composicion}`;
});

const layOutJupiter = document.querySelector(".layout-jupiter");
const closeBtnJupiter = document.querySelector(".close-jupiter");
closeBtnJupiter.addEventListener("click", ()=> {
    layOutJupiter.classList.add("hide");
});


// Saturn

const Saturn = new Planet ("Saturno", "4503 Millones de años", "5,683 × 10^26 kg", "Gigante gaseoso", "10,44 m/s^2", "29 años con 167 días terrestres", "10 horas con 33 minutos", 200, "Hidrógeno,  helio, metano, vapor de agua, amoníaco, etano y fosfano")

const saturn = document.querySelector(".saturn");
const saturnModal = document.querySelector(".saturn-modal");

saturn.addEventListener("click", ()=> {
    saturnModal.classList.remove("hide");

    const saturnTitle = document.querySelector("#saturn-title");
    saturnTitle.innerText = Saturn.nombre;

    const saturnImg = document.querySelector("#saturn-img");
    saturnImg.setAttribute("src", "assets/img/saturn.png");

    const saturnC1 = document.querySelector("#saturn-c-1");
    const saturnC2 = document.querySelector("#saturn-c-2");
    const saturnC3 = document.querySelector("#saturn-c-3");
    const saturnC4 = document.querySelector("#saturn-c-4");
    const saturnC5 = document.querySelector("#saturn-c-5");
    const saturnC6 = document.querySelector("#saturn-c-6");
    const saturnC7 = document.querySelector("#saturn-c-7");
    const saturnC8 = document.querySelector("#saturn-c-8");

    saturnC1.innerText = `Edad: ${Saturn.edad}`;
    saturnC2.innerText = `Masa: ${Saturn.masa}`;
    saturnC3.innerText = `Clasificación: ${Saturn.clasificacion}`;
    saturnC4.innerText = `Gravedad: ${Saturn.gravedad}`; 
    saturnC5.innerText = `Órbita: ${Saturn.orbita}`;
    saturnC6.innerText = `Rotación: ${Saturn.rotacion}`;
    saturnC7.innerText = `Satélites: ${Saturn.satelites}`;
    saturnC8.innerText = `Composición química: ${Saturn.composicion}`;
});

const layOutSaturn = document.querySelector(".layout-saturn");
const closeBtnSaturn = document.querySelector(".close-saturn");
closeBtnSaturn.addEventListener("click", ()=> {
    layOutSaturn.classList.add("hide");
});


// Uranus

const Uranus = new Planet("Urano", "4503 Millones de años", "8,681 × 10^25 kg", "Gigante helado", "8,87 m/s^2", "84,3 años terrestres", "17 horas con 14 minutos", 5, "Hidrógeno, helio, metano, amoníaco, etano, acetileno, monóxido de carbono y sulfuro de hidrógeno"); 

const uranus = document.querySelector(".uranus");
const uranusModal = document.querySelector(".uranus-modal");

uranus.addEventListener("click", ()=> {
    uranusModal.classList.remove("hide");

    const uranusTitle = document.querySelector("#uranus-title");
    uranusTitle.innerText = Uranus.nombre;

    const uranusImg = document.querySelector("#uranus-img");
    uranusImg.setAttribute("src", "assets/img/urano.png");

    const uranusC1 = document.querySelector("#uranus-c-1");
    const uranusC2 = document.querySelector("#uranus-c-2");
    const uranusC3 = document.querySelector("#uranus-c-3");
    const uranusC4 = document.querySelector("#uranus-c-4");
    const uranusC5 = document.querySelector("#uranus-c-5");
    const uranusC6 = document.querySelector("#uranus-c-6");
    const uranusC7 = document.querySelector("#uranus-c-7");
    const uranusC8 = document.querySelector("#uranus-c-8");

    uranusC1.innerText = `Edad: ${Uranus.edad}`;
    uranusC2.innerText = `Masa: ${Uranus.masa}`;
    uranusC3.innerText = `Clasificación: ${Uranus.clasificacion}`;
    uranusC4.innerText = `Gravedad: ${Uranus.gravedad}`; 
    uranusC5.innerText = `Órbita: ${Uranus.orbita}`;
    uranusC6.innerText = `Rotación: ${Uranus.rotacion}`;
    uranusC7.innerText = `Satélites: ${Uranus.satelites}`;
    uranusC8.innerText = `Composición química: ${Uranus.composicion}`;
});

const layOutUranus = document.querySelector(".layout-uranus");
const closeBtnUranus = document.querySelector(".close-uranus");
closeBtnUranus.addEventListener("click", ()=> {
    layOutUranus.classList.add("hide");
});


// Neptune

const Neptune = new Planet ("Neptuno", "4503 Millones de años", "1,024 × 10^26 kg", "Gigante helado", "11,15m/s^2", "164 años con 288 días y 13 horas terrestres", "16 horas con 6 minutos", 14, "Hidrógeno, helio, metano, amoníaco, etano y acetileno");

const neptune = document.querySelector(".neptune");
const neptuneModal = document.querySelector(".neptune-modal");

neptune.addEventListener("click", ()=> {
    neptuneModal.classList.remove("hide");

    const neptuneTitle = document.querySelector("#neptune-title");
    neptuneTitle.innerText = Neptune.nombre;

    const neptuneImg = document.querySelector("#neptune-img");
    neptuneImg.setAttribute("src", "assets/img/neptune.png");

    const neptuneC1 = document.querySelector("#neptune-c-1");
    const neptuneC2 = document.querySelector("#neptune-c-2");
    const neptuneC3 = document.querySelector("#neptune-c-3");
    const neptuneC4 = document.querySelector("#neptune-c-4");
    const neptuneC5 = document.querySelector("#neptune-c-5");
    const neptuneC6 = document.querySelector("#neptune-c-6");
    const neptuneC7 = document.querySelector("#neptune-c-7");
    const neptuneC8 = document.querySelector("#neptune-c-8");

    neptuneC1.innerText = `Edad: ${Neptune.edad}`;
    neptuneC2.innerText = `Masa: ${Neptune.masa}`;
    neptuneC3.innerText = `Clasificación: ${Neptune.clasificacion}`;
    neptuneC4.innerText = `Gravedad: ${Neptune.gravedad}`; 
    neptuneC5.innerText = `Órbita: ${Neptune.orbita}`;
    neptuneC6.innerText = `Rotación: ${Neptune.rotacion}`;
    neptuneC7.innerText = `Satélites: ${Neptune.satelites}`;
    neptuneC8.innerText = `Composición química: ${Neptune.composicion}`;
});

const layOutNeptune = document.querySelector(".layout-neptune");
const closeBtnNeptune = document.querySelector(".close-neptune");
closeBtnNeptune.addEventListener("click", ()=> {
    layOutNeptune.classList.add("hide");
}); 


// Pluton

const Pluton = new Planet ("Plutón", "", "1,25 × 10^22 kg", "Planeta enano", "0,6 m/s^2", "248 años 197 días terrestres", "153 horas", 5, "Nitrógeno y metano");

const pluton = document.querySelector(".pluton");
const plutonModal = document.querySelector(".pluton-modal");

pluton.addEventListener("click", ()=> {
    plutonModal.classList.remove("hide");

    const plutonTitle = document.querySelector("#pluton-title");
    plutonTitle.innerText = Pluton.nombre;

    const plutonImg = document.querySelector("#pluton-img");
    plutonImg.setAttribute("src", "assets/img/pluton.png");

    const plutonC2 = document.querySelector("#pluton-c-2");
    
    const plutonC3 = document.querySelector("#pluton-c-3");
    const plutonC4 = document.querySelector("#pluton-c-4");
    const plutonC5 = document.querySelector("#pluton-c-5");
    const plutonC6 = document.querySelector("#pluton-c-6");
    const plutonC7 = document.querySelector("#pluton-c-7");
    const plutonC8 = document.querySelector("#pluton-c-8");

    
    plutonC2.innerText = `Masa: ${Pluton.masa}`;
    plutonC3.innerText = `Clasificación: ${Pluton.clasificacion}`;
    plutonC4.innerText = `Gravedad: ${Pluton.gravedad}`; 
    plutonC5.innerText = `Órbita: ${Pluton.orbita}`;
    plutonC6.innerText = `Rotación: ${Pluton.rotacion}`;
    plutonC7.innerText = `Satélites: ${Pluton.satelites}`;
    plutonC8.innerText = `Composición química: ${Pluton.composicion}`;
});

const layOutPluton = document.querySelector(".layout-pluton");
const closeBtnPluton = document.querySelector(".close-pluton");
closeBtnPluton.addEventListener("click", ()=> {
    layOutPluton.classList.add("hide");
}); 


// Haumea

const Haumea = new Planet ("Haumea", "4503 Millones de años", "~4 x 10^21", "Planetoide", "	~0,8 m/s^2", "284,12 años terrestres", "3,9 horas", 2, "");

const haumea = document.querySelector(".haumea");
const haumeaModal = document.querySelector(".haumea-modal");

haumea.addEventListener("click", ()=> {
    haumeaModal.classList.remove("hide");

    const haumeaTitle = document.querySelector("#haumea-title");
    haumeaTitle.innerText = Haumea.nombre;

    const haumeaImg = document.querySelector("#haumea-img");
    haumeaImg.setAttribute("src", "assets/img/haumea.png");

    const haumeaC1 = document.querySelector("#haumea-c-1");
    const haumeaC2 = document.querySelector("#haumea-c-2");
    const haumeaC3 = document.querySelector("#haumea-c-3");
    const haumeaC4 = document.querySelector("#haumea-c-4");
    const haumeaC5 = document.querySelector("#haumea-c-5");
    const haumeaC6 = document.querySelector("#haumea-c-6");
    const haumeaC7 = document.querySelector("#haumea-c-7");

    haumeaC1.innerText = `Edad: ${Haumea.edad}`;
    haumeaC2.innerText = `Masa: ${Haumea.masa}`;
    haumeaC3.innerText = `Clasificación: ${Haumea.clasificacion}`;
    haumeaC4.innerText = `Gravedad: ${Haumea.gravedad}`; 
    haumeaC5.innerText = `Órbita: ${Haumea.orbita}`;
    haumeaC6.innerText = `Rotación: ${Haumea.rotacion}`;
    haumeaC7.innerText = `Satélites: ${Haumea.satelites}`;
    
});

const layOutHaumea = document.querySelector(".layout-haumea");
const closeBtnHaumea = document.querySelector(".close-haumea");
closeBtnHaumea.addEventListener("click", ()=> {
    layOutHaumea.classList.add("hide");
});


//  Makemake

const Makemake = new Planet ("Makemake", "", "~4 x 10^21", "Planeta enano/Plutoide", "	~0,8 m/s^2", "309,9 años terrestres", "22.5 horas");

const makemake = document.querySelector(".makemake");
const makemakeModal = document.querySelector(".makemake-modal");

makemake.addEventListener("click", ()=> {
    makemakeModal.classList.remove("hide");

    const makemakeTitle = document.querySelector("#makemake-title");
    makemakeTitle.innerText = Makemake.nombre;

    const makemakeImg = document.querySelector("#makemake-img");
    makemakeImg.setAttribute("src", "assets/img/makemake.png");

    
    const makemakeC2 = document.querySelector("#makemake-c-2");
    const makemakeC3 = document.querySelector("#makemake-c-3");
    const makemakeC4 = document.querySelector("#makemake-c-4");
    const makemakeC5 = document.querySelector("#makemake-c-5");
    const makemakeC6 = document.querySelector("#makemake-c-6");
    

    
    makemakeC2.innerText = `Masa: ${Makemake.masa}`;
    makemakeC3.innerText = `Clasificación: ${Makemake.clasificacion}`;
    makemakeC4.innerText = `Gravedad: ${Makemake.gravedad}`; 
    makemakeC5.innerText = `Órbita: ${Makemake.orbita}`;
    makemakeC6.innerText = `Rotación: ${Makemake.rotacion}`;
    
    
});

const layOutMakemake = document.querySelector(".layout-makemake");
const closeBtnMakemake = document.querySelector(".close-makemake");
closeBtnMakemake.addEventListener("click", ()=> {
    layOutMakemake.classList.add("hide");
});


// Eris

const Eris = new Planet ("Eris", "4503 Millones de años", "1,67±0,02×10^22 kg","Planeta enano", "~0,82 m/s^2", "557 años terrestres", "25 horas", 1 );

const eris = document.querySelector(".eris");
const erisModal = document.querySelector(".eris-modal");

eris.addEventListener("click", ()=> {
    erisModal.classList.remove("hide");

    const erisTitle = document.querySelector("#eris-title");
    erisTitle.innerText = Eris.nombre;

    const erisImg = document.querySelector("#eris-img");
    erisImg.setAttribute("src", "assets/img/eris.png");

    const erisC1 = document.querySelector("#eris-c-1");
    const erisC2 = document.querySelector("#eris-c-2");
    const erisC3 = document.querySelector("#eris-c-3");
    const erisC4 = document.querySelector("#eris-c-4");
    const erisC5 = document.querySelector("#eris-c-5");
    const erisC6 = document.querySelector("#eris-c-6");
    const erisC7 = document.querySelector("#eris-c-7");

    erisC1.innerText = `Edad: ${Eris.edad}`;
    erisC2.innerText = `Masa: ${Eris.masa}`;
    erisC3.innerText = `Clasificación: ${Eris.clasificacion}`;
    erisC4.innerText = `Gravedad: ${Eris.gravedad}`; 
    erisC5.innerText = `Órbita: ${Eris.orbita}`;
    erisC6.innerText = `Rotación: ${Eris.rotacion}`;
    erisC7.innerText = `Satélites: ${Eris.satelites}`;
    
    
});

const layOutEris = document.querySelector(".layout-eris");
const closeBtnEris = document.querySelector(".close-eris");
closeBtnEris.addEventListener("click", ()=> {
    layOutEris.classList.add("hide");
});


// Sedna

const Sedna = new Planet ("Sedna", undefined, "	≈1 × 1021 kg^n.2​", "Objeto disperso transneptuniano", "≈0,27 m/s^2", "11.400 años terrestres", "~40 días", undefined, undefined);

const sedna = document.querySelector(".sedna");
const sednaModal = document.querySelector(".sedna-modal");

sedna.addEventListener("click", ()=> {
    sednaModal.classList.remove("hide");

    const sednaTitle = document.querySelector("#sedna-title");
    sednaTitle.innerText = Sedna.nombre;

    const sednaImg = document.querySelector("#sedna-img");
    sednaImg.setAttribute("src", "assets/img/sedna.png");

    
    const sednaC2 = document.querySelector("#sedna-c-2");
    const sednaC3 = document.querySelector("#sedna-c-3");
    const sednaC4 = document.querySelector("#sedna-c-4");
    const sednaC5 = document.querySelector("#sedna-c-5");
    const sednaC6 = document.querySelector("#sedna-c-6");
    

    
    sednaC2.innerText = `Masa: ${Sedna.masa}`;
    sednaC3.innerText = `Clasificación: ${Sedna.clasificacion}`;
    sednaC4.innerText = `Gravedad: ${Sedna.gravedad}`; 
    sednaC5.innerText = `Órbita: ${Sedna.orbita}`;
    sednaC6.innerText = `Rotación: ${Sedna.rotacion}`;
    
    
    
});

const layOutSedna = document.querySelector(".layout-sedna");
const closeBtnSedna = document.querySelector(".close-sedna");
closeBtnSedna.addEventListener("click", ()=> {
    layOutSedna.classList.add("hide");
});


// Phattie

const Phattie = new Planet ("Phattie", undefined, "6 × 10^25 kg", "Gigante gaseoso/Gigante helado (Hipotéticamente)", undefined, "10.000-20.000 años terrestres", undefined, undefined, "Similar al de Urano y Neptuno");

const phattie = document.querySelector(".phattie");
const phattieModal = document.querySelector(".phattie-modal");

phattie.addEventListener("click", ()=> {
    phattieModal.classList.remove("hide");

    const phattieTitle = document.querySelector("#phattie-title");
    phattieTitle.innerText = Phattie.nombre;

    const phattieImg = document.querySelector("#phattie-img");
    phattieImg.setAttribute("src", "assets/img/phattie.png");

    
    const phattieC2 = document.querySelector("#phattie-c-2");
    const phattieC3 = document.querySelector("#phattie-c-3");
    const phattieC5 = document.querySelector("#phattie-c-5");
    const phattieC8 = document.querySelector("#phattie-c-8");
    

    
    phattieC2.innerText = `Masa: ${Phattie.masa}`;
    phattieC3.innerText = `Clasificación: ${Phattie.clasificacion}`; 
    phattieC5.innerText = `Órbita: ${Phattie.orbita}`;
    phattieC8.innerText = `Composición: ${Phattie.composicion}`;
    
    
    
});

const layOutPhattie = document.querySelector(".layout-phattie");
const closeBtnPhattie = document.querySelector(".close-phattie");
closeBtnPhattie.addEventListener("click", ()=> {
    layOutPhattie.classList.add("hide");
});