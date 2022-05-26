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
                this.newObject = { text : this.inputTodo, done : false};
                this.todos.push(this.newObject);
                this.inputTodo = "";
                // console.log(this.todos);
            }
           
        },
        deleteTodo(index){
            this.todos.splice(index,1)

        },
        changeStatus(){
            // if(this.done){
            //     this.done = false;
            // } else{
            //     this.done = true
            // };

            this.done = !this.done

        },
    }    
   
});





