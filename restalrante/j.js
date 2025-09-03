const prompt = require('prompt-sync')();

// function encontroMarcado() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let resultado = true;

//             if (resultado) {
//                 resolve('Legal, ela quer sair');
//             } else {
//                 reject('Putz, ela não quer sair');
//             }
//         }, 3000);
//     });
// }

// console.log('Iniciando o teste');
// encontroMarcado()
//     .then((retorno) => {
//         console.log(retorno);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });
// console.log('Finalizando o teste');


// function seNaoLavarALoucaVaiApanhar() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let laveiALouca = true;

//             if (laveiALouca) {
//                 resolve('Não vou apanhar da minha mãe');
//             } else {
//                 reject('Vou apanhar da minha mãe');
//             }
//         }, 1000); // Added a delay of 1 second
//     });
// }

// console.log("Minha mãe foi trabalhar");
// seNaoLavarALoucaVaiApanhar()
//     .then(ret => {
//         console.log(ret);
//     })
//     .catch(ret => {
//         console.log(ret);
//     })
//     .finally(() => {
//         console.log("Eu recebi a ordem");
//     });
// console.log("Minha mãe chegou do trabalho");

const URL = `https://pokeapi.co/api/v2/pokemon/ditto`

fetch(URL)
    .then( ret => ret.json())
    .then( (ret) => {
        console.log(ret);
    })
    .catch( ret => {
        //console.log(ret)
    })