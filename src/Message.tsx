function Message(){
    var name='Vishal1';
    if(name)
        return <h1>Hello {name}!!</h1>;
    return <h1>Hello World!!</h1>
}

export default Message;