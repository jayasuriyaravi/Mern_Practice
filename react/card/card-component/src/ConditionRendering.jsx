import PropTypes from 'prop-types';

function ConditionalRendering(props){

    if (props.isloggedin){
        return <h1>iam {props.Name}</h1>
    }
    else{
        return <h1>ConditionalRendering is false</h1>
    }
}

ConditionalRendering.propTypes={
    isloggedin :PropTypes.Boolean,
    Name : PropTypes.string,
}


export default ConditionalRendering