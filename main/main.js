class Aluno{

    constructor(){
        this.id = 1;
        this.arrayAlunos = [];
    }

    salvar(){
        let aluno = this.lerDados();
        
        if (this.validaCampos(aluno)){
            this.adicionar(aluno);
        }
        
        this.listaTabela();
    }

    listaTabela(){
        let tBody = document.getElementById("tBody");
        tBody.innerText = '';

        let data = new Date();
        let dataFormat = data.toString("hh:mm")

        for(let i = 0; i < this.arrayAlunos.length; i++){
            let tr = tBody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_modalidade = tr.insertCell();
            let td_hora = tr.insertCell();
            
            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nomeAluno;
            td_modalidade.innerText = this.arrayAlunos[i].modalidadeCurso;
            td_hora.innerText = dataFormat;
        }

        console.log(dataFormat)
    }

    adicionar(aluno){
        this.arrayAlunos.push(aluno);
        this.id++;
    }

    lerDados(){

        let aluno = {}

        let rdBasico = document.getElementById("rdBasico").checked;
        let rdEssencial = document.getElementById("rdEssencial");

        console.log(rdBasico)

        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById("inName").value;
        aluno.modalidadeCurso = aluno.modalidadeCurso;

        if (rdBasico == true) {
            aluno.modalidadeCurso = "Básico";
        } else {
            aluno.modalidadeCurso = "Essencial";
        }

        return aluno;
    }

    validaCampos(aluno){
        if(aluno.nomeAluno == "") {
            alert("Verifique o preenchimento do campo nome.");
            inName.focus();
            return false;
        }

        return true;

    }

}

var aluno = new Aluno;


// let inNname = document.getElementById("inName");
// var btEnviar = document.getElementById("btEnviar");

// const validateName = () => {
//     let name = inNname;

//     if (typeof name != "string" || name.length == "") {
//         alert("É necessário que o campo seja preenchido somente com letras e não eteja vazio.");
//         inNname.focus();
//     }
// }

// const popularTabela = () => {

//     let tBody = document.getElementById("tBody")

//     for(let i = 0; i < dadosTabela; i++){
        
//     }
// }

// const salvar = () => {
//     debugger
// }

// btEnviar.addEventListener("click", salvar);