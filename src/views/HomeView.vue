<template>
  <!-- Introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div
      class="absolute inset-0 w-full h-full bg-contain introduction-bg"
      style="background-image: url(assets/img/header.png)"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">Enjoy Your Coding!</h1>
        <p class="w-full md:w-8/12 mx-auto">
          Incorporating music into coding on this platform enhances the experience. Whether it's
          classical elegance, electronic energy, or a personal playlist, music fosters concentration
          and creativity, shielding against distractions. It becomes a silent guide, navigating the
          coder through the intricate dance of logic and syntax, elevating the coding journey.
        </p>
      </div>
    </div>

    <img
      class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
      src="/assets/img/introduction-music.png"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import { songsCollection } from '../includes/firebase'
import AppSongItem from '../components/SongItem.vue'

export default {
  name: 'HomeView',
  components: {
    AppSongItem
  },
  data() {
    return {
      songs: [],
      maxPerPage: 10,
      penddingRequest: false
    }
  },
  async created() {
    this.getSongs()

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

      if (bottomOfWindow) {
        this.getSongs()
      }
    },
    async getSongs() {
      if(this.penddingRequest){
        return
      }

      this.penddingRequest = true

      let snapShots
      if (this.songs.length) {
        const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get()

        snapShots = await songsCollection
          .orderBy('modified_name')
          .startAfter(lastDoc)
          .limit(this.maxPerPage)
          .get()
      } else {
        snapShots = await songsCollection.orderBy('modified_name').limit(this.maxPerPage).get()
      }

      snapShots.forEach((document) => {
        this.songs.push({
          docID: document.id,
          ...document.data()
        })
      })
      this.penddingRequest = false
    }
  }
}
</script>
