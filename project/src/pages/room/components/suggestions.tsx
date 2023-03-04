// Когда будет понимание по приходу данных, я переделаю в отрисовку циклом.
function Suggestions(): JSX.Element {
  return (
    <>
      <article className="near-places__card place-card">
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <a href="/">
            <img
              className="place-card__image"
              src="img/room.jpg"
              width="260"
              height="200"
              alt="Place"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;80</b>
              <span className="place-card__price-text">
                        &#47;&nbsp;night
              </span>
            </div>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="/">Wood and stone place</a>
          </h2>
          <p className="place-card__type">Private room</p>
        </div>
      </article>

      <article className="near-places__card place-card">
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <a href="/">
            <img
              className="place-card__image"
              src="img/apartment-02.jpg"
              width="260"
              height="200"
              alt="Place"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;132</b>
              <span className="place-card__price-text">
                        &#47;&nbsp;night
              </span>
            </div>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="/">Canal View Prinsengracht</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>

      <article className="near-places__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <a href="/">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width="260"
              height="200"
              alt="Place"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;180</b>
              <span className="place-card__price-text">
                        &#47;&nbsp;night
              </span>
            </div>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="/">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
    </>

  );
}

export default Suggestions;
