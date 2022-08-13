function aperte(){
    let sorteio = Math.floor(Math.random() * 6 + 1);
    
    document.getElementById('face').src = `./image/${sorteio}.png`;
        
};