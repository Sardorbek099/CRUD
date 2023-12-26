let youtubeVideos = []
let currentCount


function addVideo(){
    let title = document.querySelector("#title").value
    let videoUrl = document.querySelector("#videoUrl").value
    videoUrl = videoUrl.slice(17,videoUrl.length)
    youtubeVideos.push(
        {
            title:title,
            videoUrl:videoUrl
        }
    )
    // console.log(videoUrl);
    render(youtubeVideos)
    document.querySelector("#title").value =''
    document.querySelector("#videoUrl").value =''
}

function searchVideos(){
    let searchedTitle = document.querySelector("#searchedTitle").value

    let resultSearch = []
    youtubeVideos.map((item)=>{
       if(item.title.toLowerCase().includes(searchedTitle.toLowerCase())){
        resultSearch.push(item)
       }
    })
    render(resultSearch)
}

function deleteVideo(url) {
    youtubeVideos.splice(url,1)
    render(youtubeVideos)
}
function editVideo(counter) {
    currentCount = counter
    document.querySelector("#titleForEdit").value = youtubeVideos[counter].title
    document.querySelector("#videoUrlForEdit").value = youtubeVideos[counter].videoUrl
}

function addEditedVideo(){
    let newTitle = document.querySelector("#titleForEdit").value
    let newUrl = document.querySelector("#videoUrlForEdit").value
    newUrl = newUrl.slice(17,newUrl.length)
    
    youtubeVideos[currentCount].title = newTitle
    youtubeVideos[currentCount].videoUrl = newUrl

    render(youtubeVideos)
}
function render(array){

    let row = document.querySelector(".row")
    document.querySelector(".row").innerHTML = ""
    let counter = 0
    array.map((item) =>{
        let col4 = document.createElement("div")
        col4.classList.add("col-4")
        col4.innerHTML = `<div class="card">
        <iframe class="w-100" src="https://www.youtube.com/embed/${item.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p class="card-title text-center my-3">${item.title}</p>
        <button class="btn btn-danger" onclick="deleteVideo(${counter})">O'chirish</button>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editVideo(${counter})">Tahrirlash</button>
        </div>`
        row.append(col4)
        counter++
    })



}