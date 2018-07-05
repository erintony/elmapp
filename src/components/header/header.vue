<template>
    <div class="app-header">
      <div class="content-wrapper">
          <div class="avatar">
              <img width="64px" height="64px" :src="seller.avatar" />
          </div>

          <div class="content">
              <div class="title">
                  <img class="brand" src="./brand@3x.png" />
                  <span class="name">{{seller.name}}</span>
              </div>

              <div class="description">
                  {{seller.description}}/{{seller.deliveryTime}}分钟送达
              </div>

              <div v-if="seller.supports" class="support">
                  <img class="icon" :class="classMap[seller.supports[0].type]"></img>
                  <span class="text">{{seller.supports[0].description}}</span>
              </div>
          </div>

          <div v-if="seller.supports" class="support-count" @click="showDetail">
              <span class="count">{{seller.supports.length}}</span>个
              <i class="fas fa-chevron-right"></i>

          </div>
      </div>

        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="fas fa-chevron-right"></i>
        </div>

        <div class="background">
            <img :src="seller.avatar" />
        </div>

        <transition name="fade">
            <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">

                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="4.2" ></star>
                    </div>

                    <section-title text="优惠信息"></section-title>

                    <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="item in seller.supports">
                            <span class="icon" :class="classMap[item.type]"></span>
                            <span class="text">{{item.description}}</span>
                        </li>
                    </ul>


                    <section-title text="商家公告"></section-title>
                    <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</p>
                    </div>

                </div>
            </div>

            <div class="detail-close" @click="detailClose">
                <i class="fas fa-times"></i>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
    import star from "../star/star";
    import  sectionTitle from '../section-title/section-title';

    export default {
        name: "header",
        components: {
            star,
            sectionTitle
        },
        props: {
            seller: {
                type: Object
            }
        },

        data () {
          return {
              detailShow: false
          }
        },

        created () {
           this.classMap = {
               '0': "decrease",
               '1': 'discount',
               '2': 'special',
               '3': 'invoice',
               '4': 'guarantee',
           }
        },
        methods : {
            showDetail() {
                this.detailShow = true;
            },
            detailClose() {
                this.detailShow = false;
            }
        }
    }
</script>

<style scoped lang="scss">

    @import url('../../common/sass/base.scss');

.app-header {
    position: relative;
    background-color: rgba(7, 17, 27 ,.5);
    color: #fff;
    overflow: hidden;

    .content-wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;

        .avatar {
            display: inline-block;
            vertical-align: top;
            img {
                -webkit-border-radius: 2px;
                -moz-border-radius: 2px;
                border-radius: 2px;
            }
        }

        .content {
            margin-left: 14px;
            display: inline-block;

            .title {
                margin: 2px 0 8px 0;

                .brand {
                    width: 30px;
                    height: 18px;
                    object-fit: cover;
                    vertical-align: top;
                }

                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }


            }

            .description {
                margin-bottom: 10px;
                line-height: 12px;
                font-size: 12px;
                text-align: left;
            }

            .support {
                text-align: left;
                font-size: 12px;

                .icon {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    -webkit-background-size: 12px 12px;
                    background-size: 12px 12px;
                    background-repeat:  no-repeat;
                    vertical-align: middle;

                    &.decrease {
                        background-image: url("./decrease_1@2x.png");
                    }

                    &.discount {
                        background-image: url("./discount_1@2x.png");
                    }

                    &.invoice {
                        background-image: url("./invoice_1@2x.png");
                    }

                    &.special {
                        background-image: url("./special_1@2x.png");
                    }

                     &.guarantee {
                         background-image: url("./guarantee_1@2x.png");
                     }
                }

                .text {
                    font-size: 10px;
                    line-height: 12px;
                    vertical-align: middle;
                }
            }

        }

        .support-count {
            position: absolute;
            bottom: 18px;
            right: 12px;
            padding: 2px 8px;
            height: 24px;
            line-height: 24px;
            -webkit-border-radius: 14px;
            -moz-border-radius: 14px;
            border-radius: 14px;
            background-color: rgba(0, 0, 0, .2);
            text-align: center;
            font-size: 10px;

            .count {
                font-size: 10px;
            }
        }
    }

    .bulletin-wrapper {
        padding: 8px 24px;
        font-size: 20px;

        font-size: 12px;
        background-color: rgba(7, 17, 27 ,.2);

        .bulletin-title {
            display: inline-block;
            width: 24px;
            height: 12px;
            background: url("./bulletin@2x.png") no-repeat;
            background-size:  24px 12px;
            vertical-align: middle;
        }

        .bulletin-text {
            display: inline-block;
            max-width: calc(100% - 40px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
        }

        i {
            vertical-align: middle;
        }
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);

        img {
            width: 100%;
            height: 100%;
        }
    }

    .detail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        overflow: auto;
        background-color: rgba(7, 17, 27, .8);

        backdrop-filter: blur(10px);

        .detail-wrapper {
            min-height: 100%;
            width: 100%;

            .detail-main {
                margin-top: 64px;
                padding: 0 0 64px 0;

                .name {

                }
            }


            .supports {
                width: 80%;
                margin: 0 auto;
                padding: 0;

                .support-item {
                    padding: 0 12px;
                    margin: 12px 0;
                    font-size: 0;
                    text-align: left;

                    .icon {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        vertical-align: top;
                        margin-right: 6px;
                        background-size: 16px 16px;
                        background-repeat: no-repeat;

                        &.decrease {
                            background-image: url("./decrease_1@2x.png");
                        }

                        &.discount {
                            background-image: url("./discount_1@2x.png");
                        }

                        &.invoice {
                            background-image: url("./invoice_1@2x.png");
                        }

                        &.special {
                            background-image: url("./special_1@2x.png");
                        }

                        &.guarantee {
                            background-image: url("./guarantee_1@2x.png");
                        }
                    }

                    .text {
                        line-height: 12px;
                        font-size: 12px;
                    }
                }
            }


        }
        .detail-close {
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto;
            font-size: 32px;
            clear: both;
        }

        .bulletin {
            width: 80%;
            margin: 0 auto;

            .content {
                padding: 0 12px;
                line-height: 24px;
                font-size: 12px;
                text-align: left;

            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
</style>
