<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass"
              class="star-item"></span>
    </div>
</template>

<script>
    const LENGTH = 5;
    const STAR_ON = 'on';
    const STAR_HALF = 'half';
    const STAR_OFF = 'off';

    export default {
        name: "star",
        props : {
            size: {
                type: Number,
            },
            score: {
                type: Number,
            }
        },

        computed: {
            starType () {
                return 'star-' + this.size;
            },
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !== 0;

                let integer = Math.floor(score);

                for (let i = 0; i < integer; i ++) {
                    result.push(STAR_ON);
                }

                if (hasDecimal) {
                    result.push(STAR_HALF)
                }

                while (result.length < LENGTH) {
                    result.push(STAR_OFF);
                }

                return result;
            }
        }
    }
</script>

<style scoped lang="scss">

    .star {
        font-size: 0;
        .star-item {
            display: inline-block;
            background-repeat: no-repeat;
        }

    }

    .star-48 {
        .star-item {
            width: 24px;
            height: 24px;
            margin-right: 16px;
            background-size: 24px 24px;

            &.on {
                background-image: url("./star48_on@2x.png");
            }

            &.half {
                background-image: url("./star48_half@2x.png");
            }

            &.off {
                background-image: url("./star48_off@2x.png");
            }
        }
    }

    .star-36 {
        .star-item {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            background-size: 16px 16px;

            &.on {
                background-image: url("./star36_on@2x.png");
            }

            &.half {
                background-image: url("./star36_half@2x.png");
            }

            &.off {
                background-image: url("./star36_off@2x.png");
            }
        }
    }

    .star-24 {
        .star-item {
            width: 10px;
            height: 10px;
            margin-right: 4px;
            background-size: 10px 10px;

            &.on {
                background-image: url("./star24_on@2x.png");
            }

            &.half {
                background-image: url("./star24_half@2x.png");
            }

            &.off {
                background-image: url("./star24_off@2x.png");
            }
        }
    }

</style>