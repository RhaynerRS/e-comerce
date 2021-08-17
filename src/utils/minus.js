import isNode from 'is-node'
export default function Minus(id) {
    if (!isNode) {
        console.log((document.getElementById(id).value))
        document.getElementById(id).value > 1 ? (document.getElementById(id).value = document.getElementById(id).value - 1) : (document.getElementById(id).value = document.getElementById(id).value)
    }
}