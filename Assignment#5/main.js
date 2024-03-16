document.querySelector('button').onclick = function(e){
    e.preventDefault();
    add();
}

function add(){
    console.log("Running add function");
    let TextInput = document.querySelector("#textInput").value.trim();
    let DropInput = document.querySelector("#dropdown").value;

    if (isValidated()) {
        let listItemDiv = document.createElement("div");
        let emoji = document.createElement("span");
        let listItemElement = document.createElement("li");
        let listItemDropdownElement = document.createElement("span");
    
        emoji.textContent ="✔";
        listItemElement.textContent = TextInput;
        listItemDropdownElement.textContent = DropInput;

        listItemDiv.append(emoji,listItemElement,listItemDropdownElement);
        
        document.querySelector("#list-items").appendChild(listItemDiv);

        document.querySelector("#textInput").value = "";
        document.querySelector("#dropdown").value = "";

        emoji.classList.add("mr-3")
        listItemElement.classList.add("inline-block");
        listItemDiv.classList.add("my-2", "border-b-2");

        switch (DropInput) {
            case "fruit":
                listItemDropdownElement.classList.add("rounded-md","bg-orange-400","px-1","ml-2","text-white")
                break;
            case "Vagetables":
                listItemDropdownElement.classList.add("rounded-md","bg-yellow-400","px-1","ml-2","text-white")
                break;
            case "dairy":
                listItemDropdownElement.classList.add("rounded-md","bg-gray-400","px-1","ml-2","text-white")
                break;
            default:
                break;
        }
    }else{
        console.log("Invalid inputs");
    }
}

function isValidated(){
    console.log("Running isValidated function");
    let isValid = false;
    let TextInput = document.querySelector("#textInput").value.trim();
    let DropInput = document.querySelector("#dropdown").value;

    if (TextInput.length > 0 && DropInput) {
        isValid = true;
    }
    else{
        document.querySelector("#textInput").classList.add("border-rose-500" , "rounded-md",
        "origin-left", "translate-x-px");
        document.querySelector("#dropdown").classList.add("border-rose-500" , "rounded-md",
        "origin-left", "translate-x-px");
    }
    return isValid;
}