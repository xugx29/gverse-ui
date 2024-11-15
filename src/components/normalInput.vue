<template>
  <div class="w-full normalInputContainer">
    <div class="search" v-if="showSearchIcon">
      <v-icon class="search-icon" icon="mdi-magnify" />
    </div>
    <input
      class="normalInput px-6 w-full h-full cursor-pointer text14Px"
      :class="showSearchIcon ? 'pl-16' : ''"
    />
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  // decide show search icon yes or not
  showSearchIcon?: boolean
}
withDefaults(defineProps<propsType>(), {
  showSearchIcon: false,
})
</script>
<style lang="scss" scoped>
.normalInputContainer {
  position: relative;
  box-shadow: 0px 0px 30px 9px #7c7c7c;
  height: 56px;
  border-radius: 28px;
  border: 2px solid rgb(var(--v-theme-inputBorderColor));
  box-sizing: content-box;
  overflow: hidden;
  transform: translate(0.5px, 0);
  .search {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    &-icon {
      font-size: 28px;
    }
  }
}
.normalInput {
  outline: none;
  color: rgb(var(--v-theme-textColor));
  &:hover,
  &:focus {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.75) 0%,
      rgba(252, 242, 254, 0.75) 54.72%,
      rgba(255, 255, 255, 0.75) 100%
    );
    // box-shadow: 0px 4px 4px 0px #00000040 inset;
  }
}
</style>
