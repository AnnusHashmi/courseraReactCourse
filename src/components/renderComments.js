import React from 'react'

function RenderComments(props){
    const coms = props.dish.comments.map((comment) =>
    {
        return(
            <div key={props.dish.id}>
                <li> {comment.comment} </li>
                <p>--{comment.author} </p>
            </div>
        )
    })
    return(
        <div>
            <h4>Comments</h4>
            {coms}
        </div>
    )
}

export default RenderComments;