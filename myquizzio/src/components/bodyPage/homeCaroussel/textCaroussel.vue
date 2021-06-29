<template>
    <div>
        <P>{{contenuTextuel}}</P>
    </div>
</template>

<script>
    export default {
        name : 'textCaroussel',
        props:['contenuTextuel']
    }
</script>

<style scoped>
p{
    color:#fff;
}
</style>
