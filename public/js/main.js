const deleteBtn = document.querySelectorAll('.fa-trash')//creating a variable and assigning it to a class of trashcan
const item = document.querySelectorAll('.item span')//creating a variable and assigning it to a selection of span tags inside of a parent that has a class of "item"
const itemCompleted = document.querySelectorAll('.item span.completed')//creating a variable and assigning it to a selection of span tags inside of a parent that has a class of "item" but once its completed

Array.from(deleteBtn).forEach((element)=>{//creating an array from our selection and starting a loop
    element.addEventListener('click', deleteItem)//add an event listener to the current item that waits for a click and calls a function called deleteItem
})//close our loop

Array.from(item).forEach((element)=>{//creating an array from our selection and starting a loop for item
    element.addEventListener('click', markComplete)//add an event listener to the current item that waits for a click and calls a function called mark complete
})//close loop

Array.from(itemCompleted).forEach((element)=>{//creating an array from our selection and starting a loop for itemCompleted
    element.addEventListener('click', markUnComplete)//adds an event listen to only items that are completed so that way you can click it to uncomplete it
})//close loop

async function deleteItem(){//declaring an async func
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item to extract the text value ONLY of the specified list item
    try{//starting a try block to do something
        const response = await fetch('deleteItem', {//creates a response var that waits on a fetch to get data from the result of the deleteItem route
            method: 'delete', //sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is JSON
            body: JSON.stringify({//declare the message content being passed, and stringify that content
              'itemFromJS': itemText //setting the content of the body to the inner text of the list item and naming it 'itemFromJS'
            })//closing body
          })//closing the object
        const data = await response.json() //waiting to get JSON back from the server
        console.log(data)//log the result to the console
        location.reload()//reload the page to update what is displaying

    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close catch block
}//end function

async function markComplete(){//declaring an async func
    const itemText = this.parentNode.childNodes[1].innerText//looks inside of the list item to extract the text value ONLY of the specified list item
    try{//starting a try block to do something
        const response = await fetch('markComplete', {//creates a response var that waits on a fetch to get data from the result of the markComplete route
            method: 'put',//setting the CRUD method to "update" for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is JSON
            body: JSON.stringify({//declare the message content being passed, and stringy that content
                'itemFromJS': itemText//setting the content of the body to the inner text of the list item and naming it 'itemFromJS'
            })//closing body
          })//closing the object
        const data = await response.json()//waiting to get JSON back from the server
        console.log(data)//log the result to the console
        location.reload()//reload the page to update what is displaying

    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close catch block
}//end function

async function markUnComplete(){//declaring an async func
    const itemText = this.parentNode.childNodes[1].innerText//looks inside of the list item to extract only the inner text within the list span
    try{//starting a try block to do something
        const response = await fetch('markUnComplete', {//creates a response var that waits on a fetch to get data from the result of the markUnComplete route
            method: 'put',//setting the CRUD method to "update" for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is JSON
            body: JSON.stringify({//declare the message content being passed, and stringy that content
                'itemFromJS': itemText//setting the content of the body to the inner text of the list item and naming it 'itemFromJS'
            })
          })
        const data = await response.json()//waiting to get JSON back from the server
        console.log(data)//log the result to the console
        location.reload()//reload the page to update what is displaying

    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close catch block
}//end function