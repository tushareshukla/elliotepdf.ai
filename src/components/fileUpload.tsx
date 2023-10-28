"user client"

import React from 'react'

import { useDropzone } from 'react-dropzone'
const fileUpload = () => {
    const dropzone = useDropzone()
  return (
    <div className="p-2 bg-white rounded-xl">
        <div>
            <input type="text" />
        </div>
    </div>
  )
}

export default fileUpload