import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
        backgroundColor: '#fff',
    },
    title:{
        fontSize:30,  
        textAlign:'center',
        fontWeight:'bold',
        color: 'black',
    },
    subtitle:{
        fontSize:20,
        margin: 20,
        textAlign:'center',
        fontWeight:'bold',
        color:'#F5494F'
    },
    parrafo:{
        fontSize:15,
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
        lineHeight: 20
    },
    imgLogo:{
        width:'100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        resizeMode: 'contain',
    },
    imgPrin:{
        width: '100%',
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        resizeMode: 'contain',
    },
    home_boton:{
        backgroundColor: '#3C51CA',
        paddingVertical: 10,
        marginHorizontal: 80,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 50,
    },
    txtBtnHome: {
        color: "#fff",
    },
    productContenedorMain: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    productConSec: {
        width: '100%',
        padding: 20,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImg: {
        width: 130,
        height: 110,
        alignSelf: 'center',
        marginBottom: 10,
    },
    productNom: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    productCantidad: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        width: 100,
    },
    botonComprar: {
        borderRadius: 15,
        alignSelf: 'center',
        width: 200,
        backgroundColor: '#000000',
        padding: 10,
    },
    txtBtnCompra:{
        color: "#fff",
        textAlign: 'center',
    },
    sub_total:{
        marginHorizontal:40,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    btnPagar:{
        borderRadius: 15,
        alignSelf: 'center',
        width: 120,
        backgroundColor: '#000000',
        padding: 15,
        marginBottom: 20,
    },
    cuadroProducts:{
        backgroundColor: '#ffffff',
        borderRadius: 10, 
        padding: 15, 
        marginVertical: 10, 
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.5, 
        elevation: 5, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    detailsCompra:{
        flex: 1,
        marginLeft: 10,
    },
    productImgCarrito:{
        width: 70, 
        height: 70, 
        marginRight: 0,
    },
    btnEliminar:{
        backgroundColor: 'red',
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'center',
        width: 20,
        textAlign: 'center',
        color: '#fff',
    },
    cuadroTotal:{
        marginTop:30
    },
    messageCarrito:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    parrafoServicio:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    cajaDes:{
        marginBottom: 20,
    },
    txtDetailsCompra:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    desServ1:{
        fontSize: 15,
        marginBottom: 20,
        marginTop: 10,      
        textAlign: 'justify',
        lineHeight: 20
    },
    txtCajaCantidad:{
        fontSize:15,
    }
});

