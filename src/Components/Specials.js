import Button from "./Button";
import Card from "./Card";
import Salad from "../Assets/salad.jpg";
import BruchettaImg from "../Assets/bruchetta.jpg";
import DessertImg from "../Assets/Dessert.jpg";

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

  return (
    <section className="special">
      <h1 className="specialsHeading">This weeks specials!</h1>
      <Button cname="right" title="Online Menu" to=''/>
      <section className="cards">
        <Card data={Greek_Salad} />
        <Card data={Bruchetta} />
        <Card data={Dessert} />
      </section>
    </section>
  );
};

export default Specials;
