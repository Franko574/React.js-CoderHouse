
import { SlBasket } from "react-icons/sl";


function ProfileCard(props){

    const {titulo , arroba , img }= proprs;

    const [ count , setcount ] = useState (0);

    function handleClick () {
        setcount(count + 1);
    }

    return (
        <div clasname="card">
            <div class="card-img">

                <figure claseName="image is-1by1">
                    <img src={img} alt={"logo"}/>
                </figure>
            </div>
            <div src="card-content">
                <div clasName="media-content">
                <h3 className="title is -4">Titulo :{titulo}</h3>
                <p className="subtitle is-4">Arroba :{arroba}</p>
                </div>
                <p>likes:{count}</p>
                <button onClick={handleClick} className="button is-primary">
                    <p></p>
                    </button>
            </div>
        </div>
    ) 
}