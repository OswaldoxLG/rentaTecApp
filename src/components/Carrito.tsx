import React, { useState } from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType } from 'react-native';
import { Producto } from '../navigation/StackNavigator';


interface Props {
    carrito: Producto[]; // Recibe el carrito como prop
    eliminarDelCarrito: (productoId: number) => void;
}

export const Carrito = ({carrito, eliminarDelCarrito}:Props) => {

    const subtotal = carrito.reduce(
        (acc, item) => acc + (item.precio * (item.cantidad ?? 1)), // Aseguramos que la cantidad esté definida
        0
    );

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.subtitle}>CARRITO DE COMPRAS</Text>
            {carrito.length === 0 ? (
                <Text style={styles.messageCarrito}>No hay productos en el carrito.</Text>
            ) : (
                carrito.map((producto) => (
                    <View key={producto.id} style={styles.cuadroProducts}>
                        <Image source={producto.img} style={styles.productImgCarrito} />
                        <View>
                            <Text>Producto: {producto.nombre}</Text>
                            <Text>Cantidad: {producto.cantidad}</Text>
                            <Text>Precio: ${producto.precio}</Text>
                        </View>
                        <View>
                            <TouchableOpacity 
                            style={styles.btnEliminar}
                            onPress={() => eliminarDelCarrito(producto.id)} 
                            >
                                <Text >Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            )}
            <View style={styles.cuadroTotal}>
            <Text style={styles.sub_total}>Subtotal: ${subtotal.toFixed(2)}</Text>
            <Text style={styles.sub_total}>Total: ${subtotal.toFixed(2)}</Text>
            </View>
        </View>
    );
};
