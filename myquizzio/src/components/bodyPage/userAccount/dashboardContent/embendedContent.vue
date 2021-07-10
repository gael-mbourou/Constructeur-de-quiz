<template>
  <div>
    <div>
  <b-embed type="iframe" aspect="16by9" :src="LinkContent"
    allowfullscreen
  ></b-embed>
</div>
  </div>
</template>

<script>

export default {
name:'embendedContent',
data(){
    return{
        LinkContent:'https://www.youtube.com/embed/zpOULjyy-n8?rel=0'
    }
}
}
</script>