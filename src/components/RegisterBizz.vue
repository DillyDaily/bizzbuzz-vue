<template>
  <div>
      <h1>Bizz Register</h1>

      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"/>
        <br>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"/>
        <br>
        <button 
        @click="register">
        Register
        </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
    data () {
        return {
            email = '',
            password = ''
        }
    },
    watch: {
        email (value) {
            console.log('email has changed', value)
        }
    },
    methods: {
        async register() {
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log('register btn was clicked')
        }
    },
    mounted () {
        console.log('Register Biz component mounted')
    }
}

</script>
