import React, { Component } from 'react';
// import React from "react";
import "./SubmitForm.css";


class SubmitForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            modalOpened: false
        }

        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle () {
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    render () {
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>
                <button className='btn btn-primary' onClick={this.modalToggle}>Sign Up</button>

                <div className={containerClass}>
                    <div className='modal-header'>
                        <p>Sign Up</p>
                    </div>
                    <div className='modal-body'></div>
                    <div className='modal-footer'></div>
                    <button>Sign Up</button>
                </div>

                <div className={coverClass} onClick={this.modalToggle}></div>
            </div>
        )
    }
}


export default SubmitForm;