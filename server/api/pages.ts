import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server"

export default defineEventHandler(async (event) => {
    return {
        '/guides/intro': `Bevezető`,
        '/guides/setup': `Szükséges programok`,
        '/guides/java': 'Java programozás',
        '/guides/java/project-setup': 'Projekt létrehozása',
        //'/guides/java/hello-world': 'Hello World'
    }
  })
  