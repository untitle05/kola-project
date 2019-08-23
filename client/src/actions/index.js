export const add = (value) => {
    console.log('value',value)
    return {
        type: "ADD",
        value: value 
    }
}