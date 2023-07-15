import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fecda5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      height:100,
      width:300,
      marginBottom:5

    },

    titulo: {
      fontSize:26,
      fontWeight:'bold',
      marginBottom:10

    },
    texto: {
      marginBottom:20,
      textAlign:'center',
      paddingHorizontal:20
      

    },
    titulocard: {
        fontWeight:'bold',
        marginBottom:8,
        
  
      },
    card:{
      backgroundColor: '#fff',
      marginBottom:5,
      height:175,
      paddingTop:10,
      paddingBottom:10,
      padding:10,
      borderRadius:5,
      borderWidth:1,
      borderColor:'979797',
      
      


    },
    botao:{
      marginBottom:10,
    }

    

  });

  export default styles;