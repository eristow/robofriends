import React from 'react';

const Card = ({ id, name, email }) => {
  const imgStyle = {
    height: '200px',
    width: '200px',
  };

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt="robot"
        style={imgStyle}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
