import React, { Component } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';

const baseUrl = 'https://661cc3b1e7b95ad7fa6b0d59.mockapi.io/api/v1/ToDoTask';

class TaskList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(taskList => {
        const tasks = taskList.map(({ _id, ...task }) => ({
          id: _id,
          ...task,
        }));

        this.setState({
          tasks,
        });
      });
  };

  onCreate = text => {
    if (!text) {
      return;
    }
    const newTasks = {
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(newTasks),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
        text,
        done: !done,
    }

    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(updatedTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  onDelete = id => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to delete task');
      }
    });
  };

  render() {
    const updatedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {updatedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TaskList;
