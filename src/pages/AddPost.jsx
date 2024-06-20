import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 border-t-2 border-t-black'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost