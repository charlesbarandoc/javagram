//const location = document.getElementById("location-el")
const postContainer = document.getElementById("post-container")
const submitEl = document.getElementById("submit-el")
const content = [
    {
        id: 1,
        username: "nasa",
        profile: src="images/nasa-profile.jpg",
        image: src="https://unsplash.com/photos/astronaut-standing-on-moon-beside-usa-flag-U2uKrI4lci8",
        body: "Conquered the moon",
        likes: 46,
        comments: [
            {
                username: "paulcalicoy", date: "january 1, 1999", comment: "so cool" 
            }
        ]
    }
]

const contentHTMLel = []

for (let i = 0; i < content.length; i++) {
   contentHTMLel.push(`
                <div>
                    <div id="head">
                        <image src="${content[i].profile}">
                        <p>${content[i].username}<p>
                    </div>
                    <div id="body">
                        <image src="${content[i].image}">
                        <p>${content[i].username}<span id="">${content[i].body}</span></p>
                        <p>${content[i].likes}</p>
                    </div>
                    <div>

                    
                    </div>
                </div>
                `)

                
    }

postContainer.innerHTML = contentHTMLel




/*submitEl.addEventListener("click", function(){
    addPost.push(imgURL.value)
    imgURL.value = ""
    renderPost()
})*/





