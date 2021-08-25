import isNode from 'is-node'
export default function Filter(id) {
    if (!isNode) { const cat = document.getElementById(id).innerHTML; console.log(cat) }
}