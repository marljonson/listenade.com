const reviews = [
    {
        href: "/reviews/paramore-all-we-know-is-falling/",
        reviewImage: "/assets/paramore_allweknowisfalling.png",
        albumTitle: "All We Know is Falling",
        albumArtist: "Paramore",
        author: "Marl Jonson",
        reviewDate: "December 20, 2024"
    },
    {
        href: "/reviews/paramore-riot/",
        reviewImage: "/assets/paramore_riot.png",
        albumTitle: "Riot!",
        albumArtist: "Paramore",
        author: "Marl Jonson",
        reviewDate: "December 20, 2024"
    },
    {
        href: "/reviews/paramore-brand-new-eyes/",
        reviewImage: "/assets/paramore_brandneweyes.jpg",
        albumTitle: "Brand New Eyes",
        albumArtist: "Paramore",
        author: "Marl Jonson",
        reviewDate: "December 20, 2024"
    },
    {
        href: "/reviews/paramore-paramore/",
        reviewImage: "/assets/paramore_paramore.jpg",
        albumTitle: "Paramore",
        albumArtist: "Paramore",
        author: "Marl Jonson",
        reviewDate: "December 20, 2024"
    },
    {
        href: "/reviews/taylor-swift-speak-now/",
        reviewImage: "/assets/taylorswift_speaknow.png",
        albumTitle: "Speak Now",
        albumArtist: "Taylor Swift",
        author: "Marl Jonson",
        reviewDate: "December 21, 2024"
    },
    {
        href: "/reviews/taylor-swift-red/",
        reviewImage: "/assets/taylorswift_red.jpg",
        albumTitle: "Red",
        albumArtist: "Taylor Swift",
        author: "Marl Jonson",
        reviewDate: "December 21, 2024"
    },
    {
        href: "/reviews/taylor-swift-1989/",
        reviewImage: "/assets/taylorswift_1989.png",
        albumTitle: "1989",
        albumArtist: "Taylor Swift",
        author: "Marl Jonson",
        reviewDate: "December 21, 2024"
    },
    {
        href: "/reviews/taylor-swift-lover/",
        reviewImage: "/assets/taylorswift_lover.png",
        albumTitle: "Lover",
        albumArtist: "Taylor Swift",
        author: "Marl Jonson",
        reviewDate: "December 21, 2024"
    },
    {
        href: "/reviews/kanye-west-graduation/",
        reviewImage: "/assets/kanyewest_graduation.jpg",
        albumTitle: "Graduation",
        albumArtist: "Kanye West",
        author: "Marl Jonson",
        reviewDate: "December 22, 2024"
    },
    {
        href: "/reviews/olivia-rodrigo-guts/",
        reviewImage: "/assets/oliviarodrigo_guts.jpg",
        albumTitle: "Guts",
        albumArtist: "Olivia Rodrigo",
        author: "Marl Jonson",
        reviewDate: "December 22, 2024"
    },
    {
        href: "/reviews/clairo-immunity/",
        reviewImage: "/assets/clairo_immunity.jpeg",
        albumTitle: "Immunity",
        albumArtist: "Clairo",
        author: "Marl Jonson",
        reviewDate: "December 22, 2024"
    },
    {
        href: "/reviews/beabadoobee-fake-it-flowers/",
        reviewImage: "/assets/beabadoobee_fakeitflowers.jpg",
        albumTitle: "Fake It Flowers",
        albumArtist: "Beabadoobee",
        author: "Marl Jonson",
        reviewDate: "December 22, 2024"
    },
    {
        href: "/reviews/blank-banshee-blank-banshee-0/",
        reviewImage: "/assets/blankbanshee-blankbanshee0.jpeg",
        albumTitle: "Blank Banshee 0",
        albumArtist: "Blank Banshee",
        author: "Marl Jonson",
        reviewDate: "December 27, 2024"
    },
    {
        href: "/reviews/tate-mcrae-think-later/",
        reviewImage: "/assets/tatemcrae-thinklater.png",
        albumTitle: "Think Later",
        albumArtist: "Tate McRae",
        author: "Marl Jonson",
        reviewDate: "December 27, 2024"
    },
    {
        href: "/reviews/the-1975-the-1975/",
        reviewImage: "/assets/the1975-the1975.jpg",
        albumTitle: "The 1975",
        albumArtist: "The 1975",
        author: "Marl Jonson",
        reviewDate: "December 27, 2024"
    },
    {
        href: "/reviews/gracie-abrams-the-secret-of-us/",
        reviewImage: "/assets/gracieabrams-thesecretofus.jpg",
        albumTitle: "The Secret of Us",
        albumArtist: "Gracie Abrams",
        author: "Marl Jonson",
        reviewDate: "December 28, 2024"
    }
];

const emptyBody = document.querySelector('emptybody');

// Loop through the reviews array and create review divs
reviews.slice().reverse().forEach((review, index) => {
    const reviewDiv = document.createElement('span');

    reviewDiv.innerHTML = `
        <div class="review">
            <a class="review-page-tile" href="${review.href}">
                <div class="review-image">
                    <img src="${review.reviewImage}">
                </div>
                <div class="review-text">
                    <div class="album-title">
                        ${review.albumTitle}
                    </div>
                    <div class="album-artist">
                        ${review.albumArtist}
                    </div>
                </div>
                <div class="bottom-texts">
                    <div class="review-author">
                        by ${review.author}
                    </div>
                    <div class="review-date">
                        ${review.reviewDate}
                    </div>
                </div>
            </a>
        </div>
        `;

    emptyBody.appendChild(reviewDiv)
});