import React from "react";
import styled from "@emotion/styled";

const ChatStyled=styled.div`
    width: 500px;
    background-color: silver;
    padding: 10px;
`;

export class Chat extends React.Component{
    
    constructor(){
       super();
       this.state={
            comment:"",
            commentsHistory:[]
        };
        this.getComment=this.getComment.bind(this);
    }

    componentDidMount() {
        fetch("https://connect-comments-api.herokuapp.com/api/comments")
          .then(comments => comments.json())
          .then(json => console.log(json)); 
      };
    
   
    getComment(){
        this.setState({comment: event.target.value})
    }

    render(){
        return(
        <ChatStyled>
            <div>Chat {this.props.activeUser}</div>
            <div>
                <textarea value={this.state.comment} onChange={this.getComment}/>
            </div>
            <div>
                {this.state.comment}
            </div>
        </ChatStyled>
        );
    }
}