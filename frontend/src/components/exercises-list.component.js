import React, { Component } from "react";
import axios from "axios";
import Exercise from "./exercise.component";

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        }
    }

    deleteExercise(id) {
        axios.delete("http://localhost:5000/exercises/" + id)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));

        this.setState({
            exercises: this.state.exercises.filter(element => element._id !== id)
        });
    }

    exerciseList() {
        return this.state.exercises.map(exercise => {
            return <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id}/>
        })
    }

    componentDidMount() {
        axios.get("http://localhost:5000/exercises/")
            .then(res => {
                console.log("exercises");
                console.log(res.data);
                if (res.data && res.data.length > 0) {
                    this.setState({
                        exercises: res.data
                    })
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thread-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        );
    };
}