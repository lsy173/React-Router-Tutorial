import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {

    const query = queryString.parse(location.search);
    console.log(query);

    const { color } = query;

    return (
        <div>
            <h2 style={{color}}>Introduction</h2>
            <p>
                Hello, I'm {match.params.name}.
            </p>
        </div>
    );
};

export default About;