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
    Des: string;
    Des2: string;
    Des3?: string;
}

interface Props {
    agregarAlCarrito: (producto: Servicio) => void;
}

export const Servicios2 = ({agregarAlCarrito}:Props) => {
    const servicios: Servicio[] = [
        { id: 14, nombre: 'Mantenimiento preventivo', precio: 500.00, img: require('../assets/mantenimientoPre.png'), Des:'-Limpieza Interna', Des2:'-Actualización de Software'},
        { id: 15, nombre: 'Mantenimiento Correctivo', precio: 1000.00, img: require('../assets/MantenimientoCorrectivo.png'), Des:'-Reparación de Hardware', Des2:'-Recuperación de datos', Des3:'-Reinstalación del sistema operativo'},
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
                <View style={styles.cajaDes}>
                <Text>Incluye: </Text>
                <Text>{servicio.Des}</Text>
                <Text>{servicio.Des2}</Text>
                <Text>{servicio.Des3}</Text>
                </View>
                <View>
                <TouchableOpacity 
                    style={styles.botonComprar} 
                    onPress={() => handleCarrito(servicio)}
                >
                <Text style={styles.txtBtnCompra}>AGREGAR AL CARRITO</Text>
                </TouchableOpacity>
                </View>
            </View>
        ))}
    </View>
    )
}
