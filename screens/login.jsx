import { Image, Text, TextInput, TouchableOpacity, View, ViewBase } from 'react-native';
import { styles } from '../style';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../assets/tickets.jpg')} />
            <Text>Viva essa experiência!</Text>
            <Text style={styles.title}>TicketsForExperience</Text>
            <TextInput style={styles.input} placeholder='e-mail' />
            <TextInput style={styles.input} placeholder='senha' secureTextEntry />
            <TouchableOpacity onPress={() => navigation.navigate('Comanda') }>
                <Text style={styles.button}>entrar</Text>
            </TouchableOpacity>
            
        </View>
    );
}
