<template>
    <div class="row">
      <table class="highlight responsive-table">
        <thead>
          <tr>
              <th>username</th>
              <th>email</th>
              <th>name</th>
              <th>street address</th>
              <th>city</th>
              <th>ZIP code</th>
              <th>company</th>
          </tr>
        </thead>
        <!--Loops users with v-for we also have to v-bind
            TIP: instead of v-bind we can use type just :
          -->
        <tbody v-for="(user, index) in users"
         v-bind:item="user"
         v-bind:index="index"
         v-bind:key='user.id'
         >
          <tr>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.name}}</td>
            <td>{{user.address.street}}</td>
            <td>{{user.address.city}}</td>
            <td>{{user.address.zipcode}}</td>
            <td>{{user.company.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>        
</template>

<script>
import ApiService from '../services/ApiService';
const userService = new ApiService();
export default {
    data(){
        return{
            users: []
        }
    },

    //shorter version of created: function(){}
    created(){
        userService.getUsers().then(res => {
            this.users = res.data;
        }).catch(err => console.err(err));
    }
}
</script>