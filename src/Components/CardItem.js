import React from 'react'
import {Link} from 'react-router-dom'

function CardItem() {
    return (
<>
<li className="cards__item">
    <Link className="card__item__link">
        <figure className="cards__item__pic__wrap">
            <img src="/" alt="Travel Image" className="cards__item_img"/>
        </figure>
    </Link>
</li>
</>
    )
}

export default CardItem
