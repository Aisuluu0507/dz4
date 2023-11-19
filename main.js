const defaultUserPhoto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O9Z9ciCh3SLj6-NTncrqt_6kiRSh_Wy2kg&usqp=CAU'

const cakesBlock =document.querySelector('.cakes')

const cakes =[
    {
        name: ' Шоколадный',
        recipe: 'Мука 300гр, какао-порошок 2ст ложки, сливочное масло 200гр, яйца 5шт, сахар 150гр, разрыхлитель 1ч.л',
        price:1500,
        photo:'images/шоколадный торт.jpg'
    },
    {
        name:'Чизкейк',
        recipe: 'печенье песочное300гр, масло сливочное 100гр, сыр сливочный 600гр, сахар 150гр, яйца 3шт, сливки 30-35% 200мл',
        price:1200,
        photo:'images/чизкейк.jpg'
    },
    {
        name:'Тирамису',
        recipe:'яйца 6шт, слив.сыр Маскарпоне 500г, сахар 150г, печенье Савоярди 250гр, кофе экспрессо 300мл, какао-порошок 1-2ст.л',
        price:700,
        photo:'images/тирамису.jpg'
    },
    {
        name:'Молочная девочка',
        recipe: 'Сгущенное молоко 600гр, яйцо 3шт, мука 240гр, разрыхлитель 15гр, творожный сыр 500гр, сливки 33-38% 150гр, сахарная пудра 150гр',
        price:1600,
        photo:'images/молочная девочка.jpg'
    },
    {
        name:'Сникерс',
        recipe: 'сливочное масло 200гр, сахар 400гр, яйцо 3шт, куфир 400мл, мука 350гр, какао-порошок 30гр, разрыхлитель 10гр, ванильный сахар 15гр',
        price:2250,
        photo:'images/сникерс.jpg'
    },
    {
        name:'Красный бархат',
        recipe: 'мука 340гр,какао-порошок 1ст.л, соль 1.4 ч.л, соода 1 ч.л, масло 300мл, сливки 35% 150гр, сметана 20%, красный пищевой кравситель 2ч.л',
        price:850,
        photo:'images/красный бархат.jpg'
    }
]

cakes.forEach((cake) => {
    const cakeBlock = document.createElement('div')
    cakeBlock.setAttribute('class','cakeCard')
    cakeBlock.innerHTML =`
    <img src="${cake.photo ? cake.photo:defaultUserPhoto}" alt="img">
    <h1>Name:${cake.name}</h1>
    <span>Recipe:${cake.recipe}</span>
    <p>Price:${cake.price}</p>
    `
    cakesBlock.append(cakeBlock)
    
})

const getBtn = document.querySelector('.get-btn')

const request_cakes=()=>{
    const request = new XMLHttpRequest()
            request.open('GET','cakes.json')
            request.setRequestHeader('Content-type','application/json')
            request.send()
    
            request.addEventListener('load',()=>{
                const data =JSON.parse(request.response)
                console.log(data)
            })
     }
     request_cakes()
