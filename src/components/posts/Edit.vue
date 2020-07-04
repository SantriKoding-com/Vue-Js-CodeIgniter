<template>
    <div class="posts">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div v-if="errors.length">
                        <div v-for="error in errors" :key="error.index" class="alert alert-danger mt-1" role="alert">
                            {{ error }}
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            EDIT POSTS
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PostUpdate">

                                <div class="form-group">
                                    <label>TITLE</label>
                                    <input type="text" class="form-control" v-model="post.title"
                                        placeholder="Masukkan Title">
                                </div>
                                <div class="form-group">
                                    <label>KONTEN</label>
                                    <textarea class="form-control" v-model="post.content" rows="5"
                                        placeholder="Masukkan Konten"></textarea>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success mr-2">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger">RESET</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                post: {},
                errors: []
            }
        },
        created() {
            axios.get(`http://localhost:8080/api/post/${this.$route.params.id}`)
                .then((response) => {
                    this.post = response.data.data;
                });
        },
        methods: {
            PostUpdate(e) {

                if (this.post.title && this.post.content) {
                    axios.put(`http://localhost:8080/api/post/${this.$route.params.id}`, this.post)
                        .then((response) => {
                            this.$router.push({
                                name: 'posts'
                            });
                            console.log(response);
                        }).catch(error => {
                            console.log(error.response.data.data);
                        });
                }

                this.errors = [];

                if (!this.post.title) {
                    this.errors.push('Masukkan Title Post.');
                }

                if (!this.post.content) {
                    this.errors.push('Masukkan Konten Post.');
                }

                e.preventDefault()
            }
        }
    }
</script>