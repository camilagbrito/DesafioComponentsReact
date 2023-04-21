import './styles.css';
import carImg from '../../assets/car-card.png';

export default function Card(){

    return(
        <div className="ct-card">
            <img src={carImg} alt="Car" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    );

}