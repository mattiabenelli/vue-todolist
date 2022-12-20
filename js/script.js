
const { createApp } = Vue
createApp({
    data() {
        return {
            newTask: '',
            toDoList: [
                {
                    text: 'fare la spesa 1',
                    done: false,
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
            this.toDoList.push(this.newTask);
            this.newTask = '';
        }
    }
}).mount('#app')