import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    const {user} = useAuth();
    const navigate = useNavigate();


    const handleAddToCard = food =>{
        // console.log(food);
        if(user && user?.email){
            // Add to cart logic here
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem);
            // .then(res => {
            //     console.log(res.data);
            // })
        } 
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "You won't be able to add this item!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: { from: location }})
                }
              });
            // alert('You need to be logged in to add items to cart');
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleAddToCard(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;