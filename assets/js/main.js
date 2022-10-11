

var Persons = ['tahir', 'samir', 'musa', 'qurban'];



function getUser(){
     let hasUser;
    do {
        var user = prompt('Username daxil edin!!!');
         hasUser = Persons.includes(user) || user == null || user == undefined || user.length == 0;
    if(hasUser){
        alert('bele bir ad movcuddur')
    }

} while (hasUser);

alert('username ugurla elave olundu');



Persons.push(user);
 getUser();
}

getUser();