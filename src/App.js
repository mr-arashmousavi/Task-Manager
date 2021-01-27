/** @format */

import React, { Component } from 'react';
import Tasks from './components/Task/Tasks';

import {
  Accordion,
  Alert,
  Badge,
  Button,
  Col,
  Container,
} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { ToastContainer, Toast, toast } from 'react-toastify';
class App extends Component {
  state = {
    tasks: [],
    task: '',
    showTask: true,
  };
  handeshowtask = () => {
    this.setState({ showTask: !this.state.showTask });

    if (this.state.showTask == false) {
      toast.info('نمایش کار ها ', {
        position: 'top-right',
        closeOnClick: true,
      });
    } else {
      toast.warn('عدم نمایش کار ها', {
        position: 'top-right',
        closeOnClick: true,
      });
    }
  };

  handeDleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const finlterTask = tasks.filter((t) => t.id !== id);
    this.setState({ tasks: finlterTask });
    const taskIndex = tasks.findIndex((t) => t.id == id);
    const task = tasks[taskIndex];

    toast.error(`کار با نام '${task.name}' با موفقیت  از بین رفت   `, {
      position: 'bottom-left',
      closeButton: true,
      closeOnClock: true,
    });
  };

  handeChengeTask = (event, id) => {
    const { tasks: allTask } = this.state;

    const taskIndex = allTask.findIndex((t) => t.id == id);
    const task = allTask[taskIndex];
    task.name = event.target.value;
    const tasks = [...allTask];
    tasks[taskIndex] = task;
    this.setState({ tasks });
  };

  handelAddTask = () => {
    const tasks = [...this.state.tasks];
    const tassk = {
      id: Math.floor(Math.random() * 100),
      name: this.state.task,
    };
    if (tassk.name !== '' && tassk.name !== ' ' && tassk.name !== '    ') {
      tasks.push(tassk);
      this.setState({ tasks, task: '' });
      toast.success(` کار شما با نام '${tassk.name}' با موفقیت اضافه شد `, {
        position: 'bottom-right',
        closeButton: true,
        closeOnClock: true,
      });
    }
  };

  setTask = (event) => {
    this.setState({ task: event.target.value });
  };

  render() {
    const { tasks, showTask, task } = this.state;

    let taske = null;

    let bageStyle = '';

    if (tasks.length >= 3) bageStyle = 'success';
    if (tasks.length <= 2) bageStyle = 'warning';
    if (tasks.length <= 1) bageStyle = 'danger';

    if (showTask) {
      taske = (
        <Tasks
          alltask={tasks}
          Delete={this.handeDleteTask}
          taskCehged={this.handeChengeTask}
        />
      );
    }
    return (
      <Container fluid className="rtl text-center">
        <Row>
          <Col>
            <Alert variant="info">
              <h2>مدیریت وظایف روزانه </h2>
            </Alert>
            <Alert variant="info">
              تعداد کار هdddا
              <Badge pill variant={bageStyle}>
                {tasks.length}
              </Badge>
              میباشید
            </Alert>
          </Col>
          <Col>
            <Form onSubmit={(event) => event.preventDefault()}>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="کارت چی هست ؟"
                    onChange={this.setTask}
                    value={this.state.task}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handelAddTask}
                    className="fa fa-plus-square"
                  />
                </Col>
                <Col>
                  <Button
                    variant={showTask ? 'info' : 'danger'}
                    onClick={this.handeshowtask}
                    className={showTask ? 'fa fa-eye' : 'fa fa-eye-slash'}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col variant="info" style={{ backgroundColor: '#151B48' }} xs={6}>
            {taske}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    );
  }
}

export default App;
