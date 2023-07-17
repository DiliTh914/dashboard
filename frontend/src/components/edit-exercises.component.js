import React, {Component} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import withRouter from "./withRouter";


class EditExercise extends Component {
    constructor(props) {
        super(props);

        console.log("location");
        console.log(this.props);


        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        let params = new URLSearchParams(window.location.search)
        console.log(params);

        console.log("location2");
        console.log(this.props.id);

        axios.get("http://localhost:5000/exercises/" + this.props.params.id)
            .then(res => {
                console.log(res.data);
                if (res.data) {
                    this.setState({
                        username: res.data.username,
                        description: res.data.description,
                        duration: res.data.duration,
                        date: new Date(res.data.date),
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

        axios.put("http://localhost:5000/exercises/"+this.props.match.params.id, exercise)
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
                <h3>Edit exercise log</h3>
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
                        <input type="submit" className="btn btn-primary" value="Edit Exercise log" onChange={this.onSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditExercise);