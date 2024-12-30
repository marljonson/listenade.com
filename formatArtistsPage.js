const emptyBody = document.querySelector('emptybody');
let allArtists = [];

// Loop through the reviews array and create review divs
reviews.slice().reverse().forEach((review, index) => {
    if (!allArtists.includes(review.albumArtist)) {
        allArtists.push(review.albumArtist)
        const reviewDiv = document.createElement('div');

        reviewDiv.innerHTML = `
        <div class="review">
            <a class="review-page-tile" href="/artists/${review.albumArtist.toLowerCase().replace(/\s+/g, '-')}/">
                <div class="review-image">
                    <img src="${review.reviewImage}">
                </div>
                <div class="review-text">
                    <div class="album-title">
                        ${review.albumArtist}
                    </div>
                </div>
            </a>
        </div>
        `;
        emptyBody.appendChild(reviewDiv)
    }
});