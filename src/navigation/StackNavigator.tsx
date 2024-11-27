import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PhonesScreen } from '../screens/PhonesScreen';
import { LaptopsScreen } from '../screens/LaptopsScreen';
import { ServiciosScreen } from '../screens/ServiciosScreen';
import { CarritoScreen } from '../screens/CarritoScreen';
import { ImageSourcePropType } from 'react-native';

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad?: number;
    img: ImageSourcePropType;
}

const Stack = createStackNavigator();

function StackNavigator() {

const [carrito, setCarrito] = useState<Producto[]>([]);

// Función para agregar productos al carrito
const agregarAlCarrito = (producto: Producto) => {
    const cantidad = producto.cantidad ?? 1; // Usa 1 como valor predeterminado si cantidad es undefined
    setCarrito((prevCarrito) => {
        const existente = prevCarrito.find((item) => item.id === producto.id);
        if (existente) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            return prevCarrito.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: (item.cantidad ?? 0) + cantidad } // Asegúrate de que item.cantidad tenga un valor
                    : item
            );
        } else {
            // Si no está en el carrito, lo añadimos
            return [...prevCarrito, { ...producto, cantidad }]; // Asegúrate de establecer cantidad aquí también
        }
    });
};

const eliminarDelCarrito = (productoId: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
};

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                options={{ title: 'Home' }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="Phones"
                options={{ title: 'Smarthphones' }}
            >
                {(props) => (
                    <PhonesScreen {...props} agregarAlCarrito={agregarAlCarrito} />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Laptops"
                options={{ title: 'Laptops' }}
            >
                {(props) => (
                    <LaptopsScreen {...props} agregarAlCarrito={agregarAlCarrito} />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Servicios"
                options={{ title: 'Servicios' }}
            >
                {(props) => (
                    <ServiciosScreen {...props} agregarAlCarrito={agregarAlCarrito} />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Carrito"
                options={{ title: 'Carrito' }}
            >
                {(props) => (
                    <CarritoScreen {...props} carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackNavigator;
