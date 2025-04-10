import React from 'react';

const PollOption = ({ label, count, onVote }) => {
return (
<div style={{ marginBottom: '1rem' }}>
<h3>{label}: {count} votes</h3>
<button onClick={onVote}>Vote for {label}</button>
</div>
);
};

export default PollOption;