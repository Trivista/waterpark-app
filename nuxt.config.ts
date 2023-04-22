import { GlobalSettings } from "./environmentsettings";

const appEnv = process.env.ENV || "development";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
            companyname: "Water Park",
            siteName: GlobalSettings[appEnv].siteName,
            telephone: GlobalSettings[appEnv].telephone,
            siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
        }
        },
    modules: ['@pinia/nuxt',],
    plugins: ["~/store/app.ts"],
})
