import '../styles/Tag.scss'

function Tag() {
  let newUrlId = new URL (window.location).searchParams.get('id');
  const Logements = require('../data/logements.json');
  const logement = Logements.find(x=>x.id===newUrlId);
  const arrayTags = logement.tags;
  return(
    <div className='tags'>
      {arrayTags.map((tag,index)=>(
        <p key={index} className='tag'>{tag}</p>
      ))}
    </div>
  )
}
export default Tag