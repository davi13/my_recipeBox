import React from 'react';

class Header extends React.Component{
    covertirPseudo = (pseudo) => {
        return /[aeiouy]/i.test(pseudo[0]) ? `d' ${pseudo}` : `de ${pseudo}`

    };
    render(){
        return(
            <header>
                <h1>La boite à recettes {this.covertirPseudo(this.props.pseudo)}</h1>
            </header>
        )
    }
    static propType = {
        pseudo: React.PropTypes.string.isrequired
    };
}
export default Header;