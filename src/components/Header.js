import React, { Component } from 'react'
import Form from './Form'

export default class Header extends Component {
  render() {
    return (
        <header className="header">
		<h1>todos</h1>
		<Form></Form>
	</header>
    )
  }
}
