import { Fragment, Component,useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css'

const DUMMY_USERS = [
    {id: 'u1', name: 'Jake'},
    {id: 'u2', name: 'Jennie'},
    {id: 'u3', name: 'Marcus'},
    {id: 'u4', name: 'Namjoon'}
]

class UserFinder extends Component {
    constructor (){
        super();
        this.state ={
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }

    }

    searchChangeHandler  (event) {
        this.setState({
            searchTerm: event.target.value
        })

    };

    render (){

        return (
            <Fragment>
                <div className={classes.finder}>
                    <input  type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>

                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }

}


export default UserFinder;