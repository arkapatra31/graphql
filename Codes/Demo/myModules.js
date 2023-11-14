const myMessage = "Message from myModules";
const name = "Arka";
const id = "31";

const getGreeting = (name) => {
    return `Welcome ${name}`
}

//Default export 
//Named Export
export { myMessage,getGreeting,name,id as default }