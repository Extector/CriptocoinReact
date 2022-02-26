import chart from "../assets/imgs/Indexgrafic.png";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src={chart} alt="Detail" />

        <div className="information">
          <h1>
            Free your <mark className="mark money">money</mark> and <br />
            <mark className="mark invest">invest</mark> with confidence
          </h1>

          <p className="description">
            Your gateway to trade. Buy, sell any cripto
          </p>
        </div>
      </div>
    </section>
  );
}
