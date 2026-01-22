<template>
    <h1>{{ greeting }}</h1>
    <button v-bind:title="buttonTitle" @click="changeGreeting">{{ buttonTitle }}</button>

</template>

<script>
export default {
    data() {
        return {
            greeting: 'Xin chào bạn',
            buttonTitle: 'Click Change'

        };
    },
    methods: {
        changeGreeting() {
            if (this.greeting === 'Xin chào bạn') {
                this.greeting = 'Hello Vue';
                this.buttonTitle = 'Click Change';
            }else {
                this.greeting = 'Xin chào bạn'
                this.buttonTitle = 'Click Change'
            }

        }
    }
}
</script>

<style lang="scss" scoped></style>