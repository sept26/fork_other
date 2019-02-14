<template>
  <div>
    <itemcontainer :roleJudge="'item'"></itemcontainer>
  </div>
</template>
<script>
import itemcontainer from '@/components/itemcontainer';

export default {
  components: {
    itemcontainer,
  },
  created() {
    this.$store.commit('rememberTime');
  },
};
</script>
