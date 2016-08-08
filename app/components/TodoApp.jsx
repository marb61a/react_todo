var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState : function(){
        return {
            showCompleted : false,
            searchText : '',
            todos : TodoAPI.getTodos()
        };
    },
    
    componentDidUpdate : function(){
        TodoAPI.setTodos(this.state.todos);
    },
    
    handleAddTodo : function(text){
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    id : uuid,
                    text : text,
                    completed : false,
                    createdAt: moment().unix(),
                    completedAt : undefined
                }
            ]    
        });  
    },
    
    handleSearch : function(showCompleted, searchText){
        this.setState({
           showCompleted : showCompleted,
           searchText: searchText.toLowerCase()
        });
    }
});

module.exports = TodoApp;