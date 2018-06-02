let database = [{
  team: "Chivas de Guadalajara",
  picture: "img/chivas.png",
  origin: 'Guadalajara, Jalisco',
  established: 'May 8, 1906',
  stadium: 'Estadio Akron(cap. 49,850)',
  championships: "12 Liga MX, 7 Campeon de Campeones, 4 Copa MX, 2 CONCACAF Champions Cup, 1 Supercopa MX",
},
{
  team: "Club America",
  picture: "img/america.png",
  origin: 'Mexico City, D.F.',
  established: 'October 12, 1916',
  stadium: 'Estadio Azteca(cap. 87,000)',
  championships:'12 Liga MX, 7 CONCACAF Champions Cup, 5 Copa MX, 5 Campeon de Campeones, 2 Copa Interamericana',
},
{
  team: "Pumas UNAM",
  picture: "img/pumas.png",
  origin: 'Mexico City, D.F.',
  established: 'August 28, 1954',
  stadium: 'Estadio Olimpico Universitario(Cap. 72,000)',
  championships: '7 Liga MX, 3 CONCACAF Champions Cup, 1 Copa MX, 1 Copa Interamericana',
},
{
  team: 'Deportivo Toluca',
  picture: "img/toluca.png",
  origin: 'Toluca, Edo. de Mexico',
  established: 'February 12, 1917',
  stadium: 'Estadio Nemesio Diez(cap. 31,000)',
  championships: '10 Liga MX, 4 Campeon de Campeones, 2 Copa MX',
},
{
  team: 'Tigres UANL',
  picture: "img/tigres.png",
  origin: 'Monterrey, Nuevo Leon',
  established: 'March 7, 1960',
  stadium: 'Estadio Universitario(cap. 41,886)',
  championships: '6 Liga MX, 3 Copa MX, 2 Campeon de Campeones',
},
{
team: 'Cruz Azul',
picture: "img/cruzazul.png",
origin: 'Jasso, Hidalgo(moved to Mexico City in 70s)',
established: 'March 22, 1927',
stadium: 'Estadio Azteca(cap. 87,000)',
championships: '8 Liga MX, 7 CONCACAF Champions Cup, 3 Copa MX, 2 Campeon de Campeones',
},
{
team: 'Monterrey F.C.',
picture: "img/monterrey.png",
origin: 'Monterrey, Nuevo Leon',
established: 'June 28, 1945',
stadium: 'Estadio BBVA Bancomer(cap. 53,000)',
championships: '4 Liga MX, 3 CONCACAF Champions Cup, 2 Copa MX',
},
{
team: 'C.F. Pachuca',
picture: "img/pachuca.png",
origin: 'Pachuca, Hidalgo',
established: 'Novmenber 28, 1901',
stadium: 'Estadio Hidalgo(cap. 27,512)',
championships: '6 Liga MX, 5 CONCACAF Champions Cup, 1 Copa Sudamericana',
},
{
team: 'Santos Laguna',
picture: "img/santos.png",
origin: 'Torreon, Coahuila',
established: 'September 4, 1983',
stadium: 'Estadio Corona(cap. 29,327)',
championships: '6 Liga MX, 1 Campeon de Campeones, 1 Copa MX',
},
{
team: 'Club Tijuana',
picture: "img/Tijuana.png",
origin: 'Tijuana, Baja California Norte',
established: 'January 14, 2007',
stadium: 'Estadio Caliente(cap. 27,333)',
championships: '1 Liga MX',
},
{
team: 'Monarcas Morelia',
picture: "img/morelia.png",
origin: 'Morelia, Michoacan',
established: 'November 21, 1924',
stadium: 'Estadio Morelos(cap. 35,000)',
championships: '1 Liga MX, 1 Copa MX, 1 Supercopa MX',
},
{
team: 'Club Atlas',
picture: "img/atlas.png",
origin: 'Guadalajara, Jalisco',
established: 'August 16, 1916',
stadium: 'Estadio Jalisco(cap. 55,010)',
championships: '1 Liga MX, 4 Copa MX',
},
{
team: 'Club Leon',
picture: "img/leon.png",
origin: 'Leon, Guanajuato',
established: 'August 31, 1943',
stadium: 'Estadio Leon(cap. 31,927)',
championships: '6 Liga MX, 5 Copa MX, 5 Campeon de Campeones',
},
{
team: 'Club Necaxa',
picture:  "img/Necaxa.png",
origin: 'Mexico City, D.F.(moved to Aguascalientes in 2003)',
established: 'August 21, 1923',
stadium: 'Estadio Victoria(cap. 23,814)',
championships: '3 Liga MX, 4 Copa MX, 2 Campeon de Campeones',
},
{
team: 'Club Queretaro',
picture: "img/Queretaro.png",
origin: 'Querataro, Querataro',
established: 'July 8, 1950',
stadium: 'Estadio Corregidora(cap. 33,162)',
championships: '1 Copa MX, 1 Supercopa MX',
},
{
team: 'Tiburones Rojos de Veracruz',
picture: "img/veracruz.png",
origin: 'Boca de Rio, Veracruz',
established: 'April 8, 1943',
stadium: 'Estadio Luis "Pirata" Fuente(cap. 55,010)',
championships: '2 Liga MX, 2 Copa MX',
},
{
team: 'Puebla F.C.',
picture: "img/Puebla.png",
origin: 'Puebla, Puebla',
established: 'May 7, 1944',
stadium: 'Estadio Cuauhtemoc(cap. 28,203)',
championships: '2 Liga MX, 5 Copa MX, 1 Supercopa MX',
},
{
team: 'Lobos BUAP',
picture: "img/lobosBUAP.png",
origin: 'Puebla, Puebla',
established: 'May 28, 167',
stadium: 'Estadio Universitario BUAP(cap. 19,283)',
championships: '',
}
];

let searchBar = document.getElementById('search-bar');
let searchButton = document.getElementById('search-button');
let autoSuggestions = document.getElementById('auto-suggestions');
let display = document.getElementById('display');

searchBar.addEventListener('keypress', checkKey);
searchButton.addEventListener('click', processInput);
searchBar.addEventListener('input', getAutoSuggestions);


function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    // console.log(“You pressed enter!”);
    processInput();
  }
}

function processInput(){
  let cleanedInput = searchBar.value.toLowerCase().trim();
  document.getElementById('auto-suggestions').innerHTML == "";
  document.getElementById('auto-suggestions').style.display == 'none';
  document.getElementById('search-bar').value == "";
  let databaseRecord = getRecord(cleanedInput);

  if(databaseRecord != null){
    displayRecord(databaseRecord);
  }else{
    displaySuggestions(getSuggestions(cleanedInput));
  }
}

function getRecord(cleanedInput){
  for(let i = 0; i < database.length; i++){
    var cleanedRecordName = database[i].team.toLowerCase().trim();
  if(cleanedInput == cleanedRecordName){
    return database[i];
  }
  }
  return null;
}

function displayRecord(databaseRecord){
  var recordTeam = document.createElement("h2");
  recordTeam.innerHTML = databaseRecord.team;
  var recordPicture = document.createElement("img");
  recordPicture.src = databaseRecord.picture;
  var recordOrigin = document.createElement("p");
  recordOrigin.innerHTML = "<b>Origin:</b> " + databaseRecord.origin;
  var recordEst = document.createElement("p");
  recordEst.innerHTML = "<b>Established:</b> " + databaseRecord.est;
  var recordStadium = document.createElement("p");
  recordStadium.innerHTML = "<b>Stadium:</b> " + databaseRecord.stadium;
  var recordChamps = document.createElement('p');
  recordChamps.innerHTML = "<b>Champoinships:</b> " + databaseRecord.champs;
  //Origin
if(databaseRecord.origin != null) {
  recordOrigin.innerHTML = "<b>Origin:</b> " + databaseRecord.origin;
}
else {
  recordOrigin.innerHTML = "<b>Origin:</b> N/A";
}
//Est.
if(databaseRecord.established != null) {
  recordEst.innerHTML = "<b>Established:</b> " + databaseRecord.established;
}
else {
  recordEst.innerHTML = "<b>Establsihed:</b> N/A";
}
//stadium
if(databaseRecord.stadium != null) {
  recordStadium.innerHTML = "<b>Stadium:</b> " + databaseRecord.stadium;
}
else {
  recordStadium.innerHTML = "<b>Stadium:</b> N/A";
}
//champs
if(databaseRecord.championships != null) {
  recordChamps.innerHTML = "<b>Championships:</b> " + databaseRecord.championships;
}
else {
  recordChamps.innerHTML = "<b>Championships:</b> N/A";
}
display.appendChild(recordTeam);
display.appendChild(recordPicture);
display.appendChild(recordOrigin);
display.appendChild(recordEst);
display.appendChild(recordStadium);
display.appendChild(recordChamps);
}

function getAutoSuggestions(){
  let cleanedInput =  searchBar.value.toLowerCase().trim();
  document.getElementById('auto-suggestions').value == '';
  for(let i = 0; i < database.length; i++){
    let cleanedRecordName = database[i].team.toLowerCase().trim();
    if(cleanedRecordName.startsWith(cleanedInput) && cleanedRecordName.length > 0){
      let matching = team.substring(0, searchBar.value.length);
      let remaining = team.substring(searchBar.value.length);
      let result = matching + "<b>" +remaining + "<b>";
      let button = document.createElement(button);
      button.innerHTML = result;
      button.style.display = block;
      button.className = suggestion;
      activateSuggestionButton(button, database[i]);
       autoSuggestions.appendChild(button);
    }
  }
}
  if(autoSuggestions.hasChildNodes()){
    autoSuggestions.style.display = 'block';
  }else{
    autoSuggestion.style.display = none;
  }


function activateSuggestionButton(button, record) {
  button.addEventListener("click", function() {
    displayRecord(record);
    autoSuggestions.innerHTML = "";
    autoSuggestions.style.display = none;
    searchBar.value = "";
  });
}

function getSuggestions(cleanedInput){
let cleanedRecordName = [[],[]];
for(i = 0; i < database.length; i++){
  let cleanedRecordName = database[i].team.toLowerCase().trim();
  if(cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0){
    display.appendChild(suggestions.push(database[i]));
  }
}
return suggestions[i];
}

function displaySuggestions(suggestions){
  display.innerHTML = "";
  let paragraph = document.createElement(p);
  if(suggestions[i].length > 0){
  paragraph.innerHTML = "Did you mean?"
  display.appendChild(paragraph);
  for(i = 0; i < suggestions[i].length; i++){
    let button = document.createElement(button);
    button.innerHTML =  suggestions[i].name;
     button.style.display = 'block';
    button.className = 'suggestion';
    activateSuggestionButton(button, suggestions[i]);
    display.appendChild(button);
     paragraph.innerHTML = "No Results!";
     display.appendChild(paragraph);
  }
  }else{

  }
}
