<template>
<div>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="black--text"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
    <v-spacer></v-spacer>
    <h1>
      {{ title }}
    </h1>
  </v-toolbar>
  </div>
</template>

<script>

export default {
    data(){
      return {
        title: "Bizz Buzz Media",
        
      }
    },
    methods: {
      
    },
    computed: {
      // nameErrors () {
      //   const errors = []
      //   if (!this.$v.name.$dirty) return errors
      //   !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      //   !this.$v.name.required && errors.push('Name is required.')
      //   return errors
      // },
      // emailErrors () {
      //   const errors = []
      //   if (!this.$v.email.$dirty) return errors
      //   !this.$v.email.email && errors.push('Must be valid e-mail')
      //   !this.$v.email.required && errors.push('E-mail is required')
      //   return errors
      // }
    }
}
</script>

<style scoped>
h1{
  font-family: 'Cabin Sketch', cursive;
  color: #222;
}

#bee1{
  height:3em;
}

</style>

