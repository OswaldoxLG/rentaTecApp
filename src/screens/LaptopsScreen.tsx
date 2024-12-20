import { StackScreenProps } from '@react-navigation/stack'
import { Text, View,ScrollView } from 'react-native'
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Laptops } from '../components/Laptops'
import { ImageSourcePropType } from 'react-native';

//interface Props extends StackScreenProps <any, any>{};
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    img: ImageSourcePropType;
}

interface Props {
    agregarAlCarrito: (producto: Producto) => void;
    navigation: any; // Ajusta según el tipo de navegación
}

export const LaptopsScreen = ({navigation, agregarAlCarrito}:Props) => {
    return (
    <ScrollView style={styles.globalMargin}>
        <View>
            <Laptops agregarAlCarrito={agregarAlCarrito}/>
        </View>
        <TouchableOpacity style={styles.home_boton}
            onPress={()=>navigation.navigate('Servicios1')}
        >
            <Text style={styles.txtBtnHome}>Sigue buscando...</Text>
        </TouchableOpacity>
    </ScrollView>
    )
}
