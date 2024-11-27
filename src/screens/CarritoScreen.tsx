import { View, ScrollView } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Carrito } from '../components/Carrito'
import { ImageSourcePropType } from 'react-native';
import { Producto } from '../navigation/StackNavigator'; // Ajusta según tu estructura de proyecto

interface Props {
    carrito: Producto[]; // Recibe carrito desde el StackNavigator
    eliminarDelCarrito: (productoId: number) => void;
}

export const CarritoScreen = ({ carrito, eliminarDelCarrito }: Props) => {
    return (
    <ScrollView style={styles.globalMargin}>
        <View>
            <Carrito carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito} 
            />
        </View>
    </ScrollView>
    )
}
