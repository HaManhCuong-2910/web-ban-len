import { listMetaTagDefault } from "./src/services/constant";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s",
      meta: listMetaTagDefault,
      link: [
        // {
        //   rel: "icon",
        //   type: "image/png",
        //   href: "/imgs/apple-icon.png",
        // },
        // {
        //   rel: "shortcut icon",
        //   type: "image/png",
        //   href: "/imgs/apple-icon.png",
        // },
      ],
    },
  },

  robots: {
    // disallow: ["/vnpayment"],
    disallow: [],
  },

  experimental: {
    inlineRouteRules: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: "~/src/components",
      pathPrefix: false,
    },
  ],

  dir: {
    layouts: "src/layouts",
    pages: "src/pages",
    middleware: "src/middleware",
    modules: "src/modules",
  },

  modules: [
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vee-validate/nuxt",
    "nuxt-swiper",
    "@nuxtjs/device",
    "@nuxtjs/robots",
    "@element-plus/nuxt",
    "nuxt-site-config",
    "vue3-carousel-nuxt",
  ],

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    enabled: false,
  },

  i18n: {
    vueI18n: "./src/services/i18n.config.ts",
    locales: ["vi", "en"],
    defaultLocale: "vi",
    detectBrowserLanguage: false,
  },

  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VForm",
      Field: "VField",
      FieldArray: "VFieldArray",
      ErrorMessage: "VErrorMessage",
    },
  },

  elementPlus: {
    importStyle: "scss",
  },

  vite: {
    optimizeDeps: {
      include: ["dayjs", "dayjs/plugin/*", "element-plus"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData:
            '@use "@/assets/scss/custom/theme-element-plus.scss" as element;',
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 1600,
      target: "es2015",
    },
  },

  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "",
    },
  },

  ssr: false,
  compatibilityDate: "2024-11-27",
});
