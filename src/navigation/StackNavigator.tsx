import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PhonesScreen } from '../screens/PhonesScreen';
import { LaptopsScreen } from '../screens/LaptopsScreen';
import { ServiciosScreen1 } from '../screens/ServiciosScreen1';
import { ServiciosScreen2 } from '../screens/ServiciosScreen2';
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

const [carrito, setCarrito] = useState<Producto[]>([]); //EStado general que almacena los producto añadidos al carrito

const agregarAlCarrito = (producto: Producto) => {
    const cantidad = producto.cantidad ?? 1; //si cantidad no existe, ahora vale 1
    setCarrito((prevCarrito) => {
        const existente = prevCarrito.find((item) => item.id === producto.id);
        if (existente) {
            return prevCarrito.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: (item.cantidad ?? 0) + cantidad } 
                    : item
            );
        } else {
            return [...prevCarrito, { ...producto, cantidad }];
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
                    <PhonesScreen {...props} agregarAlCarrito={agregarAlCarrito} /> //la función se pasa como props
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
                name="Servicios1"
                options={{ title: 'Soporte Técnico' }}
            >
                {(props) => (
                    <ServiciosScreen1 {...props} agregarAlCarrito={agregarAlCarrito} />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="Servicios2"
                options={{ title: 'Mantenimiento de Equipos' }}
            >
                {(props) => (
                    <ServiciosScreen2 {...props} agregarAlCarrito={agregarAlCarrito} />
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
