import * as React from 'react';
import {
  Box,
} from '@mui/material'

export interface MovieClipShape {
    divId: string
    zIndex: number
}

export default function MovieClip(props: MovieClipShape) {

  const movieclipStyle = {
    border: "1px solid yellow",
  }
  
  return <Box id="stage" sx={ movieclipStyle }>
            MovieClip
          </Box>
}
