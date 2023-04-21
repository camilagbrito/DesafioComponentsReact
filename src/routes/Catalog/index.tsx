import './styles.css';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Depoiment from '../../components/Depoiment';
import Footer from '../../components/Footer';

export default function Catalog(){
    return(
        <>
            <Header /> 
            <main className="ct-catalog-main">
                <section id="ct-catalog-section" className="ct-container"> 
                    <div className="ct-catalog-cards-container">
                        <h2>Venha nos visitar</h2>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                    </div>
                    <div className="ct-catalog-depoiments-container">
                        <h2>O que estão dizendo</h2>
                        <div>
                            <Depoiment />  
                        </div>   
                        <div>
                            <Depoiment />  
                        </div> 
                        <div>
                            <Depoiment />  
                        </div> 
                        <div>
                            <Depoiment />  
                        </div> 
                        <div>
                            <Depoiment />  
                        </div>  
                    </div>
                </section>
            </main>
            <Footer /> 
        </>
    );
}