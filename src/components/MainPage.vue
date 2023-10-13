<template>
    <MainHeader />
    <FirstContent />
    <SecondContent></SecondContent>
    <ThirdContent />
    <MainFooter />

  
</template>

<script>
import MainHeader from './MainHeader.vue';
import FirstContent from './FirstContent.vue';
import SecondContent from './SecondContent.vue';
import ThirdContent from './ThirdContent.vue';
import MainFooter from './MainFooter.vue'; 

export default {
  name: 'App',
  components: {
    MainHeader,
    FirstContent,
    SecondContent,
    ThirdContent,
    MainFooter
  }
}



</script>