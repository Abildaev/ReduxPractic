import React from "react";
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/action";
import {Alert} from "./Alert";



class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state;

        if(!title.trim()) {
            return this.props.showAlert('Поле не может быть пустым')
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState({title: ''});

    }

    changeInputHandler = event => {
        this.setState(prev => ({
            ...prev,
            ...{[event.target.name]: event.target.value}
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input type="text" className="form-control" id="title" value={this.state.title}
                           onChange={this.changeInputHandler} name="title"/>
                </div>
                <button type="submit" className="btn btn-success mb-3">Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost,showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(null, mapDispatchToProps)(PostForm);