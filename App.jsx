import { useState } from 'react';
import { Text, FlatList, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles  from './assets/styles/global'
import Task from './component/Task';

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState()
  const handleAddTask = () => {
    Keyboard.dismiss()
    setAllTasks([...allTasks, task])
    setTask(null)
  }
  const completeTask = (index) => {
    let itemsCopy = [...allTasks];
    itemsCopy.splice(index, 1);
    setAllTasks(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* Task */}
      <View style={styles.taskWrapper}>
        {/* Header */}
        <Text style={styles.header}>Today's Task</Text>
        {/* Tasks */}
        <ScrollView style={styles.tasks}>
            {
              allTasks.map((item, index)=>{
                return (
                  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                )
              })
            }
        </ScrollView>
      </View>
      {/* Add Task Section */}
      <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'padding' : 'height'} style={styles.taskMessage}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addCont}>
            <Text style={styles.addChar}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}