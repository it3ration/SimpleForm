import React, {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function Info() {
  const [posts,setPosts] = useState([]);
  /* currently this works.. but is incorrect.
     asynchronous calls should be placed within the useEffect() Hook
     and not on a button event. 
  */

     useEffect(() => {
      getStuff();
     });

  const getStuff = async () => {
    try {
    await axios({
        method: 'get',
        url: '/info',
      
      }).then((response) => {
        const data = response.data;
        setPosts(data);

      })
 
    } catch (error) {
      console.log(error)
    }
  }


 //when mapping components to be rendered..
 //dont forget to add a key-index associated with each component. 
  const createCards = () => {
    return (
      <div>
          {posts.map((post,index) =>

          <div key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{post.username}</Card.Title>
                  <Card.Text>
                      {post.password}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </div>

          )}
      </div>
    )

 }
  
  
 return (
  <div>
    {createCards()}
  </div>
)
}

export default Info
