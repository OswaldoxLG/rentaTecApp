import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View, ScrollView } from 'react-native'
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Servicios1 } from '../components/Servicios1'
import { ImageSourcePropType } from 'react-native';

//interface Props extends StackScreenProps <any, any>{};
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad?: number;
    img: ImageSourcePropType;
}

interface Props {
    agregarAlCarrito: (producto: Producto) => void;
    navigation: any; // Ajusta según el tipo de navegación
}

export const ServiciosScreen1 = ({navigation, agregarAlCarrito}:Props) => {
    return (
    <ScrollView style={styles.globalMargin}>
    <View>
        <Servicios1 agregarAlCarrito={agregarAlCarrito}/>
    </View>
    <View>
        <TouchableOpacity style={styles.home_boton}
            onPress={()=>navigation.navigate('Servicios2')}
        >
            <Text style={styles.txtBtnHome}>Sigue buscando...</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>

    )
}
