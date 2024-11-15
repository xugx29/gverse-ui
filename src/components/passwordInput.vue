<template>
  <div class="w-full pwdInputContainer">
    <input
      class="pwdInput px-6 w-full h-full cursor-pointer text14Px pr-16"
      :type="!showPwd ? 'password' : 'text'"
    />
    <div class="togglePwdVisible" @click.stop="showPwd = !showPwd">
      <v-icon v-if="showPwd" class="eyes" icon="mdi-eye-outline" />
      <v-icon v-else class="eyes" icon="mdi-eye-off-outline" />
    </div>
  </div>
</template>
<script lang="ts" setup>
// decide show pwd content yes or not
const showPwd = ref(false)
</script>
<style lang="scss" scoped>
.pwdInputContainer {
  position: relative;
  box-shadow: 0px 0px 30px 9px #7c7c7c;
  height: 56px;
  border-radius: 28px;
  border: 2px solid rgb(var(--v-theme-inputBorderColor));
  box-sizing: content-box;
  overflow: hidden;
  transform: translate(0.5px, 0);
  .togglePwdVisible {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    .eyes {
      font-size: 28px;
    }
  }
}
.pwdInput {
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
