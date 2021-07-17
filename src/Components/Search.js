
import React,{useState} from 'react';
import { connect } from 'react-redux';

function Search() {

    const [state, setstate] = useState([])


    const searchText =(e)=>{
        const {value}= e.target
        setstate(value)
    }

    return (
        <div>
            <form class="d-flex"  style={{marginTop:"20px", width:"500px"}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchText}/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        </div>
    )
}


const mapStateToProps = (state)=> {
    return {
        name: state.name,
        city: state.city
    }
}


const mapDispatchToProps = (dispatch)=> {
    return {
        updateCity: (city)=> {
            dispatch({
                type: "UPDATE_CITY",
                value: city
            })
        },

        updateName: (name)=> {
            dispatch({
                type: "UPDATE_NAME",
                value: name
            })
        }

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Search)
