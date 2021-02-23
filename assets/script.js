
const calcular = document.getElementById('calc');


function imc() {
    const altura = document.getElementById('inputAltura').value;
    const peso = document.getElementById('inputPeso').value;
    const resultado = document.getElementById('result');

    if(altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);

            let msg = '';
            let grau = '';

            if (valorImc < 18.5){
                msg = "Voce esta abaixo de seu peso.";
                grau = "abaixo de seu peso";
            }else if(valorImc >= 18.5 && valorImc <= 24.9){
                msg = "Parabens!!! Voce esta no seu peso ideal.";
                grau = "peso ideal";
            }else if (valorImc >= 25.0 && valorImc <= 29.9){
                msg = "Você está acima de seu peso (sobrepeso).";
                grau = "Sobrepeso";
            }else if (valorImc >= 30.0 && valorImc <= 34.9){
                msg = "Você está com Obesidade grau I.";
                grau = "Obesidade gradu I";
            }else {
                msg = "Você está com Obesidade grau II (severa).";
                grau = "Obesidade gradu II";
            }

            resultado.innerHTML = `
                <div class="resultado">
                    <h3>
                        <strong>RESULTADO</strong>: <span class='num'>${valorImc}</span>
                    </h3>

                    <p>
                        ${msg}
                    </p>
                    <p>
                        O seu peso ideal pode variar entre 49 kg e 66 kg por isso para emagrecer com 
                        saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana, ingerindo 2535 calorias por dia.
                    </p>
                    <h1><span class="badge bg-warning">${grau}</span></h1>
                </div>
            `
        
    }else {
        alert('Preencha todos os campos')
    }

}

calcular.addEventListener('click', imc);


