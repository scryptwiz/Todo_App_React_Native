import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2fbff',
      paddingTop: 30,
    },
    taskWrapper: {
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    header : {
      fontSize: 18,
    },
    tasks: {
      marginTop: 30,
      maxHeight: '83%'
    },
    taskCont: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    itemsLeft: {
      flexDirection: 'row',
      alignItems:'center',
      flexWrap: 'wrap',
    },
    square: {
      width:24,
      height:24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    task: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderRadius: 5,
      borderColor: '#55BCF6',
      borderWidth: 2,
    },
    taskMessage: {
      position: "absolute",
      bottom: 20,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      padding: 15,
      backgroundColor: '#fff',
      borderColor: '#c0c0c0',
      width: 250,
      borderRadius: 60,
    },
    addCont: {
      width: 60,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 60,
      justifyContent: "center",
      alignItems: 'center',
      borderColor: '#c0c0c0',
    },
    addChar: {
      color: '#666',
      fontSize: 18,
    }
  });

export default styles;