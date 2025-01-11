import { supabase } from "./supabase"

export const getVideos = async() => {
    const { data, error } = await supabase
  .from('videos')
  .select(`
    *, 
    users (
      username, 
      avatar
    )
  `)

  return [error, data]
}