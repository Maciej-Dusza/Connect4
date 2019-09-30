import React from "react";
import styled from "@emotion/styled";

const ChatStyled = styled.div`
    width: 500px;
    background-color: silver;
    padding: 10px;
`;

const ChatHistory = styled.div`
    width: 300px;
    background-color: white;
    padding: 10px;
`;

export class Chat extends React.Component {

    constructor() {
        super();
        this.state = {
            comment: "",
            commentsHistory: []
        };
        this.getComment = this.getComment.bind(this);
        this.commentsList = this.commentsList.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidMount() {
        this.refreshComments()
    };


    refreshComments() {
        fetch("https://connect-comments-api.herokuapp.com/api/comments")
            .then(comments => comments.json())
            .then(json => this.setState({ commentsHistory: json }));
    };


    getComment(event) {
        this.setState({ comment: event.target.value })
    };

    commentsList(comments) {
        return (
            <div>
                {comments.map((item) => (
                    <div key={item._id}>
                        <div>{`${item.user}: ${item.text}`}</div>
                    </div>
                ))}
            </div>
        );
    }

    sendComment() {
        const apiUrl = "https://connect-comments-api.herokuapp.com/api/comments";
        const options = {
            method: "POST",
            body: JSON.stringify({
                user: this.props.activeUser,
                text: this.state.comment
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch(apiUrl, options)
            .then(comments => comments.json())
            .then(result => {
                this.setState({ comment: "" });
                this.refreshComments();
            }
            )
    };

    render() {
        return (
            <ChatStyled>
                <div>Chat {this.props.activeUser}</div>
                <div>
                    <textarea value={this.state.comment} onChange={this.getComment} />
                    <button onClick={this.sendComment}>Send</button>
                </div>
                <div>
                    {this.state.comment}
                    <ChatHistory>
                        {this.commentsList(this.state.commentsHistory)}
                    </ChatHistory>
                </div>
            </ChatStyled>
        );
    }
}