import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
const [pets, setPets] = useState([
{ option: 'Dog', count: 0 },
{ option: 'Cat', count: 0 },
{ option: 'Rat', count: 0 },
]);

const handleVote = (index) => {
const newPets = [...pets];
newPets[index].count += 1;
setPets(newPets);
};

const getLeader = () => {
const maxVotes = Math.max(...pets.map((pet) => pet.count));
const leaders = pets.filter((pet) => pet.count === maxVotes);
if (leaders.length === 1 && maxVotes > 0) {
return `${leaders[0].option} is winning with ${leaders[0].count} votes!`;
} else if (maxVotes === 0) {
return 'No votes yet.';
} else {
return `It’s a tie between: ${leaders.map((l) => l.option).join(', ')} (${maxVotes} votes each)`;
}
};

return (
<div style={{ padding: '2rem', textAlign: 'center' }}>
<h1>Vote for the Best Pet!</h1>
{pets.map((pet, index) => (
<PollOption
key={index}
label={pet.option}
count={pet.count}
onVote={() => handleVote(index)}
/>
))}
<h2 style={{ marginTop: '2rem' }}>Current Leader:</h2>
<p>{getLeader()}</p>
</div>
);
};

export default App;