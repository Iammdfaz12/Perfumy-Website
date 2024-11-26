import one from "../assets/images/one.jpg";
import three from "../assets/images/three.jpg";
import two from "../assets/images/two.jpg";

export default Product;

function Product() {
  return (
    <div class="products">
      <div class="box">
        <img src={one} alt="Fogg" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div class="box">
        <img src={three} alt="villain"/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={two} alt="Designs Club" />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
          Lasting Perfume
        </p>
      </div>
    </div>
  );
}
