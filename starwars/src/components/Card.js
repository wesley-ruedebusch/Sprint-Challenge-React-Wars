import React from 'react';
import HeadingName from './StyledComponents';

const Character= (props) => {
return(
<HeadingName className="peopleCard">
<h2>Name:{props.human.name}</h2>
<h3>Age:{props.human.birth_year}</h3>
</HeadingName>
);
}
export default Character;