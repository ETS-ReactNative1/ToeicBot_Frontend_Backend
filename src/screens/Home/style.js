import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    info: {
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      resizeMode: 'cover',
      backgroundColor: 'blue',
    },
    avt: {
      width: 75, 
      height: 75, 
      borderRadius: 38, 
      margin: 20
    },
    name: {
      color: 'white', 
      fontWeight: 'bold', 
      fontSize: 18
    },
    button: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      backgroundColor: 'white',
      borderRadius: 5,
      alignItems: 'center',
      width: 100,
      height: 120,
      margin: 10
    }
  });

  export default styles;