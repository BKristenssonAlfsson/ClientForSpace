import React from 'react'

const GalleryCard = props => (
    <div>
    {props.data.length > 0 ? (
        console.log(props.data) && <p>Bla</p>
            ) : <p>Nothing stored in the database</p>
    }
    </div>
)

export default GalleryCard