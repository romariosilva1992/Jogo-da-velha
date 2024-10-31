import { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { verificaResultado } from '../../servicos/logica';
import Casa from '../Casa';
import styles from './styles';

export default function Game() {

  const [jogadorAtual, setJogadorAtual] = useState("X");
  const [posicaoJogo, setPosicaoJogo] = useState(new Array(9));
  const [venceuJogo, setVenceuJogo] = useState(false);
  const [empatouJogo, setEmpatouJogo] = useState(false);
  const [posicaoVitoria, setPosicaoVitoria] = useState(new Array(9));
  
    function defineCasaEscolhida(casa) {
      let novoArrayPosicao = posicaoJogo;
      novoArrayPosicao[casa] = jogadorAtual;
      setPosicaoJogo(novoArrayPosicao);
    }
    
    function defineJogadorAtual() {
        const proximoJogador = (jogadorAtual == 'X' ? 'O' : 'X');
        setJogadorAtual(proximoJogador);
    }

    function handleEscolheCasa(casa) {
        if(posicaoJogo[casa] !== undefined || venceuJogo)
        {
            return;
        }

        defineCasaEscolhida(casa);
        defineJogadorAtual();
        
        const resultado = verificaResultado(posicaoJogo);

        setVenceuJogo(resultado.venceu);
        setEmpatouJogo(resultado.empatou);
        setPosicaoVitoria(resultado.posicaoVitoria);

        return;
    }

    function handleReiniciarPartida() {
        setJogadorAtual("X");
        setPosicaoJogo(new Array(9));
        setVenceuJogo(false);
        setEmpatouJogo(false);
        setPosicaoVitoria(new Array(9));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Velha</Text>
            <Text style={styles.status}>Jogador da vez: {jogadorAtual}</Text>
            {
                (venceuJogo) ? 
            <View style={styles.areaReinicio}>
                <Text style={styles.status}>Vitória!</Text>
            </View>
            : ""
            }
            {
                (empatouJogo) ? 
            <View style={styles.areaReinicio}>
                <Text style={styles.status}>Empate!</Text>
            </View>
            : ""
            }
            {
                (venceuJogo || empatouJogo) ? 
                <Button title='Reiniciar Partida' onPress={handleReiniciarPartida} />
                :
                ""
            }
            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(0)}>
                        <Casa jogador={posicaoJogo[0]} temBordaDireita={true} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[0]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(1)}>
                        <Casa jogador={posicaoJogo[1]} temBordaDireita={true} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[1]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(2)}>
                        <Casa jogador={posicaoJogo[2]} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[2]}/>
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(3)}>
                        <Casa jogador={posicaoJogo[3]} temBordaDireita={true} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[3]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(4)}>
                        <Casa jogador={posicaoJogo[4]} temBordaDireita={true} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[4]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(5)}>
                        <Casa jogador={posicaoJogo[5]} temBordaInferior={true} pecaVitorisosa={posicaoVitoria[5]}/>
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(6)}>
                        <Casa jogador={posicaoJogo[6]} temBordaDireita={true} pecaVitorisosa={posicaoVitoria[6]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(7)}>
                        <Casa jogador={posicaoJogo[7]} temBordaDireita={true} pecaVitorisosa={posicaoVitoria[7]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(8)}>
                        <Casa jogador={posicaoJogo[8]} pecaVitorisosa={posicaoVitoria[8]}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
