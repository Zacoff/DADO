function aperte(){
var sorteio = Math.floor(Math.random() * 6 + 1);
    
switch (sorteio) {
    case 1:
        document.getElementById('face').src = './image/um.png';
        break;
    case 2:
        document.getElementById('face').src = './image/dois.png'
        break;
    case 3:
        document.getElementById('face').src = './image/tres.png'
        break;
    case 4:
        document.getElementById('face').src = './image/quatro.png'
        break;
    case 5:
        document.getElementById('face').src = './image/cinco.png'
        break;
    case 6:
        document.getElementById('face').src = './image/seis.png'
        break;
    default:
}};