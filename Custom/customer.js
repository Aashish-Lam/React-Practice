function customer(react,name){
    const domElement= document.createElement(react.type)
    domElement.innerHTML = react.Children
    domElement.setAttribute ('href', react.props.href)
    domElement.setAttribute ('target', react.props.target)
    name.appendChild(domElement)
}   
const react ={
    type: 'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    Children:'Click me to visit google '
}
const name=document.getElementById('root')
customer(react, name)

