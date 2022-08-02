import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [`@nuxtjs/supabase`],
    css: [`assets/css/tailwind.css`],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    supabase: {
        url: process.env.URL,
        key: process.env.PUBLIC_KEY,
        serviceKey: process.env.SECRET_KEY
    }
})
