const emptyBody = document.querySelector('emptybody');

// Loop through the reviews array and create review divs
reviews.slice().reverse().forEach((review, index) => {
    const reviewDiv = document.createElement('div');

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
                    <a href="/artists/${review.albumArtist.toLowerCase().replace(/\s+/g, '-')}/">
                        <div class="album-artist">
                            ${review.albumArtist}
                        </div>
                    </a>
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