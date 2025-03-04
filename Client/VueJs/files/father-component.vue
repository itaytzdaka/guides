<template>
    <div class="props-example">
        <NameOfComponent msg="hello" />
        <NameOfComponent :tasks="tasks" />
    </div>
</template>

<script>
import NameOfComponent from './component.vue';


export default {
    name: 'Home',
    data() {
        return {
            msg: "hello",
            tasks: []
        }
    },
    created(){
        tasks: [{
            //json
        }]
    },
    components: {
        NameOfComponent
    },
      methods: {
        deleteTask(id){
            if (confirm("Are you sure?")) {
                this.tasks = this.tasks.filter((task)=> task.id !== id);
            }
        }
      },
    // props: {
    //   msg: String
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
