var Person = function(firstAndLast) {

    //private variables
    let firstName="";
    let lastName="";
  
    // Complete the method below and implement the others similarly
    this.getFullName = function()  {return firstName + " " + lastName;};
    this.getFirstName = function() {return firstName;};
    this.getLastName = function() {return lastName;};
    this.setFirstName = function(str) {firstName = str; return str };
    this.setLastName = function(str) {lastName = str; return str };
    this.setFullName = function(str) {
                            var names = str.split(' ');
                            this.setFirstName(names[0]);
                            this.setLastName(names[1]);
                            return this.getFullName();
                        };
    
    return this.setFullName(firstAndLast);
  
  };
  
  // Unit tests
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName()); // Bob Ross
  console.log(bob.getFirstName()); // Bob
  console.log(bob.getLastName());  // Ross
  
  