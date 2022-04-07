import React from 'react';

export default class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLaguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this);

    }

    updateLanguage(selectedLaguage) {
        this.setState({
            selectedLaguage
        })
    }
    render() {

        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return(
            <ul>
                {languages.map((language) =>
                <li key={language}>
                    <button className='btn-clear-nav-link'
                    style={language === this.state.selectedLaguage ? {color: 'rgb(187, 46, 31)'}: null}
                    onClick={() => this.updateLanguage(language)}>
                    {language}
                    </button>
                </li>
                )}
            </ul>
        )
    }
}