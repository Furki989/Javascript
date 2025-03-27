const TodoList = [{

    name: 'washes',
    dueDate: '2022-12-22'


}, {

    name: 'watch TV',
    dueDate: '2022-12-23'



}];


rendertodolist();                                      // gibt direkt beim starten die Liste an






function rendertodolist() {

    let TodoListHTML = '';

    for(let i = 0; i < TodoList.length; i++) {

        const todo = TodoList[i];
        const name = todo.name;                     // shortcut const {name, dueDate} = todo;  übernimmt den name von todo und speichert es in eine variable name ab
        const date = todo.dueDate;

        const html = `
        <div> ${name} </div>
        <div> ${date} </div>
        <button onClick=" TodoList.splice(${i}, 1);       rendertodolist();      "> Löschen </button> </p> `;                // splice die stelle und dann wieviele gelöscht werden sollen                 
        TodoListHTML += html;
        
    }


    document.querySelector('.divers').innerHTML = TodoListHTML; 


}





function hinzufugen (){


    const hinzu = document.querySelector('.eingabe');
    const name = hinzu.value;

    const dateInput = document.querySelector('.eingabe2');
    const date = dateInput.value;

    TodoList.push({                                   //fügt die beiden werte dem object array hinzu


        name: name,
        dueDate: date

    });
    

    hinzu.value = '';                                       
    rendertodolist();
}


