
// Select the element with the class 'writing-left'
const writing_left = document.querySelector('.writing-left');

// Get the current URL's pathname
const path = window.location.pathname;

// Split the path into parts using '/' as the delimiter
const pathParts = path.split('/');

// Get the album and artist part (assuming the structure is /reviews/{artist-album}/)
const albumInfo = pathParts[pathParts.length - 1];  // "basement-jaxx-rooty"

// Split the last part into artist and album (this assumes the artist and album are separated by a hyphen)
const words = albumInfo.split('-');

// Now check the reviews to see if the artist and album match
review_texts.forEach((review) => {
    // Format the review's title and artist similarly to how we split the URL path
    const formattedTitle = review.albumTitle.toLowerCase().replace(/\s+/g, '-');
    const formattedArtist = review.albumArtist.toLowerCase().replace(/\s+/g, '-');
    // Check if the formatted artist and album match the last part of the URL
    if (formattedArtist == words[0]) {
        // Create a new div element and insert the review content
        const insert = document.createElement('div');
        insert.innerHTML = `
            <div class="tldr"><b>[TL;DR]</b><br>${review.tldr}</div><br>${review.main}
            <br><br>Favorite song: <a href="${review.link}">${review.linkname}</a><br><br>
        `;
        writing_left.appendChild(insert); // Append the new div to the writing_left element
    }
});