const postContainer = document.getElementById("post-container")
const idInput = document.getElementById("id-input")
const imgURL = document.getElementById("img-url-input")
const usernameInput = document.getElementById("username-input")
const profileInput = document.getElementById("profile-input")
const captionInput = document.getElementById("caption-input")
const submitEl = document.getElementById("submit-el")
    

const contents = [
    {
        id: 1,
        username: "nasa",
        profile: "images/nasa-profile.jpg",
        image: "https://images.unsplash.com/photo-1541873676-a18131494184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFzYXxlbnwwfHwwfHx8MA%3D%3D",
        body: "Conquered the moon"
        //likes: 46,
        // comments: [
        //     {
        //         username: "paulcalicoy", date: "July 20, 1969", text: "so cool" 
        //     }
        // ]
    },

    {
        id: 2,
        username: "nasa",
        profile: "images/nasa-profile.jpg",
        image: "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        body: "Samsung Galaxy"
        //likes: 46,
        // comments: [
        //     {
        //         username: "paulcalicoy", date: "July 20, 1969", text: "so cool" 
        //     }
        // ]
    },
    {
        id: 3,
        username: "watarukatolbwk",
        profile: "images/wataru-profile.jpg",
        image: "https://libertywalk.co.jp/wp-content/uploads/2025/04/LB_6329.jpg",
        body: "LB-KAIDO WORKS NISSAN R32 SKYLINE🤣 "
        //likes: 46,
        // comments: [
        //     {
        //         username: "paulcalicoy", date: "July 20, 1969", text: "so cool" 
        //     }
        // ]
    }
];


submitEl.addEventListener("click", function() {
    console.log("submiting")
    contents.unshift({
        id: idInput.value, 
        profile: profileInput.value,
        username: usernameInput.value, 
        image: imgURL.value, 
        body: captionInput.value
    })
    render()
})


function render() {
    const contentHTMLel = []
    for (let i = 0; i < contents.length; i++) {
    contentHTMLel.push(`
        <div id="post-from-java">
            <div id="head">
                <image src="${contents[i].profile}">
                <p id="username">${contents[i].username}<p>
            </div>
            <div id="body">
                <image src="${contents[i].image}"> 
                <ul>
                    <li><image src="images/heart-nofill.png" id="heart-el" onclick="like()" /></li>
                    <li><p id="like-display"></p></li>
                    <li><image src="images/chat.png"/></li>
                    <li><image src="images/send.png"/></li>
                    <li><image src="images/save.png" id="bookmark"/></li>
                </ul>
                <!--<p>${contents[i].likes}</p>-->
                <p><span id="username">${contents[i].username}</span> <span id="caption">${contents[i].body}</span></p>
            </div>
        </div>
    `)}

    postContainer.innerHTML = contentHTMLel.join("")
}

render()







