import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from 'react-icons/ri'

function Game(props) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [indexActive, setIndexActive] = useState(1)
  const [initialTemplateIndex, setInitialTemplateIndex] = useState('')

  const handleClick = () => {
    inputValue && props.setGameBodyResults({...data[templateRandomIndex], blanks: Object.values(inputValue)})
  };

  const handleArrowClick = (e) => {
    const direction = e.currentTarget.getAttribute('direction')
    if (indexActive > 1 && indexActive < templateJsx.length) {
        if (direction === 'right') {
            setIndexActive(indexActive + 1 )
        } else if (direction === 'left') {
            setIndexActive(indexActive - 1 )
        }
    } else if (indexActive === 1) {
        if (direction === 'right') {
            setIndexActive(indexActive + 1 )
        }
    } else if (indexActive === templateJsx.length) {
        if (direction === 'left') {
            setIndexActive(indexActive - 1 )
        }
    }
  }

  const handleInputSubmit = (e) => {
      e.preventDefault()
    if (indexActive > 1 && indexActive < templateJsx.length) {
        setIndexActive(indexActive + 1 )
    }
  }

  const handleChange = (e) => {
    setInputValue({...inputValue, [e.currentTarget.getAttribute('index')]: e.target.value})
  };

  const fetchData = () => {
    fetch("http://localhost:5000/templates")
      .then((res) => res.json())
      .then((templates) => setData(templates));
  };

  useEffect(() => {
    fetchData();
    setInitialTemplateIndex(Math.random())
  }, []);

  const templateRandomIndex = data && Math.floor(initialTemplateIndex * data.length);
  const templateJsx = data[0] && data[templateRandomIndex].blanks.map((word, index) => {
      return (
          <form onSubmit={handleInputSubmit} className={(indexActive === index + 1) ? 'activePage' : 'gameInput'}>
              <input
                  key={`${word}${index}`}
                  index={index}
                  onChange={handleChange}
                  value={inputValue.index}
                  placeholder={word}
              />
          </form>
      );
    });

  const gameIndexIndicator = data[0] && <h1>{indexActive}/{data[templateRandomIndex].blanks.length}</h1>

  console.log(data)

  return (
    <div>
      <h2>Game Page</h2>
      <div className='gameBodyMain'>
        <div className='iconDiv'>
            <RiArrowLeftCircleLine className={indexActive > 1 ? 'arrowIcon' : 'arrowIcon arrowIconInvisible'} direction={'left'} onClick={handleArrowClick}/>
        </div>
        <div className='gameInputMain'>
            {templateJsx}
        </div>
        <div className='iconDiv'>
            {templateJsx && <RiArrowRightCircleLine className={indexActive < templateJsx.length ? 'arrowIcon' : 'arrowIcon arrowIconInvisible'} direction={'right'} onClick={handleArrowClick}/>}
        </div>
      </div>
      <div className='gameIndexIndicator'>
        {gameIndexIndicator}      
      </div>
      <Link to="/result-page">
        <button onClick={handleClick}>Submit</button>
      </Link>
    </div>
  );
}

export default Game;
