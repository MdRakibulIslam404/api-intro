function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPosts(data))
};
loadPosts();

function displayPosts(posts) {
    const postsContainer = document.getElementById("posts");
    for (const post of posts) {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>`
        postsContainer.appendChild(div);
        // console.log(post);
    }
};

// POST ||
function addPost() {
    fetch("https://jsonplaceholder.typicode.com/pusts", {
        method: "POST",
        body: JSON.stringify({
            title: "My new post",
            body: "This is my new posts",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))
};
addPost();