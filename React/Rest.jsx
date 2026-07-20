import react from 'react';

export default function Rest(...args){

    const [firstnum,secondnum,,fourthnum,...othernums]=args;

    console.log("restnumber",firstnum);
    console.log("restnumber",secondnum);
    console.log("restnumber",fourthnum);
    console.log("other num",othernums);

}
const array=[1,2, 3  ,4,4,56,66767,]

Rest(...array);