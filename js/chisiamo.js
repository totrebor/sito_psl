
export default {
    beforeMount() {
        console.log("beforeMount");
        document.getElementById("mn4").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn4").classList.remove('active');
    },
    template: `
<div>chisiamo</div>
`
}
