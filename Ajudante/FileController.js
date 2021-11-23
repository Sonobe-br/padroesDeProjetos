class FileController{

    constructor(){

        this._inputDados = document.querySelector('.dado-file'); 
    }

    enviar(){
        let dados = FileHelper.cria(this._inputDados.value);
        let arquivo = new File(...dados);
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.comprimento}, ${arquivo.largura}, ${arquivo.altura}`);
        this._limpaFormulario();
    }

    _limpaFormulario(){

        this._inputDados.value = '';
        this._inputDados.focus(); 
    }
}