import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, ScrollView} from 'react-native'
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Phones } from '../components/Phones'
import { ImageSourcePropType } from 'react-native';

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

export const PhonesScreen = ({navigation, agregarAlCarrito}:Props) => {
    return (
    <ScrollView style={styles.globalMargin}>
        <View>
            <Phones agregarAlCarrito={agregarAlCarrito}/>
        </View>
        <View>
            <TouchableOpacity style={styles.home_boton}
            onPress={()=>navigation.navigate('Laptops')}
            >
            <Text style={styles.txtBtnHome}>Sigue buscando...</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}
