const searchButton = document.getElementById('searchButton');
searchButton.addEventListener("click", function(){
    const songName = document.getElementById('songName').value;
    // console.log(songName);
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => showSearchResult(data))
})

function showSearchResult(data){
    const searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const element = data.data[i];
        const title = element.album.title;
        const artist = element.artist.name;
        const child = `<p class="author lead"><strong>${title}</strong> by <span>${artist}</span> <button class="btn btn-success">Get Lyrics</button></p>`;
        searchResult.innerHTML += child;
    }
}