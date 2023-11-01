console.log("connected")
let content = document.getElementById("content")



function insertPost(post) {
let id = `<h1>${post.id}</h1>`
let title = `<h1>${post.title}</h1>`
let body = `<h1>${post.body}</h1>`

content.insertAdjacentHTML("beforeend", id);
content.insertAdjacentHTML("beforeend", title);
content.insertAdjacentHTML("beforeend", body)
}

let btn = document.getElementById("btn");
btn.addEventListener(`click`, callApi);

function success(response) {
    let posts = response.data
    
    let counter = 0
    while (counter < posts.length) {
    
        insertPost(posts[counter])
        //console.log(counter)
    
    counter++
    }

    //console.log(posts )
}

function failed(error) {
    console.log("Error happening", error)
}

function callApi() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
        success
    ).catch(failed)
}


