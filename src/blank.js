import React from 'react';
function Blank(props) {
    const tag = props.match.params.tag;
    props.history.push('/'+tag+'/list/')
    return null
}

export default Blank;