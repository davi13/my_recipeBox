import React from 'react';

class Connexion extends React.Component{
    gotToApp(event){
        event.preventDefault();
        //ON RECUPERE LE PSEUDO
        const pseudo = this.boxInput.value;
        //ON CHANGE L'URL
        this.context.router.transitionTo(`/box/${pseudo}`);

    }
    render(){
        return(
            <div className="connexionBox">
                <form className="connexion" onSubmit={(event) => {this.gotToApp(event)}} >
                    <h1>Ma Boite à Recettes</h1>
                    <input 
                        type="text"
                        placeholder="Nom du Chef"
                        pattern="[A-Za-z-]{1,}"
                        required
                        ref={(input) => {this.boxInput = input}} 
                    />
                    <button type="submit">Go</button>
                    <p>Pas de caractéres speciaux.</p>
                </form>

            </div>
        )
    }
    static contextTypes = {
        router: React.PropTypes.object
    };

}
export default Connexion;