const emptyBody = document.querySelector('emptybody');
let allAlbums = [];

// Get the current URL's pathname
const path = window.location.pathname;
// Split the path into parts using '/' as the delimiter
const pathParts = path.split('/');
// Get the parent folder name (second-to-last part of the URL path)
const parentFolderName = pathParts[pathParts.length - 2];

// Loop through the reviews array and create review divs
reviews.slice().reverse().forEach((review, index) => {
    const theCurrentTitle = review.albumTitle.toLowerCase().replace(/\s+/g, '-');
    const theCurrentArtist = review.albumArtist.toLowerCase().replace(/\s+/g, '-');

    if (theCurrentArtist == parentFolderName && !allAlbums.includes(theCurrentTitle)) {
        allAlbums.push(theCurrentTitle);
        const reviewDiv = document.createElement('div');

        reviewDiv.innerHTML = `
        <div class="review" class="on-artist-page" style="max-width: 300px;">
            <a class="review-page-tile" href="/reviews/${review.albumArtist.toLowerCase().replace(/\s+/g, '-')}-${review.albumTitle.toLowerCase().replace(/\s+/g, '-')}/">
                <div class="review-image">
                    <img src="${review.reviewImage}">
                </div>
                <div class="review-text">
                    <div class="album-title">
                        ${review.albumTitle}
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
    }
});