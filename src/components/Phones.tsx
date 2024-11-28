import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert, } from 'react-native';
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType } from 'react-native';

interface Phone {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    img: ImageSourcePropType; 
}
interface Props {
    agregarAlCarrito: (producto: Phone) => void;
}

export const Phones = ({agregarAlCarrito}:Props) => {

    const phones: Phone[] = [
        { id: 1, nombre: 'Nokia', precio: 4999.99, cantidad: 0, img: require('../assets/phone1.png') },
        { id: 2, nombre: 'Samsung', precio: 8999.99, cantidad: 0, img: require('../assets/phone2.png') },
        { id: 3, nombre: 'POCO', precio: 5000.99, cantidad: 0, img: require('../assets/phone3.png')}, 
        { id: 4, nombre: 'iPhone', precio: 10000.00, cantidad: 0, img: require('../assets/phone4.png')}, 
        { id: 5, nombre: 'ZTE', precio: 3999.99, cantidad: 0, img: require('../assets/phoneAsus1.png') }, 
    ];

const [cantidadProducto, setcantidadProducto] = useState<{ [key: number]: number }>({});

//funcion que actualiza la cantidad de un producto
const handleCambioCantidad = (id: number, cantidad: string) => {
    const parsedCantidad = parseInt(cantidad, 10) || 0;
    setcantidadProducto((prev) => ({
        ...prev,
        [id]: parsedCantidad,
    }));
};
//productos en el carrito
const handleCarrito = (phone: Phone) => {
    const cantidad = cantidadProducto[phone.id] || 0;
    if (cantidad > 0) {
        const productoConCantidad = { ...phone, cantidad };
        agregarAlCarrito(productoConCantidad); // Agrega al carrito usando la función recibida por props
        Alert.alert('Carrito', `${phone.nombre} agregado con éxito!`);
    }
};

    return (
    <View style={styles.productContenedorMain}>
        {phones.map((phone) => (
            <View key={phone.id} style={styles.productConSec}> 
                <Image source={phone.img} style={styles.productImg} />
                <Text style={styles.productNom}>{phone.nombre}</Text>  
                <Text style={styles.productPrice}>${phone.precio}</Text>
                <TextInput
                    style={styles.productCantidad}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    value={cantidadProducto[phone.id]?.toString() || ''}
                    onChangeText={(text) => handleCambioCantidad(phone.id, text)}
                />
                <TouchableOpacity 
                    style={styles.botonComprar} 
                    onPress={() => handleCarrito(phone)}
                >
                <Text style={styles.txtBtnCompra}>AGREGAR AL CARRITO</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
    )
    }

function agregarAlCarrito(productoConCantidad: { cantidad: number; id: number; nombre: string; precio: number; img: ImageSourcePropType; }) {
    throw new Error('Function not implemented.');
}

