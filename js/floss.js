
export default {
    beforeMount() {
        console.log("beforeMount");
        document.getElementById("mn2").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn2").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
        <div class="col-11 text-center">
            <i class="bi-file-binary text-center" style="font-size: 4.0rem; color: #3F7EBE;"></i>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col col-lg-9">
            <p class="text-psl fs-3"><b>Cosa significa FLOSS</b></p>
            <p>L' acronimo <b>FLOSS</b> per esteso si legge <b>"Free Libre and Open Source Software"</b>.</p>

            <p>Questo acronimo viene utilizzato per raggruppare il <b>software</b> libero e Open Source in un'unica categoria (<b>libero non significa necessariamente GRATUITO</b>). Per essere "libero" il software deve soddisfare quattro vincoli di <b>libertà</b>, eccoli in breve:</p>
            <ul>
                <li>Libertà di <b>eseguire</b> il software per qualunque scopo</li>
                <li>Libertà di <b>studiare</b> il software e modificarlo in base alle proprie necessità</li>
                <li>Libertà di <b>ridistribuire</b> il software</li>
                <li>Libertà di <b>migliorare</b> il software e di distribuirne i miglioramenti</li>
            </ul>

            <p>Il software Open Source non è sempre "libero" e prima di adottarlo occorre <b>leggere la licenza</b> d'uso e approfondirne gli eventuali vincoli. In generale, comunque, la maggioranza del software Open Source è anche software "libero". Il software FLOSS è particolarmente sicuro in quanto il <b>codice sorgente</b> disponibile permette ad una motlitudine di sviluppatori la correzione di bug e falle di sicurezza.</p>

            <p>Gli sviluppatori che si occupano si software FLOSS sono spesso riuniti in gruppi detti <b>"community"</b> che lavorano coordinando le proprie attività.</p>

            <p>I <b>vantaggi</b> dell'adozione dei prodotti FLOSS in breve sono:</p>
            <ul>
                <li>È <b>adattabile</b> alle proprie esigenze</li>
                <li>È <b>sicuro</b> perchè revisionabile da una moltitudine di sviluppatori</li>
                <li>Le problematiche, quali bug e malfunzionamenti, sono <b>pubbliche</b> così che gli utenti possano esserne sempre a conoscenza</li>
                <li>Ha un <b>formato aperto</b> è quindi più semplice farlo interagire con altri software</li>
                <li>Contribuisce alla creazione di <b>nuovi posti di lavoro</b> specializzati in quanto richiede la consulenza di professionisti preparati</li>
                <li><b>Riduce il divario digitale</b> perchè è accessibile anche a chi non ha grandi disponibilità economiche</li>
                <li>Permette a tutti di contribuire al <b>miglioramento</b> delle applicazioni. Chi non ha specifiche competenze tecniche può contribuire, ad esempio, con: traduzioni, collaudi, o piccole donazioni</li>
            </ul>
       
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-2 text-end">
            <figure class="figure">
                <img src="img/gg3po-newGnu-medium.png" class="img-fluid" style="width: 200px;" alt="GNU">
                <figcaption class="figure-caption text-psl fs-6"><b>GNU <a href="https://www.gnu.org/" target="_blank">website</a>.</b></figcaption>
            </figure>
            <figure class="figure">
                <img src="img/OSI_Standard_Logo_100X130.png" class="img-fluid" style="width: 200px;" alt="OSI">
                <figcaption class="figure-caption text-psl fs-6"><b>OSI <a href="https://opensource.org/" target="_blank">website</a>.</b></figcaption>
            </figure>
            
        </div>
</div>
`
}
