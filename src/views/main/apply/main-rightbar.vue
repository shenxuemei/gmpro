<template>
  <aside class="site-right" :class="{'site-right-hide': !isCollapse,'site-right-show': isCollapse}">
    <!-- isCollapse === false ---start -->
    <div v-if="!isCollapse" style="padding: 20px 10px;">
      <a href="javascript:" @click="handleOpen">open</a>
    </div>
    <!-- isCollapse === false ---end -->

    <!-- isCollapse === true ---start -->
    <div v-if="isCollapse" style="padding: 20px 10px;">
      <a href="javascript:" @click="handleClose">close</a>
    </div>
    <!-- isCollapse === true ---end -->
  </aside>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: true
      }
    },
    computed: {
      mainRight: {
        get () { return this.$store.state.common.mainRight },
        set (val) { this.$store.commit('common/updateMainRight', val) }
      }
    },
    methods: {
      handleOpen () {
        this.isCollapse = true
        this.mainRight = 200
      },
      handleClose () {
        this.isCollapse = false
        this.mainRight = 50
      }
    }
  }
</script>