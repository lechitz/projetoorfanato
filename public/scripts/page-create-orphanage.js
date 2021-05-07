//CRIANDO O MAPA
const map = L.map('mapid').setView([-21.7508835,-43.3580225], 20); // latitude, longitude e zoom

//ABAIXO É A PRIMEIRA CAMADA QUE VAI RECEBER O MAPA TILELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//CREATE ICON
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //imagem do icone
    iconSize: [58, 68], // largura e altura
    iconAnchor: [29, 68], //aonde está ancorado
})

let marker; //inicia a variavel vazia, mas pode modificar depois.

//creaste and add marker
map.on('click', (event) => { //toda vez que clicar no mapa, entra nessa função
    const lat = event.latlng.lat; //pegando a latitude no mapa
    const lng = event.latlng.lng; //pegando a longitude no mapa

    document.querySelector('[name=lat]').value = lat; //procura no documento o valor de lat
    document.querySelector('[name=lng]').value = lng;
    //remover icone anteriores para deixar só o ultimo
    marker && map.removeLayer(marker) //caso o marker existir, remove o ultimo

    //add icon tileLayer
    marker = L.marker([lat,lng], { icon} ) //toda vez que clicar
    .addTo(map) //adiciona ao mapa o ícone

})

//adicionar o campo de fotos
function addPhotoField() {
    //console.log('está')  //essa parte do código é para verificar com f12/console se ta funcionando o click do button


    //pegar o container de fotos #Images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar a duplicação da última imagem adicionadas
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)  //verifica quantos containers tem e subtrai um do array para ter o valor certo
    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return //se for vazio ele vai parar de executar o restante do código e enviar o return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = "" //verifica qual o 'filho' e seta como vazio

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer) //acrescentar ao container o 'filho'
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    }

    //deletar o campo
    span.parentNode.remove();
}

// seleção do SIM e NAO - visita 
function toggleSelect(event) {

    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active') )

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    // verificar se é sim ou não
    input.value = button.dataset.value

    // pegar o botã clicado


}