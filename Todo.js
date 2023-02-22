import React, {useState} from 'react'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = text => { //항목 추가하기
    setTodos([...todos, 
      {id: Math.random().toString(), textValue: text, checked: false}
    ])
  }
  const onRemove = id => e => { //항목 삭제하기
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onToggle = id => e => { //완료항목 체크/체크해제 
    setTodos(
      todos.map(todo => 
        todo.id == id ? {...todo, checked: !todo.checked} : todo,
      )
    )  
  }

  return (
      <SafeAreaView style={styles.container1}>
        <Text style={styles.title}>CHOI Todo-List</Text>
        <View style={styles.area}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#047451',
        flexDirection: 'column'
    },
    title: {
      color: 'white',
      fontSize: 45,
      textAlign: 'center',
      marginTop: 15
    },
    area: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10
    },
    strikeText: {
      color: '#bbb',
      textDecorationLine: 'line-through',
    }
})
export default App