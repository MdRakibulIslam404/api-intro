function loadComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => displayComments(data))
};
loadComments();

function displayComments(comments) {
    const commentsContainer = document.getElementById("comments-container");
    for (const comment of comments) {
        // console.log(comment);
        const div = document.createElement("div");
        div.style.textAlign = "center";
        div.style.backgroundColor = "orange";
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.innerHTML = `
           <h2>${comment.name}</h2>
           <h4>${comment.email}</h4>
           <p>${comment.body}</p>`
        commentsContainer.appendChild(div);
    }
};