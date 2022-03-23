/*
          JS Exercises
          EX11) Write a function to add a new link into the navbar
          EX12) Write a function to change the color of the main title
          EX13) Write a function to change the background of the jumbotron
          EX14) Write a function to remove all the links under "Elsewhere"
          EX15) Write a function to change the column size for heading in jumbotron
          EX16) Write a function to remove the "Search" magnifying glass icon
          EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
          EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
          EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
          EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
      */

// EX11) Write a function to add a new link into the navbar



function addNewlink(){
let navbarNode = document.querySelector("nav")

let linkNode = document.createElement("a")

linkNode.innerText = "New Link"

navbarNode.appendChild(linkNode)

}

addNewlink()

// EX12) Write a function to change the color of the main title

function changeColor(){
    let mainTitleNode = document.querySelector("h1")
    mainTitleNode.style.color = "red"
    
}

// EX13) Write a function to change the background of the jumbotron

function changeJumbotron() {
    let jumbotronNode = document.querySelector(".jumbotron")
    jumbotronNode.style.background = "green"
    jumbotronNode.style.setProperty("background-color", "black", "important")
}
changeJumbotron()

// EX14) Write a function to remove all the links under "Elsewhere"

function removelist(){
    let olNode = document.getElementsByClassName("list-unstyled")[1]
    olNode.classList.add("hidden")

}
removelist()


// EX15) Write a function to change the column size for heading in jumbotron
function changeHeading() {
    let jumbotronNode2 = document.querySelector(".col-md-6")
    jumbotronNode2.classList.remove("col-md-6")
    jumbotronNode2.classList.add("col-md-12")


}

changeHeading() 



// EX16) Write a function to remove the "Search" magnifying glass icon

function removeSearchIcon() {
    let searchNode = document.querySelector("svg")
    searchNode.classList.add("hidden")
}
removeSearchIcon()

// // EX17) Write a function to trim just the first 50 characters in 
// the first paragraph for each blog post

function trimFirstPara(){
    let firstParaNode = document.querySelectorAll(".blog-post p:nth-child(5) ")
    for ( let para of firstParaNode){
        
        para.innerText = para.innerText.substring(50)
        
        
    }
}
trimFirstPara()


// function trimFirstPara(){
//     let firstParaNode = document.querySelectorAll(".blog-post p:nth-child(5) ")
//     console.log(firstParaNode)
//     for ( let i=0; i < firstParaNode.length; i++){

//     firstParaNode[i].innerText = firstParaNode[i].innerText.substring(10)
        
//     }
// }
// trimFirstPara()


// EX18) Write a function and attach it to the 
// "Newer" button, to add new Blog Post (just div and title)

function addnewPOST() {
    let newButtonNode = document.querySelectorAll(".blog-pagination a")[1]
    newButtonNode.classList.remove("disabled")
    newButtonNode.removeAttribute("href")
    newButtonNode.addEventListener("click",function(){
        let blog = `<div class="blog-post">
            <h2 class="blog-post-title">Sample blog post</h2></div>`
        let blogMainNode = document.querySelector(".blog-main")
        blogMainNode.innerHTML += blog
        
})
}


addnewPOST()


// EX19) Write a function and attach it to the "Older" button, 
// to remove the last Blog Post

function removeLastPost() {

    let lastButtonNode = document.querySelectorAll(".blog-pagination a")[0]
    
    lastButtonNode.addEventListener("click",function(){
        let blogNode = document.querySelectorAll(".blog-post")
        blogNode[blogNode.length-1].remove()
})
}

removeLastPost() 


// EX20) Write an alert with the name of the author every time the user hover 
// with the mouse over an author name

function alertAuthorName() {
    let authorNode = document.querySelectorAll(" .blog-post-meta >a")

   
    for (let i = 0; i < authorNode.length; i++){
        authorNode[i].addEventListener("mouseover", function(e){
            alert(e.target.innerText)

        })
    }

    }


alertAuthorName()