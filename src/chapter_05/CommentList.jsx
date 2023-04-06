import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name: "이호영",
        comment: "안녕하세요, 이호영입니다.",
    },
    {
        name: "이호영1",
        comment: "안녕하세요, 이호영1입니다.",
    },
    {
        name: "이호영2",
        comment: "안녕하세요, 이호영2입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={foo.name} comment={foo.comment} />
                );
            })}
        </div>
    );
}
export default CommentList