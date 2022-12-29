
export default {
    beforeMount() {
        console.log("beforeMount");
        document.getElementById("mn5").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn5").classList.remove('active');
    },
    template: `
<div>privacy</div>
`
}
