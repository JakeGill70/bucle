<template>
  <div id="app">
    <Header />
    <AddAgendaItem v-on:add-agendaItem="addAgendaItem"/>
    <AgendaItems v-bind:agendaItems="agendaItems" v-on:add-motion="addMotion"/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import AgendaItems from './components/AgendaItems.vue';
import AddAgendaItem from './components/AddAgendaItem.vue';

export default {
  name: 'app',
  components: {
    Header,
    AgendaItems,
    AddAgendaItem
  },
  data() {
    return {
      agendaItems: [
        { id:1, content: 'invocation', completed: false, inProgress: false },
        { id:2, content: 'Roll Call', completed: false, inProgress: false },
        {
          id:3,
          content: 'Quarterly Reports',
          completed: false,
          inProgress: false
        }
      ]
    }
  },
  methods: {
    addMotion(id) {
      this.agendaItems.filter(item => item.id == id);
    },
    addAgendaItem(newAgendaItem) {
      this.agendaItems = [...this.agendaItems, newAgendaItem];
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  border:none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover{
  background: #777
}
</style>
