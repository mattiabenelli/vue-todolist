
const { createApp } = Vue
createApp({
    data() {
        return {
            newTask: '',
            toDoList: [
                {
                    text: 'fare la spesa 1',
                    done: true,
                },
                {
                    text: 'fare la spesa 2',
                    done: false,
                },
                {
                    text: 'fare la spesa 3',
                    done: false,
                }
               ]
            
        }
    },
    methods: {
        deleteTask(index){
            this.toDoList.splice(index, 1)
        },
        addTask(){
            const item ={
                text:this.newTask,
                done: false
            }
            this.toDoList.push(item);
            this.newTask = '';
        },
        doneUndone(index){
            if(this.toDoList[index].done == true){
                this.toDoList[index].done = false
            }
            else if(this.toDoList[index].done == false){
                this.toDoList[index].done = true
            }
        }
    }
}).mount('#app')