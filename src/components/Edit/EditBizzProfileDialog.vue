<template>
  <v-dialog xs12 persistent v-model="dialog">
    <v-btn class="grey" fab accent slot="activator">
        <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container class=white>
        <v-layout row wrap>
          <v-flex xs12 >
            <v-card-title>Edit Profile</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>content</v-card-title>
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
                <v-btn flat class="blue--text darken-1" >Save</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: ['profile'],

    data() {
      return {
        editedName: this.profile.first_name,
        editedDescription: this.profile.description,
        dialog: false,
        }
    },

}
</script>

<style scoped>

</style>