class File {
    
    constructor(nome,comprimento,largura,altura){
    
        this._nome = nome;
        this._comprimento = comprimento;
        this._largura = largura;
        this._altura = altura; 
    }

    get nome(){

        return this._nome;
    }

    get comprimento(){

        return this._comprimento;
    } 

    get largura(){

        return this._largura;
    }

    get altura(){
        
        return this._altura;
    }
}