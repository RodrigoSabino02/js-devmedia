//manipulaçao de variaveis
let pi = 3.14159265358979
let nome = "RoDRiGo"

console.log(pi.toFixed(2))
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())

//array

let nordeste = ["maranhao", "piaui", "ceara", "rio grande do norte", "paraiba", "pernambuco", "alagoas", "sergipe", "bahia"]
let norte = ["acre", "rondonia", "amazonas", "roraima", "para", "amapa", "tocantins"]
let sudeste = ["sao paulo", "rio de janeiro", "minas gerais", "espirito santo"]
let centroeste = ["mato grosso", "mato grosso do sul", "goias", "distrito federal"]
let sul = ["parana", "santa catarina", "rio grande do sul"]

console.log(nordeste[2],norte[2],sudeste[2],centroeste[2],sul[2])

// objeto
// Em um objeto, variáveis são propriedades e funções são métodos
function Carro (marca,modelo,combustivel,valor){
    this.marca = marca
    this.modelo = modelo
    this.combustivel = combustivel
    this.valor = valor

    this.ligar = function(){
        return "vrummm"
    }

    this.buzinar = function(modelo){
        return this.modelo + "passando"
    }

}

var Carro2 = new Carro("toyota","corolla","gasolina","50000" )

console.log(Carro2)

function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.nomeCompleto = function(){
        return (this.nome + ' ' + this.sobrenome)
    }
}

var pessoa2 = new Pessoa("rodrigo", "sabino")
Pessoa.nomeCompleto()