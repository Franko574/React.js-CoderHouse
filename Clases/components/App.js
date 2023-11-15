import ProfileCard from "./components/ProfileCard";

import AlexaImg from "./img/alexa.png";
import SiriImg from "./img/siri.png";
import CortanaImg from "./img/cortana.png";

import "bulma/css/bulma.css";


function App(){

    return (

        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">Asistentes</h1>
                </div>                
            </section>

            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" arroba="@Alexa22" img={AlexaImg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" arroba="@Cortana66" img={CortanaImg}/> 
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" arroba="@Siri77" img={SiriImg}/> 
                    </div>

                </div>


            </div>
            
                   
        </div>

    )
}




export default App;