import { createServerClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export function createClient() {
  if(!supabaseUrl || !supabaseAnonKey){
    return new error("no: supabaseUrl or supabaseAnonKey")
  }
    return createServerClient(
        supabaseUrl!, supabaseAnonKey!
    )
}
