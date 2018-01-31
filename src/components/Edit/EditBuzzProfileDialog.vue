<template>
  <v-dialog persistent v-model="dialog" >
    <v-btn class="grey" fab accent slot="activator">
        <v-icon color="white">edit</v-icon>
    </v-btn>
    <v-card id="smaller">
      <v-container class="editCard">
        <v-layout row wrap >
          <v-flex xs12>
            <v-card-title>Edit Profile</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
                <v-text-field
                name="first_name"
                label="first_name"
                id="first_name"
                v-model="editedName"
                ></v-text-field>
                <v-text-field
                name="last_name"
                label="last_name"
                id="last_name"
                v-model="editedLastName"
                ></v-text-field>
                <v-text-field
                name="email"
                label="email"
                id="email"
                v-model="editedEmail"
                ></v-text-field>
                <v-text-field
                name="password"
                label="password"
                id="password"
                v-model="editedPassword"
                ></v-text-field>
                <v-text-field
                name="topics"
                label="topics"
                id="topics"
                v-model="editedTopics"
                ></v-text-field>
                <v-text-field
                name="city"
                label="city"
                id="city"
                v-model="editedCity"
                ></v-text-field>
                <v-text-field
                name="state"
                label="state"
                id="state"
                v-model="editedState"
                ></v-text-field>
                <!-- <v-text-field
                name="image"
                label="image"
                id="image"
                v-model="editedImage"
                ></v-text-field> -->
                <v-text-field
                name="personal_brand"
                label="personal_brand"
                id="personal_brand"
                v-model="editedPersonalBrand"
                ></v-text-field>
                <v-text-field
                name="description"
                label="description"
                id="description"
                multi-line
                v-model="editedDescription"
                ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-actions>
                <v-btn flat class="blue--text darken-1" @click="dialog = !dialog">Close</v-btn>
                <v-btn flat class="blue--text darken-1"
                @click="saveData"> Save</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    props: ['profile'],

    data() {
      return {
        editedName: this.profile.first_name,
        editedDescription: this.profile.description,
        editedLastName: this.profile.last_name,
        editedEmail:this.profile.email,
        editedPassword:this.profile.password,
        editedTopics:this.profile.topics,
        editedCity:this.profile.city,
        editedState:this.profile.state,
        // editedImage:this.profile.image,
        editedPersonalBrand: this.profile.personal_brand,
        dialog: false,
        }
    },
    methods: {
        saveData () {
            let storedToken = localStorage.getItem('token');
            let parsedToken = JSON.parse(storedToken);
            console.log('please return something ', parsedToken)
            this.axios.patch(`/my/buzz/profile/${parsedToken.user_id}?token=${parsedToken.token}`, {editedName: this.editedName, editedEmail: this.editedEmail, editedTopics: this.editedTopics, editedDescription: this.editedDescription, editedCity: this.editedCity, editedState: this.editedState, editedPersonalBrand: this.editedPersonalBrand})
            .then(response => {
                console.log('edit buzz profile: ', response);
                this.$router.push(`/my/buzz/profile/${parsedToken.user_id}?token=${parsedToken.token}`)
                this.dialog = false;
            })
        }
    },
}
</script>

<style scoped>
.editCard {
  background-color: white;
  padding-top: 4%;
}
.editDialog {
  padding: 10%;
  margin: 20%;
}
#smaller{
  margin: 10% 30%;
}
</style>