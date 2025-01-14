import { supabase } from "./supabase"

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async({videoFile}) => {
  const filename = window.crypto.randomUUID()
  
  const { data, error } = await supabase .storage
  .from('videos')
  .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.fullPath ? `${prefix}${data.fullPath}` : ''
  
  return [error, file]
}

export const publishVideo = async({videoSrc, description}) => {
  const defaultAlbum = 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3449ae07e0c66d3c5b14ed589482bcd4~c5_100x100.jpeg?lk3s=a5d48078&nonce=49499&refresh_token=8b2b05958f9a315504b165239b5c8cac&x-expires=1736128800&x-signature=CVBfurOP0yXUGpEg88DwZo84jAY%3D&shp=a5d48078&shcp=b59d6b55&quot'
  const defaultSong = 'I Want to Break Free, Queen'
  
  const {data, error} = await supabase
  .from('videos')
  .insert([
    { user_id: '466cb8ce-e059-4150-bad8-ae0a0a54a3b5', 
      description,
      albumCover: defaultAlbum,
      songTitle: defaultSong,
      src: videoSrc},
  ])

  return [error, data]
}

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
  .order('created_at', {ascending: false})

  return [error, data]
}