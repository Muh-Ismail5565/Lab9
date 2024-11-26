import {useState} from 'react';
const Search=()=>{

    const [search,setSearch]=useState('');

    const handleClick=()=>{
        

    }
    return(<>
    
    <div className="search-container">
        <input type="text" placeholder="Search for a recepie"
        onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
   
        </div>
        </> 
    )
}

export default Search;