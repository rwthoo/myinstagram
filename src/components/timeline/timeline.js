import React from "react";
import {Post} from '../post';
import './timeline.css';

const posts=[
  {
  owner: "Rachel",
  location:"Toronto",
  imageUrl:"http://chinchilla.co/wp-content/uploads/2013/09/baby-chinchilla.jpg",
  comments: [
  {
      name:"Adam",
      text:"So cute"
    },
    {
      name:"Cody",
      text:"So small"
    }
  ]
},
{
owner: "Rachel",
location:"Toronto",
imageUrl:"http://chinchilla.co/wp-content/uploads/2013/09/baby-chinchilla.jpg",
comments:[
{
    name:"Adam",
    text:"So cute"
  },
  {
    name:"Cody",
    text:"So small"
  }
],
}
]


export const Timeline = () => (
  <div className="timeline">
  <div className="timeline__post-container">
    {posts.map(x => (
      <div className="timeline__post">
          <Post
           owner={x.owner}
           location ={x.location}
           imageUrl={x.imageUrl}
           comments={x.comments}
         />
       </div>
    ))}

  </div>
</div>
);
