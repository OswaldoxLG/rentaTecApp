import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { styles } from '../../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType } from 'react-native';

interface Servicio {
    id: number;
    nombre: string;
    precio: number;
    cantidad?: number;
    img: ImageSourcePropType; 
}

interface Props {
    agregarAlCarrito: (producto: Servicio) => void;
}

export const Servicios = ({agregarAlCarrito}:Props) => {
    const servicios: Servicio[] = [
        { id: 1, nombre: 'Soporte Técnico', precio: 600.00, img: require('../assets/sopTecnico.png') },
        { id: 2, nombre: 'Instalacion de SW', precio: 400.00, img: require('../assets/installSW.png') },
        { id: 3, nombre: 'Mantenimiento', precio: 500.00, img: require('../assets/mantenimiento.png')}, 
    ];

    const handleCarrito = (servicio: Servicio) => {
        const productoConCantidad = { ...servicio };
        agregarAlCarrito(productoConCantidad); // Agrega al carrito usando la función recibida por props
        Alert.alert('Carrito', `${servicio.nombre} agregado con éxito!`);
    };

    return (
    <View style={styles.productContenedorMain}>
        {servicios.map((servicio) => (
            <View key={servicio.id} style={styles.productConSec}> 
                <Image source={servicio.img} style={styles.productImg} />
                <Text style={styles.productNom}>{servicio.nombre}</Text>  
                <Text style={styles.productPrice}>${servicio.precio}</Text>
                <TouchableOpacity 
                    style={styles.botonComprar} 
                    onPress={() => handleCarrito(servicio)}
                >
                <Text style={styles.txtBtnCompra}>AGREGAR AL CARRITO</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
    )
}
