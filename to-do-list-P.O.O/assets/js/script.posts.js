const posts = [];

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    console.log(title, category, resume, author, date);

    if (title && category && resume && author && date) {
        cleanFields();
        storePost(title, category, resume, author, date);
    }else {
        alert("Preencha todos os campos")
    }
}

function cleanFields() {
    
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}

function storePost (title, category, resume, author, date) {
    const post = {
        title,
        category,
        resume,
        author,
        date
    };

    post.push(post);

    console.log(posts);
}