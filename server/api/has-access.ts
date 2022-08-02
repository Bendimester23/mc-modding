import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server"

export default defineEventHandler(async (event) => {
    const user = await serverSupabaseUser(event)

    const id = user?.user_metadata?.provider_id || 69

    if (id == 69) {
        return {
            access: false
        }
    }

    const client = serverSupabaseClient(event)

    try {
        const res = await client.from(`Students`).select().eq(`user_id`, id+"").single()
        
        if (res.data?.user_id != undefined) {
            return {
                access: true
            }
        }
    } catch (e) {
        return {
            access: false
        }
    }
    
    return {
        access: false
    }
  })
  