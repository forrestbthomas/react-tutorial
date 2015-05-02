const React = require('react');
const CommentList = require('./components/comment-list.jsx');
const CommentForm = require('./components/comment-form.jsx');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Hello, world! I am a Comment Box Thing.</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);