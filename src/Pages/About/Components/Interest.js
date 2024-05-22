
import React, { useState } from 'react';

const Interest = () => {


  // Array of objects with nested arrays
  const arrayOfObjects = [
    {
      title: "Interests",
      texts: ['Community Involvement', 'Traveling', 'Photography', 'Sports', 'Reading', 'Listen to music']
    },
    {
      title: "Strenghts",
      texts: ['Deligation', 'Analytical thinking', 'Teamwork', 'Direct-response emails', 'Punctuality', 'Listening skills', 'Negotiation', 'Creativity', 'Project management', 'Work ethic', 'Speaking skills', 'Taking initiative', 'Self management']
    },
    {
      title: "Future goals",
      texts: ['Start a small business', ' Travel to diffent countries', 'Help others achieve their goals', 'Build own house', 'Buy a own car', 'Make proud my parents']
    }
  ];


  const [selected, setSelected] = useState(null)
  const handleSelect = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index);
  }
  return (
    <>
      <div className="interests">

        <div className="item">

          {/* Rendering array of objects */}

          {arrayOfObjects.map((obj, index) => {
            return (
              <div className="wraper" key={index} onClick={() => handleSelect(index)}>

                <div className='title'>
                  <h2>{obj.title}:</h2>
                  <div className="tag"  >
                    <p className={selected === index ? "reverse" : ""}>⌵</p>
                  </div>
                </div>

                {/* Mapping nested array */}

                <ul className={selected === index ? " texts show" : "texts"}>
                  {obj.texts.map((texts, innerIndex) => {
                    return (
                      <li >
                        <p key={innerIndex}>{texts}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  );
}
export default Interest;