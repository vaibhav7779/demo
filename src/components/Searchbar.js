import React, { useState }  from 'react';

function Searchbar(props) {

    const [term, handleChange] = useState('Search');

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term);
    }

    return (
        <div class='search-bar ui segment'>
            <form onSubmit={handleSubmit} class='ui form'>
                <div class='field'>
                    <label htmlFor="video-search">Seach youtube videos</label>
                    <input onChange={e => handleChange(e.target.value)} name='video-search' type="text" value={term}/>
                </div>
            </form>
        </div>
    )
}
export default Searchbar;