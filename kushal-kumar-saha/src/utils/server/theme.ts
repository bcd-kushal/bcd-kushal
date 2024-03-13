'use server'
import { cookies } from "next/headers"


const DEFAULT_THEME = 'dark'
const COOKIE_THEME_NAME = 'theme_kushalkumar'

export const getTheme = async () => {
    try {
        if(!cookies().has(COOKIE_THEME_NAME)){
            cookies().set(COOKIE_THEME_NAME,DEFAULT_THEME)
            return DEFAULT_THEME
        }
        return cookies().get(COOKIE_THEME_NAME)?.value === 'light' ? 'light' : 'dark'
    }
    catch {
        return DEFAULT_THEME
    }
}

export const toggleTheme = async () => {
    try {
        const NEW_THEME = cookies().has(COOKIE_THEME_NAME)? cookies().get(COOKIE_THEME_NAME)?.value === 'light' ? 'dark' : 'light' : DEFAULT_THEME
        cookies().set(COOKIE_THEME_NAME,NEW_THEME)
    }
    catch {
        cookies().set(COOKIE_THEME_NAME, DEFAULT_THEME)
    }
}