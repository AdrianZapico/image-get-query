import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {Input} from './style'
import {FcPicture} from 'react-icons/fc'
//lwc1VLhcTz44odhG50G60qRANpyWNIHfNeKzz3Ba6xeAWAP2Efrz9ckD
function Home() {
    const [key,setKey] = useState('image')
    
    const { data, isFetching } = useQuery(`${key}`, async () => {
      const response = await axios.get(`https://joeytafolla123c.korconnect.io/PexelVercel/search?query=${key}`, {
        headers: {
          headers : { "API_KEY": "K7gizNM8zS8y9AJiV0roD2Ygrn7jNIbw7tYjzie2" }
        }
      })
      return response.data.photos
    })

    return (
  <>
  <div style={{textAlign:"center"}}>
    <NavBar/>
    
        {isFetching && <p>Get Image...<FcPicture/></p>}
      
        <Input type="text"
        style={{textAlign:"center"}}
        onChange={(e)=> setKey(e.target.value)}
        />
        
        <div>
          {data?.map(img => {
            return (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
  
  
              }} key={img.id}>
               {/* <a href={`${img.src.medium}`} >download</a> */}
                <div style={{
                  backgroundImage: `url('${img.src.medium}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '430px',
                  height: '330px',
                  margin: '20px',
                  boxShadow: '1px 1px 15px #ddd'
                }} />
                 
              </div>
            )
          })}
        </div>
      </div>
  
  </>
    )
  }
  
  export default Home
  