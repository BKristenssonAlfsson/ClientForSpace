import React from 'react'
import './GalleryCard.css';

const GalleryCard = props => (
    <div>
    {props.data.length > 0 ? (
        props.data.map( card => (
            <div className="thumbnail" key={card.id}>
            <p>{card.title}</p>
            <p>{card.date}</p>
            {card.media_type === 'image' && <img alt="" src={card.hdurl} />}
            {card.media_type === 'video' && <iframe className="iframe" title="space" width="70%" src={card.url}></iframe>}
            </div>
            ))) : <p>Nothing stored in the database</p>
    }
    </div>
)

export default GalleryCard