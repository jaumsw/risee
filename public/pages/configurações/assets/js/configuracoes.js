function alterarFoto() {
    
    let inputImg = document.getElementById("alterarFoto");

    if (inputImg.files && inputImg.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            
            let imgPerfil = document.querySelector(".usuario-foto-menu");
            let imgPerfil1 = document.querySelector(".usuario-foto");
            imgPerfil.src = e.target.result;
            imgPerfil1.src = e.target.result;
        };

        reader.readAsDataURL(inputImg.files[0]);
    }
}