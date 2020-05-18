import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          avatar={faker.image.avatar()}
          timeAgo="Today at 4.45pm" 
          commentText="Great blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          avatar={faker.image.avatar()}
          timeAgo="Today at 1.15pm" 
          commentText="OK blog post."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jo" 
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 2.00pm" 
          commentText="Not keen on this blog post."
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));