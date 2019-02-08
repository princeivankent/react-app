import React, { Component } from 'react';

class Task extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {task: 'Eat'},
        {task: 'Think'},
        {task: 'Code'},
        {task: 'Sleep'},
      ],
      task: 'Initial State'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  renderItems() {
    if (this.state.tasks.length === 0) {
      return <div className="alert alert-danger">
        <i className="fa fa-exclamation-circle"></i>&nbsp;
        Sorry!
      </div>
    }
    const tasks = this.state.tasks.map((task, index) => {
      return <li className="list-group-item" key={index}>
        <button className="btn btn-sm btn-danger" onClick={this.removeTask.bind(this, index)}><i className="fa fa-times"></i></button>&nbsp;
          {task.task}
      </li>
    });

    return tasks;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnClick(e) {
    if (e.key === 'Enter') {
      this.setState({
        tasks: this.state.tasks.concat({task: e.target.value}),
      });

      this.setState({task: ''});
    }
  }

  removeTask(index) {
    this.state.tasks.splice(index,1);
    this.setState({tasks: this.state.tasks});
  }

  render() {
    const task = this.state.task;
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="form-group">
              <label><strong>{this.state.task}</strong></label>
              <input type="text" className="form-control" 
              name="task"
              value={task}
              onChange={this.handleChange}
              onKeyPress={this.handleOnClick.bind(this)} />
            </div>
            <ul className="list-group">
              {this.renderItems()}
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Task;