import React from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'

const Jokes = () => {
  return (
    <section className='jokes-sec'>
      <div className="container joke">
        <h2>Random Joke Generator</h2>
        <BsEmojiSmileUpsideDown />
        <hr />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quam deleniti explicabo deserunt? Assumenda beatae omnis nisi fugiat facilis porro eos, ratione eum dolores recusandae repellendus praesentium suscipit, quis vero?</p>
        <hr />
        <button>Generate new INSANE joke !!!</button>
      </div>
    </section>
  );
}

export default Jokes