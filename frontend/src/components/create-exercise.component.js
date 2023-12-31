import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/users/")
            .then(res => {
                console.log(res.data);
                if (res.data && res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
            .catch(err => console.log(err));
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        axios.post("http://localhost:5000/exercises/", exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            username: ''
        })

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create new exercise log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label>UserName: </label>
                        <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map((user) =>
                                    <option key={user} value={user}>{user}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className="mb-3">
                        <label>Duration (in minutes): </label>
                        <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration}/>
                    </div>
                    <div className="mb-3">
                        <label>Date: </label>
                        <div>
                            <DatePicker selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" value="Create Exercise log" onChange={this.onSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}