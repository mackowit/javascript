const user = (name="", age) => {
    userName = name;
    userAge = age;
    
    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'}`);
    }
    return showName;
}

const mieszko = user("Mieszko", 20);
mieszko();