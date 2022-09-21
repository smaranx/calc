var PETbottles = 13.1;
var Singleusebag = 2.9;
var singleusewrappers = 5.5;
var plasticcontainers = 5.5;
var cottonswabs = 0.4;
var Takeawayplasticcup = 7.3;

var PlasticStraws = 0.2;
var Singleusecutlery = 1.5;
var Plasticplates = 8.8;
var Milkcontainer = 10.18;
var PlasticbinLiner = 11.49;
var Juicecartons = 6.48;

function plasticFootPrint() {
  document.getElementById("PetBottlesFp").innerHTML =
    PetBottles * document.getElementById("PetBottlesTime").value;

  document.getElementById("SingleusebagFp").innerHTML =
    Singleusebag * document.getElementById("SingleusebagTime").value;

  document.getElementById("singleusewrappersFp").innerHTML =
    singleusewrappers * document.getElementById("singleusewrappersTime").value;

  document.getElementById("plasticcontainersFp").innerHTML =
    plasticcontainers * document.getElementById("plasticcontainersTime").value;

  document.getElementById("cottonswabsFp").innerHTML =
    cottonswabs * document.getElementById("cottonswabsTime").value;

  document.getElementById("TakeawayplasticcupFp").innerHTML =
    Takeawayplasticcup *
    document.getElementById("TakeawayplasticcupTime").value;

  document.getElementById("PlasticStrawsFp").innerHTML =
    PlasticStraws * document.getElementById("PlasticStrawsTime").value;

  document.getElementById("SingleusecutleryFp").innerHTML =
    Singleusecutlery * document.getElementById("SingleusecutleryTime").value;

  document.getElementById("PlasticplatesFp").innerHTML =
    Plasticplates * document.getElementById("PlasticplatesTime").value;

  document.getElementById("MilkcontainerFp").innerHTML =
    Milkcontainer * document.getElementById("MilkcontainerTime").value;

  document.getElementById("PlasticbinLinerFp").innerHTML =
    PlasticbinLiner * document.getElementById("PlasticbinLinerTime").value;

  document.getElementById("JuicecartonsFp").innerHTML =
    Juicecartons * document.getElementById("JuicecartonsTime").value;

  document.getElementById("totalFootprint").innerHTML =
    Number(document.getElementById("PetBottlesFp").innerHTML) +
    Number(document.getElementById("SingleusebagFp").innerHTML) +
    Number(document.getElementById("singleusewrappersFp").innerHTML) +
    Number(document.getElementById("plasticcontainersFp").innerHTML) +
    Number(document.getElementById("cottonswabsFp").innerHTML) +
    Number(document.getElementById("TakeawayplasticcupFp").innerHTML) +
    Number(document.getElementById("PlasticStrawsFp").innerHTML) +
    Number(document.getElementById("SingleusecutleryFp").innerHTML) +
    Number(document.getElementById("PlasticplatesFp").innerHTML) +
    Number(document.getElementById("MilkcontainerFp").innerHTML) +
    Number(document.getElementById("PlasticbinLinerFp").innerHTML) +
    Number(document.getElementById("JuicecartonsFp").innerHTML);

  document.getElementById("totalTrees").innerHTML =
    Math.round(document.getElementById("totalFootprint").innerHTML) / 27.7;
}
