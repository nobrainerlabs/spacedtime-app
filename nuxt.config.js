export default {
  mode: 'spa',

  css: ['@/assets/css/mvp.css'],

  head: {
    htmlAttrs: {
      lang: 'en'
    },

    title: 'Remember the import things in your life',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui'
      },

      { property: 'og:url', content: 'https://www.spacedtime.com' },
      { property: 'og:type', content: 'website' },

      {
        property: 'og:title',
        content: 'Remember the import things in your life'
      },

      {
        vmid: 'description',
        hid: 'description',
        name: 'description',
        content:
          'Using the spaced time repetition technique, you can permemantly store information in your brain, instead of the cloud'
      },

      {
        vmid: 'og:description',
        property: 'og:description',
        content:
          'Using the spaced time repetition technique, you can permemantly store information in your brain, instead of the cloud'
      },

      {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      },

      { property: 'og:image:type', content: 'image/png' }
    ]
  },

  modules: ['@nuxtjs/pwa'],

  plugins: [
    { src: '@/plugins/clientInit.js', mode: 'client'},
    { src: '@/plugins/logrocket.js', mode: 'client' }
  ],

  pwa: {
    meta: {
      name: 'SpacedTime App'
    },
    manifest: {
      name: 'SpacedTime App',
      lang: 'en',
      short_name: 'SpacedTimeApp'
    }
  }
};
