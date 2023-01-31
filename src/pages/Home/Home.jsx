import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {Input} from './style'

import {FcPicture} from 'react-icons/fc'

function Home() {
    const [key,setKey] = useState('image')
    
    const { data, isFetching } = useQuery(`${key}`, async () => {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${key}`, {
        headers: {
          'Authorization': 'lwc1VLhcTz44odhG50G60qRANpyWNIHfNeKzz3Ba6xeAWAP2Efrz9ckD'
        }
      })
      return response.data.photos
    })
    
   

    function change(){
      setKey()
    }

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
  