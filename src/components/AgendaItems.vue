<template>
    <div >
        <div v-bind:key="item.id" v-for="item in agendaItems">
            <!--<h3>{{item.id}}){{item.content}}</h3> -->
            <AgendaItem v-bind:agendaItem="item" v-on:add-motion="$emit('add-motion', item.id)"/>
        </div>
    </div>
</template>

<script>
import AgendaItem from './AgendaItem.vue';

export default {
    name: "agendaItems",
    components: {AgendaItem},
    props: ["agendaItems"]
}
</script>

<style scoped>

</style>