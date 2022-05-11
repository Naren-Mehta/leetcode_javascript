
const object = {
    message: 'Good Morning',
    getMessage: 'Good Afternoon!',
    getMessage(){
        const message = 'Good Evening!';
        return this.message;
    }
};

console.log(object.getMessage());