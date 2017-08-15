import React, { Component } from 'react';

export default class NoteList extends Component{
  renderList () {
    return this.props.notes.map((note) => {
      return (
        <li className="list-group-item note-item" key={note.id}>{note.title}</li>
      )
    })
  }

  render (
    return (
  		<div className="note-list col-md-6">
  			<ul className="list-group">
          {this.renderList}
  			</ul>
  		</div>
  	);
  )
};
