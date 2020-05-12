<template>
  <div class="site-right" :class="{'site-right-hide': !isCollapse,'site-right-show': isCollapse}">
    <!-- isCollapse === false ---start -->
    <div v-if="!isCollapse" style="padding: 20px 10px;">
    </div>
    <!-- isCollapse === false ---end -->

    <!-- isCollapse === true ---start -->
    <!-- <div v-if="isCollapse" style="padding: 20px 10px;">
      <a href="javascript:" @click="handleClose">close</a>
    </div> -->
    <!-- isCollapse === true ---end -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
      }
    },
    computed: {
      mainRight: {
        get () { return this.$store.state.common.mainRight },
        set (val) { this.$store.commit('common/updateMainRight', val) }
      }
    },
    methods: {
    }
  }
</script>