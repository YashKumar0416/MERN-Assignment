import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../URL';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Present } from '../App';
import Card from './Card';

const Products = () => {

    const [data, setData] = useState([]);
    const {state, dispatch} = useContext(Present);

    const getData = async ()=> {
        
        const res = await fetch(`${URL}/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
        });
        // console.log(res)
        const json = await res.json();
        // console.log(json);

        if(res.status === 200) {
            setData(json.data)
        } else {
            console.log("No data")
        }
    }

    useEffect(()=> {
        getData();
        if(localStorage.getItem('authToken')) {
            dispatch({type: "PRESENT", payload: true})
        }
    }, []);

  return (
    <>
    {state ? 
            <div className="container mt-5">

            <h1 className='text-center m-2'>All Products</h1>
            <Container>
                {data.map((item)=> {return (
                    <Row className='justify-content-md-center'>
                        <Col key={item._id} md-auto className='m-2 p-2 rounded'>
                            <Card itemdata={item}/>
                        </Col>
                    </Row>
                )})}
            </Container> 
            </div>
    : ''}
    </>
  )
}

export default Products;