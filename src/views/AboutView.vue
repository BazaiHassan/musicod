<template>
  <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="rounded-lg shadow-xl bg-gray-900 text-white" style="width: 450px">
      <div class="border-b border-gray-800 px-8 py-3">
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
        <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
      </div>
      <div class="px-8 py-6">
        <p>
          <em class="text-blue-400">const</em> <span class="text-green-400">aboutMe</span>
          <span class="text-pink-500">=</span> <em class="text-blue-400">function</em>() {
        </p>
        <p>&nbsp;&nbsp;<span class="text-pink-500">return</span> {</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span class="text-yellow-300">'H Bazai'</span>,</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;position:
          <span class="text-yellow-300">'Developer'</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;website:
          <span class="text-yellow-300"
            >'<a
              href="https://mlmond.com"
              target="_blank"
              class="text-yellow-300 hover:underline focus:border-none"
              >https://mlmond.com</a
            >'</span
          >,
        </p>
        <p>&nbsp;&nbsp;}</p>
        <p>}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
