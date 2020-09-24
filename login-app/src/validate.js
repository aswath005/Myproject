export default function validate(values){
    let errors = {};

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
    if(!values.email) {
        errors.email = "email is required !!";
    } else if(!pattern.test(values.email)){
        errors.email = "invalid email !!";
    }
 
    if(!values.password){
        errors.password = "password is required !!";
    } else if (values.password.length < 7) {
        errors.password = "password need to be atleast 8 characters !";
    } 

    return errors;
} 