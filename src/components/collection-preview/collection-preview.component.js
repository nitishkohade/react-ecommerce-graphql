import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import CollectionItemGraphql from '../collection-item/collection-item.graphql'
import './collection-preview.styles.scss'

const CollectionPreview = (props) => {
    const { title, items } = props
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((i, index) => index < 4).map(
                        (item) => (
                        <CollectionItemGraphql 
                            key={item.id} item={item}
                        />)
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview