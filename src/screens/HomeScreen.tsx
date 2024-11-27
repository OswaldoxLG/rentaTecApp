import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'



interface Props extends StackScreenProps <any, any>{};

export const HomeScreen = ({navigation}:Props) => {
    return (
    <ScrollView style={styles.globalMargin}>
    <View>
        <Image source={require('../assets/logo_rentatec.png')} style={styles.imgLogo} />
        <Text style={styles.title}>BIENVENIDO</Text>
        <Text style={styles.subtitle}>Tu tienda de tecnología al alcance de tu mano.</Text>
        <Text style={styles.parrafo}>
            Descubre un mundo de innovación y tecnología con RENTATEC.
            Nuestra plataforma está diseñada para ofrecerte la mejor experiencia
            en la compra de productos tecnológicos y servicios especializados.
        </Text>
        <Image source={require('../assets/imghome.jpg')} style={styles.imgPrin} />
        
        <TouchableOpacity style={styles.home_boton}
            onPress={()=>navigation.navigate('Phones')}
        >
            <Text style={styles.txtBtnHome}>Elige algo que te guste</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    )
}
