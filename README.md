# header générique

Ce projet contient le "Header générique", qui sera utilisé par tous les sites du brief "La communauté portugaise en Suisse".

Rappel du brief:

> "Depuis un *header générique* à tous, contenant *le titre en-tête* et *un menu déroulant* permettant l’accès aux autres thèmes, ainsi qu’un *footer* ou sera intégré le logo de la manifestation et d’autres infos à venir, le contenu de votre interface doit être adapté et conçu en accord avec la ligne graphique que vous aurez développée pour votre thème."

## Comment inclure le header

Afin de faciliter la maintenance, les contenus du header sont générés en Javascript.

Dans le code HTML de votre projet, il suffit d'inclure cette balise vide, juste après l'ouverture du BODY:

```html
<nav id="nav-projets"></nav>
```

Il faut également inclure les fichiers CSS et JavaScript pour créer et styler le header.

Voici le code:

```html
<link rel="stylesheet" href="https://eaa-3imd-2017.github.io/header-generique/header-generique.css">
<script src='https://eaa-3imd-2017.github.io/header-generique/header-generique.js'></script>
```

## Comment modifier le titre et le lien de votre projet

Le contenu du menu est généré dynamiquement en JavaScript. 

Pour modifier le titre et le lien de votre projet, il faut renseigner ces données dans le fichier [header-generique.js](header-generique.js), dans `var ProjetsMultiArray`.