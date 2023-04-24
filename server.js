require('dotenv').config();

const express = require ('express')
const cors = require ('cors')
const app = express()
const PORT = 8080
const MongoClient = require('mongodb').MongoClient
// const connectionString = process.env.connectionString || 'mongodb+srv://edj46760:DTulmEwwAX4dtvxL@princess-info.xsfcktc.mongodb.net/?retryWrites=true&w=majority';
const connectionString = 'mongodb+srv://edj46760:DTulmEwwAX4dtvxL@princess-info.xsfcktc.mongodb.net/?retryWrites=true&w=majority'
app.use(cors())
app.use(express.json())



// const disneyPrincess = {
//     'elsa':{
//         'fullName': 'Queen Elsa of Arendelle',
//         'birthPlace': 'Arendelle',
//         'Location': 'Arendelle',
//         'favoriteFood': 'Chocolate ice cream',
//         'favoriteActivity': 'Ice skating and creating snow sculptures',
//         'bestFriend': 'Olaf the snowman'
//     },
//     'anna': {
//         'fullName': 'Priness Anna of Arendelle',
//         'birthPlace': 'Arendelle',
//         'Location': 'Arendelle',
//         'favoriteFood': 'Chocolate cake',
//         'favoriteActivity': 'Exploring and spending time wtih her sister Elsa',
//         'bestFriend': 'Kristoff and Sven (and Elsa of course)'
//     },

//     'unknown': {
//         'fullName': 'Unknown',
//         'birthPlace': 'Unknown',
//         'Location': 'Unknown',
//         'favoriteFood': 'Unknown',
//         'favoriteActivity': 'Unknown',
//         'bestFriend': 'Unknown'
    
//     },

//     'tiana': {
//         'fullName': 'Tiana',
//         'birthPlace': 'New Orleans, Louisiana',
//         'Location': 'New Orleans, Louisiana',
//         'favoriteFood': 'Beignets',
//         'favoriteActivity': 'Cooking, singing, and dancing',
//         'bestFriend': 'Louis the alligator and Ray the firefly'
    
//     },

//     'jasmine': {
//         'fullName': 'Princess Jasmine',
//         'birthPlace': 'Agrabah',
//         'Location': 'Agrabah',
//         'favoriteFood': 'Fresh fruit and Arabian cuisine',
//         'favoriteActivity': 'Exploring the marketplace and flying on magic carpet',
//         'bestFriend': 'Rajah and Genie'
    
//     },

//     'cinderella': {
//         'fullName': 'cinderella',
//         'birthPlace': 'A small kingdom',
//         'Location': 'The prince castle',
//         'favoriteFood': 'Pumpkin pie',
//         'favoriteActivity': 'Singing, dancing, and dreaming',
//         'bestFriend': 'Jaq and Gus, the mice, and her Fairy Godmother'
    
//     },

//     'belle': {
//         'fullName': 'Belle',
//         'birthPlace': 'A small French village',
//         'Location': 'The Beast castle',
//         'favoriteFood': 'French pastries',
//         'favoriteActivity': 'Reading books and going on adventures',
//         'bestFriend': 'Lumiere the candlestick, Cogsworth, Mrs. Potts'
    
//     },

//     'moana': {
//         'fullName': 'Moana',
//         'birthPlace': 'Motunui Island',
//         'Location': 'The ocean and various islands',
//         'favoriteFood': 'Coconut',
//         'favoriteActivity': 'Sailing, wayfinding, and exploring the ocean',
//         'bestFriend': 'Maui the demigod and Pua the pig'
    
//     },

//     'snow white': {
//         'fullName': 'Snow White',
//         'birthPlace': 'Unknown',
//         'Location': 'The dwarfs cottage and the princes castle',
//         'favoriteFood': 'Apple pie',
//         'favoriteActivity': 'Singing, dancing, and spending tiem with animals',
//         'bestFriend': 'The seven dwarfs, and the woodland animals'
    
//     },

//     'pocahontas': {
//         'fullName': 'Pocahontas',
//         'birthPlace': 'Virginia, United States',
//         'Location': 'Jameston, Virginia',
//         'favoriteFood': 'Cornbread',
//         'favoriteActivity': 'Exploring nature, canoeing, and singing',
//         'bestFriend': 'Meeko and Flint'
    
//     },

//     'ariel': {
//         'fullName': 'Princess Ariel',
//         'birthPlace': 'Atlantica (underwater kingdom)',
//         'Location': 'Atlantica',
//         'favoriteFood': 'Fish and seafood',
//         'favoriteActivity': 'Singing, exploring, and collecting human artifacts',
//         'bestFriend': 'Flounder and Sebastian'
    
//     },

//     'aurora': {
//         'fullName': 'Princess Aurora',
//         'birthPlace': 'Unknown',
//         'Location': 'The castle in the Enchanted Forest',
//         'favoriteFood': 'Berry tarts',
//         'favoriteActivity': 'Dancing, singing, and spending time with nature',
//         'bestFriend': 'Merryweather, Flora, and Fauna'
    
//     },

//     'mulan': {
//         'fullName': 'Fa Mulan',
//         'birthPlace': 'China',
//         'Location': 'Imperial City, China',
//         'favoriteFood': 'Dumplings',
//         'favoriteActivity': 'Martial Arts, archery, and horse riding',
//         'bestFriend': 'Mushsu, Cri-Kee'
    
//     },

//     'rapunzel': {
//         'fullName': 'Priness Repunzel',
//         'birthPlace': 'Kingdom of Corona',
//         'Location': 'Kingdom of Corona',
//         'favoriteFood': 'Hazelnut soup',
//         'favoriteActivity': 'Painting, reading, and exploring the world outside her tower',
//         'bestFriend': 'Unknown'
    
//     },

// }

MongoClient.connect(connectionString,{useUnifiedTopology:true, useNewUrlParser:true})
    .then(client =>{
        console.log('connected to Database')
        const db = client.db('disney-api')
        const infoCollection = db.collection('princess-info')
   

        app.get('/', (request, response)=>{
        response.sendFile(__dirname + '/index.html') 
    })

        app.get('/api/:name',(request,response)=>{
        const princessName = request.params.name.toLowerCase();infoCollection
        .find({ name:princessName })
        .toArray()
        .then(results =>{
            console.log(results)
            response.json(results[0])
        })
        .catch((error) => console.error(error))
    //     if(disneyPrincess[princessName]){  
    //     response.json(disneyPrincess[princessName])
    // }else{
    //     response.json(disneyPrincess ['unknown'])
    // }
    
    })
})

.catch((error)=>console.error(error))

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is now running on port ${PORT}, better go catch it!`)
})