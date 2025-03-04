<template>
  <!-- ternary -->
  <!-- <div :class="[nightMod? 'night-mod' : '', 'example']"> -->
  <div :class="nightMod ? 'example night-mod' : 'example'">

    <!-- form submit-->
    <!-- .prevent prevent refresh -->
    <form @submit.prevent="clickFormButton">

      <!-- property bind -->
      <span v-bind:style="{ background: color }">{{ msg }}</span>

      <!-- property bind shorthand -->
      <span :style="{ background: color }">{{ msg }}</span>
      <span>year now: {{ date.getFullYear() }}</span>

      <!-- input bind -->
      <label for="firstName">first Name</label>
      <!-- .trim prevent spaces -->
      <!-- .lazy v-bind after out focus from input -->
      <input type="text" name="firstName" id="firstName" placeholder="firstName" v-model.trim.lazy="firstName">
      <label for="firstName">last Name</label>
      <input type="text" name="lastName" id="lastName" placeholder="lastName" v-model="lastName">
      <!-- .number prevent submit a string -->
      <label for="age">last Name</label>
      <input type="number" name="age" id="age" placeholder="age" v-model.number="age">

      <!-- computed -->
      <br/>
      <span>{{fullName}}</span> 

      <!-- for -->
      <div :key="task.id" v-for="task in tasks">
        <h3>{{ task.text }}</h3>

        <!-- <i v-bind:click="onDelete(task.id)">delete icon</i> -->

        <!-- Event Handling bind shorthand -->
        <!-- <i @click="onDelete(task.id)">delete icon</i> -->
        <i @click="$emit('delete-task', task.id)">delete icon</i>

      </div>

      <!-- if and else-->
      <div v-if="toShow">
        <span>show?</span>
      </div>
      <div v-else-if="toShow">
        <span>else show?</span>
      </div>
      <div v-else="toShow">
        <span>else show?</span>
      </div>

      <!-- if div container not needed -->
      <template v-if="toShow">
        <span>show?</span>
      </template>

      <!-- show can be toggled, and v-if can't-->
      <div v-show="toShow">
        <span>show?</span>
      </div>

      <!-- submit by a keyboard event -->
      <input @keyup.enter="clickFormButton" type="text" name="submit" id="submit">

      <button>send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NameOfComponent',
  data() {
    return {
      nightMod: false,
      color: blue,
      firstName: '',
      lastName: '',
      age: null,
      date: new Date(),
      toShow: false,
      volume: 0
    }
  },
  methods: {
    async clickFormButton(e) {
      //e.preventDefault(); //not needed because <form @submit.prevent
      try {
        //await

      } catch (error) {
        console.log("error: ", { error })

      }
    },
    // getFullName(){
    //   return this.firstName + " " + this.lastName; // rerendered also if not needed.
    // }
    // onDelete(id){
    //   this.$emit('delete-task', id);
    // }
  },
  computed: {
    fullName(){
      return this.firstName + " " + this.lastName; // rerendered just if needed, not like method.
    }
  },
  watch: {
    volume(newValue, oldValue){
      if(newValue> oldValue && newValue === 16){
        alert("Listening to a high volume for a long time may damage your hearing");
      }
    }
  },
  // props: ['msg'],
  // props: {
  //   msg: String
  // },
  props: {
    msg: {
      type: string,
      default: 'hello by default'
    },
    tasks: {
      type: Array,
      default: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {
  min-height: 50px;
  color: rgb(224, 224, 224);
  background: #000000;
}
</style>
