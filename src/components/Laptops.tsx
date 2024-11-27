import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert, } from 'react-native';
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType } from 'react-native';

interface Laptop {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    img: ImageSourcePropType; 
}

interface Props {
    agregarAlCarrito: (producto: Laptop) => void;
}

export const Laptops = ({agregarAlCarrito}:Props) => {

    const laptops: Laptop[] = [
        { id: 1, nombre: 'Producto 1', precio: 19.99, cantidad: 0, img: require('../assets/lapAcer1.png') },
        { id: 2, nombre: 'Producto 2', precio: 24.99, cantidad: 0, img: require('../assets/lapAcer2.png') },
        { id: 3, nombre: 'Producto 3', precio: 24.99, cantidad: 0, img: require('../assets/lapAsus1.png')}, 
        { id: 4, nombre: 'Producto 4', precio: 24.99, cantidad: 0, img: require('../assets/lapAsus2.png')}, 
        { id: 5, nombre: 'Producto 5', precio: 24.99, cantidad: 0, img: require('../assets/lapMac1.png') }, 
    ];

    const [cantidadProducto, setcantidadProducto] = useState<{ [key: number]: number }>({});

    const handleCambioCantidad = (id: number, cantidad: string) => {
        const parsedCantidad = parseInt(cantidad, 10) || 0;
        setcantidadProducto((prev) => ({
            ...prev,
            [id]: parsedCantidad,
        }));
    };
    
    const handleCarrito = (laptop: Laptop) => {
        const cantidad = cantidadProducto[laptop.id] || 0;
        if (cantidad > 0) {
            const productoConCantidad = { ...laptop, cantidad };
            agregarAlCarrito(productoConCantidad); // Agrega al carrito usando la función recibida por props
            Alert.alert('Carrito', `${laptop.nombre} agregado con éxito!`);
        }
    };

    return (
    <View style={styles.productContenedorMain}>
        {laptops.map((laptop) => (
            <View key={laptop.id} style={styles.productConSec}> 
                <Image source={laptop.img} style={styles.productImg} />
                <Text style={styles.productNom}>{laptop.nombre}</Text>  
                <Text style={styles.productPrice}>${laptop.precio}</Text>
                <TextInput
                    style={styles.productCantidad}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    value={cantidadProducto[laptop.id]?.toString() || ''}
                    onChangeText={(text) => handleCambioCantidad(laptop.id, text)}
                />
                <TouchableOpacity 
                    style={styles.botonComprar} 
                    onPress={() => handleCarrito(laptop)}
                >
                <Text style={styles.txtBtnCompra}>AGREGAR AL CARRITO</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
    )
    }
