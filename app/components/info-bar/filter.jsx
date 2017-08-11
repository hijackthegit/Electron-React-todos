import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../actions'

import {Menu} from 'semantic-ui-react'


const Filter = ({ active, onClick, name }) => {
    return (
        <Menu.Item active={active} name={name} onClick={e => {
            e.preventDefault()
            onClick()
        }}/>
    );
}

Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterLink
