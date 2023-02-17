
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn3").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn3").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
        <div class="col-11 text-center">
            <i class="bi-wrench-adjustable top-icons-psl"></i>
        </div>
    </div>
    <div class="row fs-4 mb-4">
        <div class="col-11">
            <p class="fs-3 title-text-psl"><b>Download Software assistenza remota</b></p>
            <p>Piattaforma <b>Microsoft Windows</b> <a href="https://logins.livecare.net/liveletexecustomunified/0G7BJV5WM7SVPJ1Z" target="_blank">DOWNLOAD</a></p>
            <p>Piattaforma <b>OSX</b> <a href="https://www.progettosl.eu/support/livelet160000.dmg" target="_blank">DOWNLOAD</a></p>
            <p class="text-psl fs-3 mt-5"><b>Download Software assistenza remota DWS</b></p>
            <p>Piattaforma <b>DWS Microsoft Windows</b> <a href="https://www.dwservice.net/download/dwagent_x86.exe" target="_blank">DOWNLOAD</a></p> 
            <p>Piattaforma <b>DWS Linux</b> <a href="https://www.dwservice.net/download/dwagent.sh" target="_blank">DOWNLOAD</a></p> 
            <p>Piattaforma <b>DWS Mac OS</b> <a href="https://www.dwservice.net/download/dwagent_x86.dmg" target="_blank">DOWNLOAD</a></p> 
            <p>Piattaforma <b>DWS Raspberry</b> <a href="https://www.dwservice.net/download/dwagent.sh" target="_blank">DOWNLOAD</a></p> 
            <p class="text-psl fs-3 mt-5"><b>Altro</b></p>
            <p>Area riservata <a href="https://www.progettosl.eu/support/private/index.html" target="_blank">ENTRA</a></a></p>
        </div>
    </div>
</div>    
`
}
