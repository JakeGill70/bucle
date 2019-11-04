<template>
    <div class="agenda-item" v-bind:class="[{'is-in-progress':agendaItem.inProgress}, {'is-complete':agendaItem.completed}]">
        <p>
        <input type="checkbox" v-on:change="markComplete">
        {{agendaItem.content}}
        <button style="text-align:right;" @click="$emit('add-motion', agendaItem.id)" class="add-motion">+</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "AgendaItem",
    props: ["agendaItem"],
    methods: {
        markComplete() {
            this.agendaItem.completed = !this.agendaItem.completed;
        }
    }
}
</script>

<style scoped>
    .agenda-item {
        background: #f3f3f3;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .is-in-progress{
        background: #a4ffa4;
    }
</style>