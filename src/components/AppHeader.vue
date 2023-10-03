<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-between items-center py-5 px-4">
      <!-- Left Side: Logo and Links -->
      <div class="flex items-center">
        <!-- App Name - Logo -->
        <router-link
          class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          :to="{ name: 'home' }"
          exact-active-class="no-active"
        >
          <img src="../assets/logo.png" style="height: 36px" alt="Musicod logo" loading="lazy" />
        </router-link>

        <!-- Primary Navigation - Left Links -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'article' }">Articles</router-link>
          </li>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">About</router-link>
          </li>
        </ul>
      </div>

      <!-- Right Side: Manage, Login/Register, Logout -->
      <div class="flex items-center">
        <template v-if="!userStore.userLoggedIn">
          <a class="px-2 text-white" href="#" @click="toggleAuthModal">Login / Register</a>
        </template>
        <template v-else>
          <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
          <a class="px-2 text-red-500" href="#" @click.prevent="logout">Logout</a>
        </template>
      </div>
    </nav>
  </header>
</template>


<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },

    logout(){
      this.userStore.logout()
      if (this.$route.meta.requiresAuth){
        this.$router.push({name:'home'})
      }

    }
  }
}
</script>
