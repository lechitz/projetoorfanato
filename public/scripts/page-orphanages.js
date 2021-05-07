//CRIANDO O MAPA
const map = L.map('mapid').setView([-21.7508835,-43.3580225], 20); // latitude, longitude e zoom

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

function addMarker({id, name, lat, lng}) {

 //CRIANDO O PUP-UP OVERLAY
 const popup = L.popup({
    closeButton: false, //desabilitando o botão
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" > </a>`)

// ADICIONAR UM POP-UP NO MAPA
L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)

})