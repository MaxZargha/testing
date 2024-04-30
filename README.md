<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio de Max Zargha</title>
    <style>
        body {
            font-family: Arial, sans-serif; /* Uniform font for all text */
        }

        .header-image {
            display: block;
            margin: 0 auto; /* Centre l'image horizontalement */
            max-width: 100%; /* Assure que l'image ne dépasse pas la largeur de l'écran */
            height: auto; /* Maintient le ratio de l'image */
            width: 30%; /* Réduit la taille de l'image à 30% de sa largeur originale */
        }

        .carousel {
            width: 60%;
            overflow: hidden;
            margin: 50px auto;
            position: relative;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .carousel-container {
            display: flex;
            width: calc(100% * 5); /* Assume 5 images */
            transition: transform 1s ease;
            cursor: pointer; /* Indicate clickable items */
        }

        .carousel-item {
            flex: 100%; /* Each item is 100% of carousel width */
        }

        .carousel-item img {
            width: 100%; /* Full width of the carousel item */
            height: auto; /* Maintain aspect ratio */
            display: block;
        }
    </style>
    <script>
        var currentIndex = 0;
        function nextImage() {
            var container = document.getElementById("carouselContainer");
            var totalItems = container.children.length;
            currentIndex++;
            if (currentIndex >= totalItems) {
                currentIndex = 0;
            }
            var newTranslateValue = -100 * currentIndex;
            container.style.transform = `translateX(${newTranslateValue}%)`;
        }
    </script>
</head>
<body>
    <header>
        <img src="zargha_site.jpg" alt="Image de Max Zargha" class="header-image">
    </header>

    <section id="bio">
        <h1>Max Zargha</h1>
        <p>Artiste franco-iranien diplômé de l’Université Paris 8 dans le domaine des arts. À travers ses collages, Max cherche à intriguer, politiser, et illustrer la dualité du monde et des inégalités sociologiques, tout en explorant les énergies subtiles de l’être humain inspiré par le surréalisme.</p>
    </section>

    <section id="gallery">
        <h2>Galerie</h2>
        <div class="carousel" onclick="nextImage()">
            <div class="carousel-container" id="carouselContainer">
                <div class="carousel-item">
                    <img src="Colonel.jpg" alt="Image 1">
                </div>
                <div class="carousel-item">
                    <img src="L'Autel.jpg" alt="Image 2">
                </div>
                <div class="carousel-item">
                    <img src="Le Chirurgien.jpg" alt="Image 3">
                </div>
                <div class="carousel-item">
                    <img src="Surréalisme.jpg" alt="Image 4">
                </div>
                <div class="carousel-item">
                    <img src="Tristesse.jpg" alt="Image 5">
                </div>
            </div>
        </div>
    </section>
</body>
</html>
