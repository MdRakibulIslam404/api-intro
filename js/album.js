function loadAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data => displayAlbums(data))
};

loadAlbums();

function displayAlbums(albums) {
    const albumContainer = document.getElementById("albums");
    for (const album of albums) {
        const p = document.createElement("p");
        // p.innerText = `${album.title}`; // ekta property / data load korte chaile ` back quotes ` and ${ dynamic } na korlew hoy
        p.innerText = album.title;
        p.style.textAlign = "center";
        albumContainer.appendChild(p);
    }

};