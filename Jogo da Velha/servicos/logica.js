const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function retornaResultadoPartida(posicaoJogo) {
    let venceu = false;
    let empatou = false;
    
    let posicaoVitoria = new Array(9);
    
    for (let i = 0; i <= 7; i++) {
        const condicaoVitoria = condicoesVitoria[i];
        
        let posicao_a = posicaoJogo[condicaoVitoria[0]];
        let posicao_b = posicaoJogo[condicaoVitoria[1]];
        let posicao_c = posicaoJogo[condicaoVitoria[2]];
        

        if (posicao_a !== undefined && posicao_b !== undefined & posicao_c !== undefined) {
            if (posicao_a === posicao_b && posicao_b === posicao_c) {
                venceu = true;

                posicaoVitoria[condicaoVitoria[0]] = true;
                posicaoVitoria[condicaoVitoria[1]] = true;
                posicaoVitoria[condicaoVitoria[2]] = true;

                break;
            }
        }
    }

    if(!venceu) {
        const qtdJogadorX = posicaoJogo.filter(x => x === "X").length;
        const qtdJogadorO = posicaoJogo.filter(o => o === "O").length;

        const totalJogadas = qtdJogadorX + qtdJogadorO;

        if(totalJogadas == 9)
        {
            empatou = true;
        }
    }

    return {
        venceu: venceu,
        empatou: empatou,
        posicaoVitoria: posicaoVitoria   
    }
}

export function verificaResultado(posicaoJogo){
    const resultadoPartida = retornaResultadoPartida(posicaoJogo);

    const venceu = resultadoPartida.venceu
    const empatou = resultadoPartida.empatou
    const posicaoVitoria = resultadoPartida.posicaoVitoria

    return {
        venceu: venceu,
        empatou: empatou,
        posicaoVitoria: posicaoVitoria
    }
}

