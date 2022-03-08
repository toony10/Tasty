import PreviousSearch from "../components/Recipes-page-components/PreviousSearch";
import RecipeCard from "../components/Recipes-page-components/RecipeCard";
function Recipes() {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and meatballs",
      image: "./img/gallery/img_4.jpg",
      authorImage: "./img/top-chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "./img/gallery/img_5.jpg",
      authorImage: "./img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "./img/gallery/img_6.jpg",
      authorImage: "./img/top-chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "./img/gallery/img_10.jpg",
      authorImage: "./img/top-chefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and meatballs",
      image: "./img/gallery/img_4.jpg",
      authorImage: "./img/top-chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "./img/gallery/img_5.jpg",
      authorImage: "./img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "./img/gallery/img_6.jpg",
      authorImage: "./img/top-chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "./img/gallery/img_10.jpg",
      authorImage: "./img/top-chefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and meatballs",
      image: "./img/gallery/img_4.jpg",
      authorImage: "./img/top-chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "./img/gallery/img_5.jpg",
      authorImage: "./img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "./img/gallery/img_6.jpg",
      authorImage: "./img/top-chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "./img/gallery/img_10.jpg",
      authorImage: "./img/top-chefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "./img/gallery/img_1.jpg",
      authorImage: "./img/top-chefs/img_1.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <PreviousSearch />
      <div className='recipes-container'>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}{" "}
      </div>
    </div>
  );
}

export default Recipes;
