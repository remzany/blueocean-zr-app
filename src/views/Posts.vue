<template>
  <div>
    <div class="card  blue-grey darken-2">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input v-model="title" id="title" type="text" class="validate" />
              <label for="title">title</label>
            </div>
            <div class="input-field col s6">
              <input v-model="body" id="body" type="text" class="validate" />
              <label for="body">Body</label>
            </div>
            </div>
        </form>
      </div>

<div class="card-action">
      <button :disabled="submit" class='btn waves-effect waves-light' type="submit" title="action" @click="addPost">Add</button>

      <button :disabled="!submit" class="btn waves-effect waves-light" type="submit" title="action" @click="save">Edit</button>
   </div>
 </div>

    <div class="row">
      <div
        class="col s6 m6"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post.id"
      >
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{post.title}}</span>
            <p class="creator">janez</p>
            <p>{{post.body}}</p>
          </div>
          <div class="card-action">
            <a href="#" @click="editPost(post.id)">Edit</a>
            <a href="#" @click="deletePost(post.id)" class="delete-btn">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/ApiService";
const postsService = new ApiService();



export default {
  data() {
    return {
      posts: [],
      title: "",
      body: "",
      id: "",
      submit: false
    };
  },
  methods: {
    addPost() {
      alert("Please be patianet, it may take some time to add your post!");
      postsService.addPost(this.title, this.body).then(res => {
        this.posts.unshift(res.data);
        console.log(res);
        this.title = "";
        this.body = "";
      });
    },
    deletePost(id) {
      console.log(id);
      postsService.deletePost(id).then(res => {
        this.posts.splice(id, 1);
        console.log(res);
      });
    },

    editPost(id) {

    this.submit = true;

      this.title = this.posts[id - 1].title;
      this.body = this.posts[id - 1].body;
      this.id = id;
    },

    save() {
        this.submit = false;

      postsService
        .editPost(this.id - 1, this.title, this.body)
        .then(res => {
          console.log(res);
          this.posts[this.id - 1].title = this.title;
          this.posts[this.id - 1].body = this.body;
        })
        .catch(err => console.error(err));
    }
  },

  //shorter version of created: function(){}
  created() {
    postsService
      .getPosts()
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => console.err(err));
  }
};
</script>

<style scoped>
.card-title {
  margin-bottom: 0px !important;
}
.creator {
  color: #999;
  margin-bottom: 20px !important;
}
.delete-btn {
  color: red !important;
}
</style>