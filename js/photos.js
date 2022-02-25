function loadPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayPhotos(data))
};
loadPhotos();

function displayPhotos(photos) {
    const photoParent = document.getElementById("photos-parent");
    for (const photo of photos) {
        const div = document.createElement("div");
        div.style.textAlign = "center";
        div.innerHTML = `
        <h2>${photo.title}</h2>
        <img src="${"https://bit.ly/3pefvqJ"}}" alt="">`
        photoParent.appendChild(div);
    }
};