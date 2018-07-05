<script src="../../../../working/myworking/b0ifnz/build/dev-server.js"></script>
<template>
    <div id="app">
        <app-head :seller="seller"></app-head>

        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller/123">商家</router-link>

            </div>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import appHead from './components/header/header'

    export default {
        name: 'App',
        data() {
            return {
                seller: {}
            }
        },
        components: {
            appHead
        },
        created() {
            // GET /someUrl
            this.$http.get('http://localhost:3000/seller').then(response => {

                // get body data
                this.seller = response.body;
                console.dir(this.seller);
            }, response => {
                // error callback
                console.log(response);
            });
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        font-family: 'sans-serif', 'Arial', 'Mircsoft yahei';
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .tab {
            display: flex;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid rgba(7, 17, 27, .1);

            .tab-item {
                flex: 1;
                text-align: center;

                a {
                    text-decoration: none;
                    font-size: 14px;
                    color: #778593;

                    &.active {
                        color: rgb(240, 20, 20);
                    }
                }
            }
        }
    }
</style>
