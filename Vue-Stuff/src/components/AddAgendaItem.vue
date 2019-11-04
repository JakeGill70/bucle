<template>
    <div>
        <form @submit="addAgendaItem">
            <input type="text" v-model="content" name="txt-content" placeholder="Add content...">
            <input type="submit" value="submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddAgendaItem",
    data() {
        return {
            content: ''
        }
    },
    methods: {
        addAgendaItem(e) {
            e.preventDefault(); // Stop Vue from attempting to send the data directly to the file ala POST
            const newAgendaItem = {
                id: uuid.v4(),
                content: this.content,
                completed: false,
                inProgress: false
            }
            // Send up to parent
            this.$emit('add-agendaItem', newAgendaItem);

            this.content = ''; // Clear the input field
        }
    }
}
</script>

<style scoped>
    form{
        display: flex;
    }

    input[type="text"] {
        flex:10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>