import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Info.css'

const Info = (props) => {
    //destructuring 
    const { name, img, Age, Residence, Founder, Ownership, networth } = props.person || {}
    return (
        <div className="informations">
            <img className="image-style" src={img} class="card-img-top h-40 w-75" alt="..." />
            <div>
                {/* informations */}
                <h5>Name:{name}</h5>
                <p >Age:{Age}</p>
                <p>Residence:{Residence}</p>
                <p>Founder:{Founder}</p>
                <p>Ownership:{Ownership}</p>
                <p>Net-Worth:{networth}</p>
                <button onClick={() => props.handleAddProduct(props.person)}
                    className='cart-button'
                >{<FontAwesomeIcon icon={faPeopleArrows} />} Select Person</button>
                <div className="footer">
                    <div>
                        <i class="fab fa-facebook"></i>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Info;