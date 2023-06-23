document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`https://disney-princess-facts-api.onrender.com/api/${name}`)
        const data = await response.json()
        console.log(data)
        // document.getElementById('name').innerText = data.fullName
        // document.getElementById('princessWorld').innerText = data.location
        // document.getElementById('princessBirthPlace').innerText = data.birthPlace
        // document.getElementById('princessFavActivity').innerText = data.favoriteActivity
        // document.getElementById('princessFavFood').innerText = data.favoriteFood
        // document.getElementById('alienImage').src = data.image
        // document.getElementById('princessBestFriend').innerText = data.bestFriend
    }catch(error){
        console.log(error)
    }
}