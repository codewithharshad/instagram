import React from "react";

const commentsData = [
  {
    name: "Random User",
    text: "Lorem ipsum sit anet, consectetur adip",
    replies: [
      {
        name: "Random User",
        text: "Lorem ipsum sit anet, consectetur adip",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum sit anet, consectetur adip",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum sit anet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Random User",
    text: "Lorem ipsum sit anet, consectetur adip",
    replies: [
      {
        name: "Random User",
        text: "Lorem ipsum sit anet, consectetur adip",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum sit anet, consectetur adip",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum sit anet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Random User",
    text: "Lorem ipsum sit anet, consectetur adip",
    replies: [
      {
        name: "Random User",
        text: "Lorem ipsum sit anet, consectetur adip",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum sit anet, consectetur adip",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum sit anet, consectetur adip",
                replies: [
                  {
                    name: "Random User",
                    text: "Lorem ipsum sit anet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg py-3">
      <img
        className="h-12"
        alt="user"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
      ></img>

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black m-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
