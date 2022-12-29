
export default {
    beforeMount() {
        console.log("beforeMount");
        document.getElementById("mn3").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn3").classList.remove('active');
    },
    template: `
<div>assistenza</div>
`
}
