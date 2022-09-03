const Tweet = () => { 
  const avatar = "https://i.imgur.com/73hZDYK.png";
  const message = "If I have seen further it is by standing on the shoulders of giants";
  const name = "Newton";
  const handle = "@SirIsaac";
  const timeago = "10 days ago";
  
  return (
  <article className="tweet">
  <header className="tweet--header">
    <img className="tweet--avatar" src={avatar} alt="avatar" />
    <h2 className="tweet--name">{name}</h2>
    <small className="tweet--handle">{handle}</small>
  </header>

  <div className="tweet--body">
    <p>{message}</p>
  </div>

  <footer className="tweet--footer">
    <small className="footer--age">{timeago}<small>
        <span className="footer--actions">
          <a href="https://twitter.com"><i className="fa fa-flag"></i></a>
          <a href="https://twitter.com"><i className="fa fa-retweet"></i></a>
          <a href="https://twitter.com"><i className="fa fa-heart"></i></a>'
        </span>
      </small></small></footer>
</article> ) 
};

export default Tweet;