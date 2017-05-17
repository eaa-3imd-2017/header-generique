/* 
  
  JS du Header Generique
  =========================

*/

// on définit la liste des projets (dans un Array javascript) :

var ListeProjets = [

    [ 'Histoire du pays', 'lien-histoire' ],
    [ 'La géographie', 'lien-geographie' ],
    [ 'L’économie portugaise aujourd’hui', '#' ],

    [ 'Histoire de l’immigration portugaise en Suisse', '#' ],
    [ 'Données démographiques : population résidente et flux migratoires', '#' ],
    [ 'Répartition géographique de la population portugaise', '#' ],

    [ 'Intégration socio-économique de la population portugaise en Suisse', '#' ],
    [ 'Vie sociale et culturelle, structuration de la collectivité portugaise en Suisse', '#' ],
    [ 'Langue et maintien de la culture d’origine', '#' ]

];

window.onload = function() {

  // on définit l'élément cible:
  var navProj = document.getElementById("nav-projets");

  // on crée les contenus:

  // Le H1:

  var navProjH1 = document.createElement("h1");
      navProjH1.innerHTML = "La communauté portugaise en Suisse";
      navProj.appendChild(navProjH1);

  // Le label: <label for="nav-check">
  
  var navProjLabel = document.createElement("label");
      navProjLabel.htmlFor = 'nav-check';
      navProjLabel.innerHTML = "<span>menu</span>";
      navProj.appendChild(navProjLabel);

  // Le input: <input type="checkbox" id="nav-check"/>

  var navProjInput = document.createElement("input");
      navProjInput.setAttribute('type', 'checkbox');
      navProjInput.id = 'nav-check';
      navProj.appendChild(navProjInput);

  // Le menu:

  var navProjOL = document.createElement("ol");

  var navProjMenu = '';

  // on utilise une boucle pour afficher les données contenues dans ListeProjets

  for (var i = 0; i < ListeProjets.length; i++) {

    var Projet = ListeProjets[i];

    // on produit ceci : <li><a href="#">Histoire du pays</a></li>

    navProjMenu += '<li><a href="' +Projet[1]+ '">' +Projet[0]+ '</a></li>';

  }

  navProjOL.innerHTML = navProjMenu;
  
  // on insère les contenus

  navProj.appendChild(navProjOL);

};



