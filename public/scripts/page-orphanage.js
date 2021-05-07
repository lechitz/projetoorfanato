const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CRIANDO O MAPA
const map = L.map('mapid', options).setView([-21.7508835,-43.3580225], 20); // latitude, longitude e zoom

//ABAIXO É A PRIMEIRA CAMADA QUE VAI RECEBER O MAPA TILELAYER
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //imagem do icone
    iconSize: [58, 68], // largura e altura
    iconAnchor: [29, 68], //aonde está ancorado
    popupAnchor: [170, 2]
})

// ADICIONAR UM POP-UP NO MAPA
L
.marker([-21.7508835,-43.3580225], { icon })
.addTo(map)

function selectImage(event){
    const button = event.currentTarget

    console.log(button.children)

    //remover todas as classes .active dos botões, para isso precisa-se fazer uma logica pra olhar um botão de cada vez
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active") //não precisa colocar o ponto pq já é ClassList
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
    imageContainer.src = image.src
    //adicionar a classe .active para este botão clicado
    button.classList.add('active')
}