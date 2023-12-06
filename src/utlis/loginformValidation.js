export const checkValidateData = (email,password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
    //const isNameValid = /^[A-Za-z\- ]+$/.test(name);

    if(!isEmailValid) return "Enter a valid Email ID";
    if(!isPasswordValid) return "Password is not Valid";
    //if(!isNameValid) return "Enter a valid Name";

    return null;

};
