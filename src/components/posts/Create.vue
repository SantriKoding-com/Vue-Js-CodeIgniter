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
                            TAMBAH POST
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PostStore">

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
                                <button type="submit" class="btn btn-md btn-success mr-2">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>

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
        methods: {
            PostStore(e) {

                if (this.post.title && this.post.content) {

                    axios.post('http://localhost:8080/api/post', this.post)
                        .then(() => {
                            this.$router.push({
                                name: 'posts'
                            });
                        }).catch(error => {
                            console.log(error.response);
                        });

                }

                this.errors = [];

                if (!this.post.title) {
                    this.errors.push('Masukkan Title Post.');
                }

                if (!this.post.content) {
                    this.errors.push('Masukkan Konten Post.');
                }

                e.preventDefault();

            }
        }
    }
</script>