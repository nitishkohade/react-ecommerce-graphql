import hats from '../../assets/images/hats.jpg'
import jackets from '../../assets/images/jackets.jpg'
import womens from '../../assets/images/womens.jpg'
import sneakers from '../../assets/images/sneakers.jpg'
import mens from '../../assets/images/mens.png'

const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: hats,
            id: 1,
            linkUrl: "shop/hats"
        },
        {
            title: "jackets",
            imageUrl: jackets,
            id: 2,
            linkUrl: "shop/jackets"
        },
        {
            title: "sneakers",
            imageUrl: sneakers,                    
            id: 3,
            linkUrl: "shop/sneakers"
        },
        {
            title: "womens",
            imageUrl: womens,
            size: "large",
            id: 4,
            linkUrl: "shop/womens"
        },
        {
            title: "mens",
            imageUrl: mens,
            size: "large",
            id: 5,
            linkUrl: "shop/mens"
        }

    ]
}

const DirectoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default DirectoryReducer