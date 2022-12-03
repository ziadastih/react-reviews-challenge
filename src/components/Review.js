const Review = (props) => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>

        <article className="review">
          <div className="img-container">
            <img src={props.img} id="person-img" alt="" />
          </div>
          <h4 id="author">{props.name}</h4>
          <p id="job">{props.job}</p>
          <p id="info">{props.info}</p>

          <div className="button-container">
            <button className="prev-btn" onClick={props.prevReview}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={props.nextReview}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <button className="random-btn" onClick={props.randomReview}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Review;
