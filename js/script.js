
const { createApp } = Vue
createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'fare la spesa',
                    done: false,
                },
                {
                    text: 'fare la spesa',
                    done: false,
                },
                {
                    text: 'fare la spesa',
                    done: false,
                }
               ]
            
        }
    },
    methods: {
        addTask(){
            
        }
    }
}).mount('#app')