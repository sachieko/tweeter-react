const TweetForm = () => {
  const question = "What are you humming about?"

  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form" onSubmit={(ev) => {ev.preventDefault()}}>
      <textarea className="form__textarea" name="text" placeholder={question}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  );
};
export default TweetForm;