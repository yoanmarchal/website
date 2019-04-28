<template>
  <div>
    <div class="container">
      <Header/>
      <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
}
</script>
<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>