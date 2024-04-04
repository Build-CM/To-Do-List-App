//Immediately Invoked Function Expression(IIFE)
(() => {
    //state variables
    let toDoListArray =[];
    //ul variables
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    //event Listeners
    form.addEventListener("submit", (e)=>{
        //prevent default behavior . Page reload
        e.preventDefault();
        //give item a unique id
        let itemId = String(Date.now());
        //get/assign input value
        let toDoItem = input.value;
        //pass ID and item into functions
        additemToDOM(itemId, toDoItem)
        addItemToArray(itemId, toDoItem);
        //clear the input box. (This is the default behavior but we got rid of that)
        input.value = "";
    });

    //functions
    function additemToDOM(itemId, toDoItem){
        //create a li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        //add toDoItem to li
        li.innerText = toDoItem;
        //add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem){

        toDoListArray.push({itemId,toDoItem});
        console.log(toDoListArray);
    }
    
    function removeItemFromDOM(id){
        //get the list Item by data ID
        var li = document.querySelector('[data-id="' + id + '"]');
        //remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id){
        //create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }

})();
