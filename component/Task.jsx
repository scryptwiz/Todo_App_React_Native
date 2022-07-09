import { Text, View } from 'react-native';
import styles  from '../assets/styles/global'

export default function Task(props) {
    return (
        <View style={styles.taskCont}>
            <View style={styles.itemsLeft}>
                <View style={styles.square}></View>
                <Text style={styles.task}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}