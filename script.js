let database = [{
  team: "Chivas de Guadalajara"
  origin: 'Guadalajara, Jalisco'
  established: 'May 8, 1906'
  stadium: 'Estadio Akron(cap. 49,850)'
  championships: "12 Liga MX, 7 Campeon de Campeones, 4 Copa MX, 2 CONCACAF Champions Cup, 1 Supercopa MX"
},
{
  team: "Club America"
  origin: 'Mexico City, D.F.'
  established: 'October 12, 1916'
  stadium: 'Estadio Azteca(cap. 87,000)'
  championships:'12 Liga MX, 7 CONCACAF Champions Cup, 5 Copa MX, 5 Campeon de Campeones, 2 Copa Interamericana'
},
{
  team: "Pumas UNAM"
  origin: 'Mexico City, D.F.'
  established: 'August 28, 1954'
  stadium: 'Estadio Olimpico Universitario(Cap. 72,000)'
  championships: '7 Liga MX, 3 CONCACAF Champions Cup, 1 Copa MX, 1 Copa Interamericana'
},
{
  team: 'Deportivo Toluca'
  origin: 'Toluca, Edo. de Mexico'
  established: 'February 12, 1917'
  stadium: 'Estadio Nemesio Diez(cap. 31,000)'
  championships: '10 Liga MX, 4 Campeon de Campeones, 2 Copa MX'
},
{
  team: 'Tigres UANL'
  origin: 'Monterrey, Nuevo Leon'
  established: 'March 7, 1960'
  stadium: 'Estadio Universitario(cap. 41,886)'
  championships: '6 Liga MX, 3 Copa MX, 2 Campeon de Campeones'
},
team: 'Cruz Azul'
origin: 'Jasso, Hidalgo(moved to Mexico City in 70s)'
established: 'March 22, 1927'
stadium: 'Estadio Azteca(cap. 87,000)'
championships: '8 Liga MX, 7 CONCACAF Champions Cup, 3 Copa MX, 2 Campeon de Campeones'
}
];

let searchBar = document.getElementById('search-bar');
let searchButton = document.getElementById('search-button');
let autoSuggestions = document.getElementById('auto-suggestions');
let display = document.getElementById('display');
searchBar.addEventListener('keypress', checkKey);
searchButton.addEventListener('click', processInput);


function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
    // console.log(“You pressed enter!”);
    processInput();
  }
}

function processInput(){
  let cleanedInput == searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML == "";
  autoSuggestions.style.display == 'none';
  searchBar.value == "";
  let databaseRecord == getRecord(cleanedInput);

  if(databaseRecord == null){
    displayRecord(databaseRecord);
  }else{
    alert("no results")
  }
}

function getRecord(cleanedInput){
  for(let i =0; i < database.length; i++){
    var cleanedRecordName = database[i].team.toLowerCase().trim();
  }
  if(cleanedInput == cleanedRecordName){
    return databaseRecord[i];
  }
  }
  return null;
}

function displayRecord(databaseRecord){

}
