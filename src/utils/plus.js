import isNode from 'is-node'
export default function Plus(id) {
    if (!isNode) {
        console.log((document.getElementById(id).value))
        document.getElementById(id).value<10 ? (document.getElementById(id).value++ ) : (document.getElementById(id).value = document.getElementById(id).value)
    }
}