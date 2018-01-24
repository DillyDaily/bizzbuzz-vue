<template>
<div>
  <v-toolbar dark color="primary">
    <v-toolbar-title class="black--text"><img id="bee1" src="../assets/bee1.png"></v-toolbar-title>
    <v-spacer></v-spacer>
    <h1>
      {{ title }}
    </h1>
  </v-toolbar>

  <v-container>
    <v-layout >
      <v-flex xs12 sm6 offset-sm3>
        <v-layout row wrap>
        <v-flex xs12>
          <v-card color="yellow darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="welcome">Welcome to BizzBuzz Media</div>
              <div class="welcome">Congrats on your Bizz! Now let's find you some Buzz...</div>
            </v-card-title>
          </v-card>
        </v-flex>
        </v-layout>
      <form class="shadow">
        <v-text-field
          label="Name"
          v-model="name"
   
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          
          required
        ></v-text-field>
        <!-- <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :error-messages="checkboxErrors"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
          required
        ></v-checkbox> -->

        <v-btn @click="submit">Submit</v-btn>
      </form>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>

export default {
    data(){
      return {
        title: "Bizz Buzz Media",
        name: '',
        email: '',
      }
    },
    methods: {
      submit () {
        console.log('submit btn clicked')
      }
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
.shadow{
  padding: 20px;
  -webkit-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  -moz-box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
  box-shadow: 3px 4px 19px -4px rgba(84,83,84,1);
}
.welcome {
  font-family: 'Shadows Into Light Two', cursive;
  font-size: 2vw;
}

</style>

