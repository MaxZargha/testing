<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
        }
        .header {
            background: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #444;
        }
        nav a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-transform: uppercase;
        }
        nav a:hover {
            background-color: #555;
        }
        .content {
            padding: 20px;
            margin-top: 20px;
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding: 20px;
        }
        .gallery img {
            width: 100%;
            height: auto;
            border: 2px solid #ccc;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #333;
            color: white;
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Mon Site Web</h1>
    </header>
    <nav>
        <a href="#home">Accueil</a>
        <a href="#gallery">Galerie</a>
        <a href="#about">À propos</a>
    </nav>
    <div class="content" id="home">
        <h2>Bienvenue sur mon site!</h2>
        <p>Ceci est un exemple de paragraphe d'introduction sur mon site web. Vous pouvez modifier ce texte pour mieux correspondre à votre contenu.</p>
    </div>
    <div class="gallery" id="gallery">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
    </div>
    <div class="content" id="about">
        <h2>À propos de moi</h2>
        <p>Écrivez ici quelques lignes à propos de vous ou de votre projet. C'est une bonne place pour présenter votre travail aux visiteurs de votre site.</p>
    </div>
    <footer class="footer">
        <p>Copyright © 2024 Mon Nom. Tous droits réservés.</p>
    </footer>
</body>
</html>

