import React, {useState, useEffect} from 'react';
import CredentialsAPI from '../Api/CredentialsAPI';
// import Search from '../Search'



function Credentials() {
    console.log(CredentialsAPI)

    const [product, setProduct] = useState([])
    const [searchText, setSearchText] = useState([])

    const data =(e)=>{
        const {value}= e.target
        setSearchText(value)
        console.log(value)
    }

    console.log(searchText)


    useEffect(() => {
        // console.log('helloww FETCH GETwwwwwwwwwwwwww');
        fetch('https://60d1d65c5b017400178f47b1.mockapi.io/orderlist')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setProduct(data)
          });
      }, []);

    return (
        
        <div className="container">
                      <div>
                          
                        <form class="d-flex"  style={{marginTop:"20px", width:"500px"}}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={data}/>
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>

            {/* return episode.title.toString().toLowerCase().indexOf(props.filterText.toString().toLowerCase()) > -1; */}
            <div className="row ">
                {
                    product
                    .filter(val => {
                        if (searchText === '') {
                          return val;
                        } else if (
                          val.name.toString().toLowerCase().includes(searchText.toString().toLowerCase())
                        ) {
                          return val;
                        }
                      })
                    .map((item, key) => {
                        return <div className="col-4 card-Width">
                            <div className="card cards-size" style={{ width: "18rem" }}>
                                <img style={{ padding:"10px", border:"soild grey 1px" }} src={item.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div>
                                    <p className="card-text card-detail">{item.comment}</p>
                                    </div>
                                    <h5 className="card-text">YumFactor: {item.yumFactor}</h5>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Credentials
