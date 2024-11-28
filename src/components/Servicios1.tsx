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
    Des?: string;
}

interface Props {
    agregarAlCarrito: (producto: Servicio) => void;
}

export const Servicios1 = ({agregarAlCarrito}:Props) => {
    const servicios: Servicio[] = [
        { id: 11, nombre: 'Diagnóstico y resolución de problemas', precio: 150.00, img: require('../assets/diagnostico.png'), Des:'Identificamos y solucionamos de forma efectiva cualquier inconveniente técnico en tus equipos.' },
        { id: 12, nombre: 'Instalación de Sistemas Operativos', precio: 300.00, img: require('../assets/installSW.png'), Des:'Configuramos tu equipo con el sistema operativo que mejor se adapte a tus necesidades.' },
        { id: 13, nombre: 'Configuración de red local', precio: 500.00, img: require('../assets/LAN.png'), Des:'Implementamos redes locales (LAN) personalizadas adaptadas a tus necesidades.' }
    ];

    const handleCarrito = (servicio: Servicio) => {
        const productoConCantidad = { ...servicio };
        agregarAlCarrito(productoConCantidad); // Agrega al carrito usando la función recibida por props
        Alert.alert('Carrito', `${servicio.nombre} agregado con éxito!`);
    };

    return (
    <View style={styles.productContenedorMain}>
        <View>
            <Text style={styles.parrafoServicio}>Servicios que puedes contratar:</Text>
        </View>
        {servicios.map((servicio) => (
            <View key={servicio.id} style={styles.productConSec}> 
                <Image source={servicio.img} style={styles.productImg} />
                <Text style={styles.productNom}>{servicio.nombre}</Text>  
                <Text style={styles.productPrice}>${servicio.precio}</Text>
                <Text style={styles.desServ1}>{servicio.Des}</Text>
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
