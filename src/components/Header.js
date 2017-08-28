import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import styled from 'styled-components';

import Modal from './Modal/Modal';

const renderField = (field)=>(
	<div className="form-group">
		<label>{field.label}</label>
		<input 
			className="form-control"
			type="text"
			{...field.input}
		/>
		{field.meta.errors}
	</div>
)

const LoginModal = ()=>(
	<Modal>
		{/* <Field/> */}
		<p>Loginnn</p>
	</Modal>
)

const RegisterModal = ()=>(
	<Modal>
		<p>testttt</p>
	</Modal>
)

const RegisterButton = styled.


class Header extends Component{
	render(){
		return(
			<nav className="navbar">
				<div className="navbar-brand">
					<a className="navbar-item" href="http://bulma.io">
						<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
					</a>

					<a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="">
						<span className="icon">
							<i className="fa fa-github"></i>
						</span>
					</a>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								<p className="control">
									<a className="button is-primary modal-button" data-target="modal">
										<span>สมัครมาชิก</span>
									</a>
									
								</p>
							</div>
						</div>
					</div>
				</div>

				<LoginModal/>
				<RegisterModal/>
			</nav>
		)
	}
}	

function validate(){
	const errors = {};
	return errors;
}

export default reduxForm({
	validate,
	form:'HeaderForm'
})(Header);