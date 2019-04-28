<template>
  <Layout>
    <Hero/>
    <Portfolio/>
    <About/>
    <Blog/>
    <Contact/>
  </Layout>
</template>

<script>
  import Hero from '~/components/Hero.vue';
  import Portfolio from '~/components/Portfolio.vue';
  import About from '~/components/About.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  
  export default {
    components: { 
      Hero,
      Portfolio,
      About,
      Blog,
      Contact
    },
  }
</script>