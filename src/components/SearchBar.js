import '../App.css';
import { Icon, InlineIcon } from '@iconify/react';
import bxSearchAlt from '@iconify-icons/bx/bx-search-alt';


const SearchBar = () => (
    <form id="NSB" action="/" method="get">
        
        <input
            type="text"
            id="SearchBox"
            placeholder="Search"
            name="Search" 
        />
        <button type="submit" id="SearchButton" ><Icon id="SearchIcon" icon={bxSearchAlt} width="2em" height="2em" /></button>
    </form>
)


export default SearchBar;