import React from 'react';

const AnotherComponent = () => {

    function Feature123() {
        console.log('Feature works');
    }

    function Featchaga111() {
        alert('Featchaga works')
    }

    return (
        <div onClick={Featchaga111}>
            Another Component
        </div>
    )
}

export default AnotherComponent;