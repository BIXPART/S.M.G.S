const prompt = require('prompt-sync')();

let cn

const nom = "samuel"
const idad = 16
const cnh = true
if(cnh==true){
     cn = `${nom} possui CNH`
}else{
    cn = `${nom} não possui CNH`
}

console.log(`nome:${nom} idade:${idad} e ${cn}\n\n`)

console.log(typeof nom, typeof idad, typeof cnh)

const filme = "Humiranha"
const lancamento = 2017
const disponivel = true

console.log("\n\n"+filme, lancamento, disponivel)

const PrimeiroNome = "samuel"
const UltimoNome= "Maximiliano"

const nomeCompleto = `${PrimeiroNome}  ${UltimoNome}`

console.log(nomeCompleto)

let a = 10
let b = 5

console.log(`adição = ${a+b} divicao = ${a/b} multiplicação = ${a*b} subtrção = ${a-b}`)
