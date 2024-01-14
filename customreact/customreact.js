function customRender(mainContainer,reactEle){
    const domEle=document.createElement(reactEle.type)
    domEle.innerHTML=reactEle.children
    for(const prop in reactEle.props){
        domEle.setAttribute(prop,reactEle.props[prop])
    }
    mainContainer.appendChild(domEle)
}
const reactEle={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click me to Get Your Destination"
}
const mainContainer=document.querySelector("#root")
customRender(reactEle,mainContainer)