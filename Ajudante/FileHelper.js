class FileHelper{

    static cria(informacao){
        return new File(...informacao.toUpperCase().split('/')); 
    }
}