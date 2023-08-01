import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"김창식"} comment={"안녕하세요, 김창식입니다."}/>
            <Comment name={"김방패식"} comment={"리액트 재미있어요~!"}/>
        </div>
    );
}

export default CommentList;