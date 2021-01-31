<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input type="text" v-model="newTodo" class="new-todo" @keyup.enter="addTodo" placeholder="想干的事">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" :class="{completed: todo.completed}" v-for="(todo,index) in todos" :key="todo.id">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label>{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(index)"></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{remaining}}</strong> left
      </span>
      <button class="clear-completed" @click="removeDone">
        Clear completed
      </button>
    </div>
  </section>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      newTodo: '',
      todos: []
    })

    let remaining = computed(() => state.todos.filter(item => !item.completed).length) 

    function addTodo() {
      let value = state.newTodo && state.newTodo.trim()
      console.log(state.newTodo);
      state.todos.push({
        id: state.todos.length,
        title: value,
        completed: false
      })
      state.newTodo = ''
    }

    function removeDone() {
      // for(let i = 0; i < state.todos.length; i++) {
      //   if(state.todos[i].completed) {
      //     state.todos.splice(state.todos[i], 1)
      //   }
      // }

      state.todos = state.todos.filter(item => !item.completed)
    }

    function removeTodo(index) {
      state.todos.splice(index, 1)
    }

    // toRefs API 让html中的newTodo 能直接访问到state中的newTodo属性
    return { addTodo, ...toRefs(state), removeTodo, remaining, removeDone }
  },
}
</script>

<style>
.header.fixed{
  background: #fff;
  position: fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  z-index:100;
}
</style>