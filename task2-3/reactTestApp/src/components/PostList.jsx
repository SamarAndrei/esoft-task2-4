import React from "react";
import { Card } from "./Card";

export const PostList = ({posts}) => {

    return ( 
        <div> 
            {posts.map(post => ( 
                <div key={post.id}> 
                    <Card props={post}/> 
                </div>
            ))} 
        </div> 
    );
}