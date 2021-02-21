<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
        <h1 class="user-profile_username">@{{this.user.username}}</h1>
        <div class= "user-profile_admin-badge"> 
            Admin
        </div>
        <div id="user-profile_follower-count">
            <strong>followers: </strong> {{followers}}
        </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'userProfile',
  data () {
    return {
      followers: 0,
      user: {
        id:1,
        username: "_gayathribuddhika",
        firstName: "Gayathri",
        lastName: "Buddhika",
        email: "wg.gayathri@gmail.com",
        isAdmin: true
      }
    }
  },

  watch: {
    followUsers(newFollowerCount, oldFollowerCount) {
      if(oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`);
      }
    }
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },

  methods: {
    followUsers() {
      this.followers++;
    }
  },

  mounted() {
    this.followUsers();
  }
  
}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.user-profile_user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}
.user-profile_admin-badge {
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}

h1 {
    margin: 0;
}
</style>