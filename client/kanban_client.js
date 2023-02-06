/*
File Name:   kanban_client.js
Project:     Kanban of Oz
Authors:     Oussama Zaoui, 8807150
Date:        January 31, 2023
Description: This file contains the javascript functionality
             for the online Kanban client.
*/



/* --------------- FUNCTIONS ----------------------------------------------- */

/*
* FUNCTION : createHomepage
* DESCRIPTION   : creates a homepage for the online kanban board that
                  provides the user a text box to enter their userID and
                  a button to create a new account
* PARAMETERS    : none
* RETURNS       : nothing
*/
const createHomepage = () => {

    // creates welcome message
    const welcomeMessage = document.createElement("p");
    welcomeMessage.id = "welcome";
    welcomeMessage.className = "welcome";
    welcomeMessage.innerText = "A visual project management tool that:";
    
    // creates unordered list
    const kanbanBenefits = document.createElement("ul");
    kanbanBenefits.id = "kanbanBenefits";
    kanbanBenefits.className = "welcome";
    const benefits = ['boosts productivity', 'improve performance', 'tracks tasks and resources', 'enables collaboration and streamlines processes'];
    benefits.forEach(function (benefits) {
        const benefit = document.createElement('li');
        benefit.textContent = benefits;
        kanbanBenefits.appendChild(benefit);
    });
    
    // creates prompt message
    const instructionMessage = document.createElement("p");
    instructionMessage.id = "enterName";
    instructionMessage.className = "prompt";
    instructionMessage.innerText = "Please enter your user ID to begin:";

    // creates user name text box
    const userName = document.createElement("input");
    userName.type = "text";
    userName.id = "fullName";
    userName.name = "EnteredName";

    // creates a submit button
    const submitUser = document.createElement("input");
    submitUser.type = "submit";
    submitUser.value = "ENTER";
    submitUser.id = "begin";
    submitUser.className = "submitButton";

    // sets the onclick event behaviour to validate the name
    submitUser.onclick = (e) => {
        // removes any white spaces around the entered name
        const name = document.getElementById("fullName").value.trim();

        // validates full name
        if (!isNameValid(name)) {
                // displays error message
                document.getElementById("error").className = "error-text";}
        else {
            // removes elements from the page
            document.getElementById("welcome").remove();
            document.getElementById("kanbanBenefits").remove();
            document.getElementById("enterName").remove();
            document.getElementById("fullName").remove();
            document.getElementById("begin").remove();
            document.getElementById("newUserButton").remove();
            document.getElementById("error").remove();
            
            // creates the task selection
            submitUserID(name);

            document.body.appendChild(createDropdownMenu());
        }
    }

    // creates a "new user" button
    const newUser = document.createElement("input");
    newUser.id = "newUserButton";
    newUser.type = "submit";
    newUser.value = "New User?";
    newUser.className = "newUserButton";

    // creates an error message prompt
    const error = document.createElement("p");
    error.id = "error";
    error.innerText = "Please enter a name.";
    error.className = "invisible";
    
    // appends homepage elements
    document.body.appendChild(welcomeMessage);
    document.body.appendChild(kanbanBenefits);
    document.body.appendChild(instructionMessage);
    document.body.appendChild(userName);
    document.body.appendChild(submitUser);
    document.body.appendChild(error);
    document.body.appendChild(newUser);
}



/*
* FUNCTION : isNameValid
* DESCRIPTION : validates the content of the fullName textbox, ensuring a name was entered
* PARAMETERS : name : the content of the fullName textbox
* RETURNS : bool : true if name entered is valid, false otherwise
*/ 
const isNameValid = (name) => name.length > 0;



/*
* FUNCTION      : createDropdownMenu
* DESCRIPTION   : creates a dropdown menu that allows the user to select a
*                 task from a list of 6 options
* PARAMETERS    : nothing
* RETURNS       : taskDropdown, the new dropdown menu
*/
const createDropdownMenu = () => {
    // creates task dropdown menu
    const taskDropdown = document.createElement("select");
    
    // creates blank option
    const blankOption = document.createElement("option");
    blankOption.innerText = "";
    
    // creates dropdown option
    const firstOption = document.createElement("option");
    firstOption.innerText = "Summary";
    
    // creates dropdown option
    const secondOption = document.createElement("option");
    secondOption.innerText = "Backlog";

    // creates dropdown option
    const thirdOption = document.createElement("option");
    thirdOption.innerText = "To Do";

    // creates dropdown option
    const fourthOption = document.createElement("option");
    fourthOption.innerText = "Ongoing";

    // creates dropdown option
    const fifthOption = document.createElement("option");
    fifthOption.innerText = "Done";

    // creates dropdown option
    const sixthOption = document.createElement("option");
    sixthOption.innerText = "Contributors";

    // adds dropdown menu options
    taskDropdown.options.add(blankOption, 0);
    taskDropdown.options.add(firstOption, 1);
    taskDropdown.options.add(secondOption, 2);
    taskDropdown.options.add(thirdOption, 3);
    taskDropdown.options.add(fourthOption, 4);
    taskDropdown.options.add(fifthOption, 5);
    taskDropdown.options.add(sixthOption, 6);

    // returns the new dropdown menu
    return taskDropdown;
}



/*
* FUNCTION      : submitUserID
* DESCRIPTION   : creates a form that submits the user's name
* PARAMETERS    : userName : the previously validated user name
* RETURNS       : nothing
*/
const submitUserID = async (userID) => {
    
    // defines JSON data
    const body = {
        "userID": userID
    };

    await fetch("/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};



/*
Name		:	createNewUser
Parameters	:	none
Returns		:	nothing
Purpose		:	
*/
function createNewUser() {
    
    // generates randomly generated 36 character long v4 UUID
    let newUserUuid = self.crypto.randomUUID();

    // 
}

/* ------------------------------------------------------------------------- */


/* --------------- RUNTIME ------------------------------------------------- */

// generates homepage
createHomepage();

/* ------------------------------------------------------------------------- */