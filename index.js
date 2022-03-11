let profsport = false;



function smoke() {
    if (profsport == true) {
        document.getElementById("despawn").style.display = 'flex';
    }
}


function smokeClick() {
    document.getElementById("harcelement").style.display = 'none';
    profsport = true;
    smoke();
}


