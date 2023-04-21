import Button from "./Button";
import Card from "./Card";
import Salad from "../Assets/salad.jpg";
import BruchettaImg from "../Assets/bruchetta.jpg";
import DessertImg from "../Assets/Dessert.jpg";
import NoodlesImg from '../Assets/ricenoddles.jpg'

const Specials = () => {

  const Greek_Salad = {
    img: Salad ,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and feta cheese, garnished with crunchy garlic.",
  };

  const Bruchetta = {
    img: BruchettaImg,
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta features grilled bread smeared with garlic, seasoned with salt and olive oil for a savory appetizer.",
  };

  const Dessert = {
    img: DessertImg,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "Every ingredient in this recipe, sourced straight from grandma's book, is authentic and true to its origin.",
  };

  const Noodles = {
    img: NoodlesImg,
    title: "Rice Noddles",
    price: "$7.00",
    description:
      "Rice noodles offer a light, gluten-free alternative to pasta and are versatile for various dishes.",
  };

  return (
    <section className="special">
      <div className="specialGrid">
        <h1 className="specialsHeading">This weeks specials!</h1>
        <Button title="Online Menu" to=''/>
      </div>
      <section className="cards">
        <Card data={Greek_Salad} />
        <Card data={Bruchetta} />
        <Card data={Dessert} />
        <Card data={Noodles} />
      </section>
    </section>
  );
};

export default Specials;
