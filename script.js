const myApp = new Vue({
    el : "#app",
    data : {
        inputTodo : "",
        newObject : {},
        todos : [

            {
                text : "Fare i compiti",
                done : false
                
            },
            {
                text : "Fare la lavabucato",
                done : true
                
            },
            {
                text : "Stendere",
                done : false
                
            },

        ]
    },
    methods : {
        addTodo(){
            if(this.inputTodo !== ""){
                
                this.newObject = { text : this.inputTodo};
                this.todos.push(this.newObject);
                this.inputTodo = "";
            }
           
        }
    }    
   
});