import { Link } from "react-router-dom"


const Card = (props) => {
    return(
        // need more work on product id
        <Link to='/product/'>
            <div className='container h-full p-4 rounded-lg shadow-md grid grid-cols-2 transition duration-500 ease-in-out transform hover:scale-105 '>
                <img className='col-span-2 w-full h-64 rounded-lg mb-4' src={props.product.imageUrl}></img>
                <span className='font-semibold text-xl'>{props.product.name}</span>
                <span className='text-right font-semibold text-xl'>${props.product.price}</span>
                <p className='col-span-2 pt-2 font-light text-sm text-gray-500 h-48'>{props.product.description}</p>
            </div>
        </Link>
    )
}

export default Card