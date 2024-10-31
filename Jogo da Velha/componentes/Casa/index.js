import { Text, View } from 'react-native';
import styles from './styles';

export default function Casa(
    {
        jogador = null, 
        temBordaDireita = false, 
        temBordaInferior = false,
        pecaVitorisosa = false,
    }) {
    
    const larguraBordaDireita = (temBordaDireita) ? 3 : 0;
    const larguraBordaInferior = (temBordaInferior) ? 3 : 0;

    const corTexto = (pecaVitorisosa) ? 'red' : 'black';
    
    return(    
        <View style={[styles.coluna, {
            borderRightWidth: larguraBordaDireita,
            borderBottomWidth: larguraBordaInferior
        }]}>
            <Text style={[styles.marcadorJogador, {
                color: corTexto,
            }]}>{jogador}</Text>
        </View>
    )
}

