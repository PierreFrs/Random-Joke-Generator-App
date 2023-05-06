import { useState, useEffect } from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import './Jokes.scss'
import { jokeCategories } from './data'

const Jokes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});
  const [categoryIndex, setCategoryIndex] = useState(0);

  async function getJoke() {
    setIsLoading(true);
    const response = await fetch(jokeCategories[categoryIndex].url);
    const data = await response.json();
    const jokeText = jokeCategories[categoryIndex].extractJoke(data).value;
    setJoke({text: jokeText});
    setIsLoading(false);
  }

  useEffect(() => {
      getJoke();
    }, [categoryIndex]);

    const handleCategoryChange = event => {
      const index = parseInt(event.target.value);
      setCategoryIndex(index);
    }

  return (
    <section className='jokes-sec --center-all'>
      <div className="container joke --bg-light --card --p2">
        <h2>Random Joke Generator</h2>
        <BsEmojiSmileUpsideDown className='smiley --mb' alt='smiley'/>
        <hr />
        <select onChange={handleCategoryChange} value={categoryIndex}>
          {jokeCategories.map((category, index) => (
            <option key={index} value={index}>{category.name}</option>
          ))}
        </select>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className='--my2'>{joke.text}</p>
        )}
        
        <hr className='--mb2'/>
        <button className='--btn --btn-primary --btn-block' onClick={getJoke}>Generate new INSANE joke !!!</button>
      </div>
    </section>
  );
}

export default Jokes