import { useDropzone } from 'react-dropzone'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { publishVideo, uploadVideo } from '../../services'

export default function Upload() {
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(null)
    const [description, setDescription] = useState('')

    const onDrop = async(files) => {
        const [file] = files
        setUploading(true)
        const [error, fileUrl] = await uploadVideo({videoFile: file})
        if(error){
            console.error(error)
            return 
        } 
        
        console.log(fileUrl)
        setUploaded(fileUrl)
    }

    const {
        isDragAccept,
        isDragReject,
        getRootProps,
         getInputProps} 
         = useDropzone({
        disabled: uploading || uploaded,
        maxFiles: 1,
        accept: {
            'video/mp4': ['.mp4'],
            'video/x-m4v': ['.m4v'],
        },
        onDrop})

useEffect(() => {
    if(isDragReject) navigator.vibrate(100)
}, [isDragReject])

const dndClassNames = clsx(styles.dnd, {
    [styles.uploaded]: uploaded,
    [styles.uploading && !styles.uploaded]: uploading,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
})

const handleDescription = (e) => {

}

const renderDndContent = () => {
    if(uploaded) { return <h4>Subido exitosamente!</h4>}
    if(uploading) {return <h4>Subiendo...</h4>}
    if(isDragReject) return <h4>Archivo no soportado</h4>
    if(isDragAccept) return <h4>Suelta el archivo para subirlo</h4>

    return <>
        <h4>Selecciona el video a cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
        <ul>
            <li>MP4 o WebM</li>
            <li>Resolucion minima 720x1280</li>
            <li>Max. tiempo 180 segs</li>
        </ul>
    </>
}

const handleSubmit = async evt => {
    evt.preventDefault()
    if(!uploaded) return 

    const description = evt.target.description.value
    const [error] = await publishVideo({videoSrc: uploaded, description})
    
    if(error) return console.error(error)
    else console.log('Video agregado!')
}

    return(
        <div className={styles.upload}>
            <h1>Cargar Video</h1>
            <span>Este video se publicara en el perfil de @luiz907</span>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={dndClassNames}>
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className={styles.image}>
                        <path d="M25.84 37h8.66a9.5 9.5 0 0 0 1.35-18.9A12 12 0 0 0 12 20v.01A8.5 8.5 0 0 0 12.5 37h10.34V25.6l-1.72 1.74a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 0 1 0-1.41l4.4-4.4c.68-.76 1.22-.77 2 .08l4.28 4.32a1 1 0 0 1 0 1.4l-.7.72a1 1 0 0 1-1.42 0l-1.72-1.75V37Z"></path></svg>

                        {renderDndContent()}
                    </div>
                </div>

                <label htmlFor="">leyenda
                    <input name='description' />
                </label>

                <button>Publicar</button>
            </form>
        </div>
    )
}