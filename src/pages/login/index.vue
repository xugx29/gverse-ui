<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <p class="welcome text-center mb-20">WElCOME BACK</p>
    <div class="login-form grid grid-cols-1 gap-12">
      <div class="w-full">
        <p class="pl-6 mb-7 text14Px login-form_desc">Email or Phone Number</p>
        <normalInput></normalInput>
      </div>
      <div class="w-full">
        <p class="pl-6 mb-7 text14Px login-form_desc">Password</p>
        <passwordInput />
        <p
          class="pl-6 mb-7 mt-6 text14Px login-form_desc cursor-pointer hoverFF5A07"
          @click.stop="router.push('/forget')"
        >
          Forgot your password?
        </p>
      </div>
    </div>
    <div class="login-form">
      <div class="w-full mt-20 flex items-center justify-between">
        <gverseLoginBtn> Log In </gverseLoginBtn>
        <gverseLoginBtn @click.native="router.push('/')">
          <template v-slot:icon>
            <v-icon size="x-large" icon="mdi-account-multiple" />
          </template>
          Guest Mode
        </gverseLoginBtn>
      </div>
    </div>
    <p class="mt-16 text14Px">
      Don’t have an account?
      <span
        class="ml-2 cursor-pointer text14Px font-semibold underline hoverFF5A07"
        @click.stop="router.push('/register')"
      >
        Register
      </span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import normalInput from '@/components/normalInput.vue'
import passwordInput from '@/components/passwordInput.vue'
import gverseLoginBtn from '@/components/gverseLoginBtn.vue'

const router = useRouter()
</script>
<style lang="scss" scoped>
.welcome {
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: rgb(var(--v-theme-welcomeColor));
  backdrop-filter: blur(10px);
  text-shadow: 0px 0px 20px rgb(var(--v-theme-welcomeColor));
}
.login-form {
  width: 632px;
  &_desc {
    color: rgb(var(--v-theme-welcomeColor));
  }
}
.hoverFF5A07 {
  &:hover {
    color: #ff5a07;
  }
}
</style>
