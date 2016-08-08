var $ = require("jquery");

module.exports = {
    setTodos : function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    
    getTodos : function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        
        try{
            
        } catch (e){
            todos = JSON.parse(stringTodos);
        }
        
        return $.isArray(todos) ? todos : [];
    },
    
    filterTodos : function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        
        // Filter todos by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;    
        });
        
        // Filter todos by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        
        // Sort the todos with the non completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }    
        });
        
        return filteredTodos;
    }
};