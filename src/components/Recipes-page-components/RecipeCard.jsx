import CustomImage from "../Home-page-components/CustomImage";
function RecipeCard({ recipe }) {
  return (
    <div className='recipe-card'>
      <CustomImage imgSrc={recipe.image} pt='65%' />
      <div className='recipe-card-info'>
        <img className='auther-img' src={recipe.authorImage} alt='chef' />
        <div className='recipe-title'>{recipe.title}</div>
        <p className='recipe-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          autem illo molestias incidunt veritatis
        </p>
        <a className='view-btn' href='#!'>
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
