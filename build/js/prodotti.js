

export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn1").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn1").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
        <div class="col-11 text-center">
            <i class="bi-gear-wide-connected top-icons-psl"></i>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col col-lg-2 align-self-center">
            <img src="img/mapod_new_render_scontornato.png" class="img-fluid" style="width: 200px;" alt="MAPOD4D">
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-9">
            <p class="fs-3 title-text-psl"><b>Software FLOSS su misura</b></p>
            
            <p>L'esigenza di <b>costruire o adattare software FLOSS</b> alle proprie necessità richiede una complessa pianificazione e la comprensione delle regole che riguardano il mondo del "software libero".</p>
            
            <p>Progettosl <b>accompagna le "software company"</b> in questo percorso passo a passo: fornendo agli sviluppatori gli strumenti e i concetti essenziali, riorganizzando la struttura di gestione e insegnando i principi dello sviluppo di prodotti FLOSS.</p>
            
            <p>Per i soggetti privi di sviluppatori software interni, progettosl <b>impegna direttamente</b> la propria struttura per lo sviluppo applicativo.</p>
            
            <p><b>Finanziamo e contribuiamo</b> diversi progetti FLOSS per migliorarle le qualità, un esempio è il progetto MAPOD4D "Multiverso di Metaversi" peril
            settore dell'<b>antropologia fisica, argcheologia, storia, arte e cultura</b> qui potete approfondirne la conoscienza <a href="https://www.mapod4d.it" target="_blank">MAPOD4D Website</a>.</p>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col col-lg-2 align-self-center">
            <img src="img/sistemista.jpg" class="img-fluid" style="width: 200px; border: solid 1px;" alt="MAPOD4D">
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-9">
            <p class="fs-3 title-text-psl"><b>Gestione delle reti basate su software FLOSS</b></p>

            <p>La gestione dell'infrastruttura di rete esistente, basata su software FLOSS dall'<b>installazione alla manutenzione</b>, è un'attività che garantisce la <b>sicurezza</b> e la longevità delle infrastrutture di rete.</p>

            <p>Progettosl prende in carico sistemi basati su piattaforme e software FLOSS, sia installati su <b>hardware virtuali</b> (Virtual Private Server) che fisici, per sgravare le strutture operative dalla necessità di aggiornamento continuo del know-how necessario alla <b>gestione</b> dei sistemi basati sui prodotti FLOSS.</p>

            <p>Le attività svolte comprendono: il <b>tuning</b> (messa a punto dei sistemi esistenti), la <b>manutenzione</b> (per mantenere i prodotti aggiornati), la <b>sorveglianza</b> continua con appositi sistemi di segnalazione (per prevenire i malfunzionamenti), la <b>reinstallazione</b> (per uniformare i sistemi) e la pianificazione dell'evoluzione delle infrastrutture.</p>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col col-lg-2 align-self-center">
            <img src="img/progettista.jpg" class="img-fluid" style="width: 200px; border: solid 1px;" alt="MAPOD4D">
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-9">
            <p class="fs-3 title-text-psl"><b>Conversione infrastrutture di rete ai prodotti FLOSS</b></p>
            <p>Il processo di conversione dell'infrastruttura di rete, realizzata con prodotti commerciali in una basata su prodotti FLOSS richiede una puntuale <b>analisi</b> delle esigenze e la definizione di una serie di <b>passi programmati</b> per raggiungere l'<b>obiettivo</b>. La fase analitica generalmente prevede l'attività di <b>"software selection"</b> e eventualmente quella di <b>"hardware selection"</b>.</p>

            <p>La "software selection" FLOSS è realizzata attraverso l'<b>esame dei prodotti</b> software disponibili in modo tale che possano garantire la soddisfazione di un'esigenza con la <b>garanzia</b> di durata ed efficienza e il <b>minimo costo</b>. Oltre a prendere in esame i prodotti, le valutazioni vengono effettuate misurando anche specifici parametri legati alle <b>community</b> che li producono ottenendo alla fine una stima confrontabile che permette di fare una scelta <b>consapevole</b>.</p>

            <p>La "hardware selection" può essere utile per individuare i dispositivi hardware più <b>adatti</b> ai software selezionati, qualora sia necessario espandere l'infrastruttura.</p>

            <p>Progettosl, oltre alle operazioni di <b>conversione (installazione e messa in opera)</b>, gestisce l'<b>istruzione del personale</b>, mettendo a disposizione una serie di <b>corsi</b> per gli operatori e i manager permettendo loro di comprendere i concetti specifici correlati al mondo del software FLOSS. Solo in questo modo è possibile <b>garantire</b> che tutta la struttura aziendale acquisisca la <b>consapevolezza</b> del nuovo approccio.</p>

 
        </div>
    </div>
    <div class="row fs-6 mb-3">
        <div class="col col-lg-2 align-self-center">
            <img src="img/aut_felice.jpg" class="img-fluid" style="width: 200px; border: solid 1px;" alt="MAPOD4D">
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-9">
            <p class="fs-3 title-text-psl"><b>Supporto informatico per i lavoratori autonomi</b></p>
            <p>Con l'adozione di un approccio che preveda l'uso dei software FLOSS, il professionista di ogni settore <b>abbraccia</b> una nuova filosofia che gli permette di <b>ridurre i costi</b> di avvio e di gestione dei propri strumenti informatici. Tendenzialmente, i prodotti FLOSS possono essere utilizzati su dispositivi più datati e permettono anche di <b>ridurre</b> il numero di cicli di sostituzione dell'hardware a parità di tempo trascorso.</p>

            <p>Le attività dedicate ai professionisti prevedono pacchetti di <b>consulenza</b>, servizi, software commerciali (qualora i prodotti FLOSS non soddisfino i requisiti) e hardware per avere un prodotto costruito a propria misura che supplisca a tutte le necessità. Avviata la propria attività si può optare per uno specifico <b>piano di assistenza</b> che permette il supporto continuo (tramite software automatici di sorveglianza) con la prevenzione e risoluzione delle criticità.</p>

            <p>Gli interventi avvengono prevalentemente <b>da remoto</b> riducendo i costi e i tempi di attesa.</p>

            <p>Progettosl comprende nei propri pacchetti diversi <b>componenti calibrati</b> per il proprio lavoro:  l'hardware, la mail aziendale, il backup, i software di protezione dei sistemi, la soveglianza automatica e continua per i malfunzionamenti software e hardware, l'aggiornamento software, le software selection, le hardware selection, l'installazione e manutenzione dei prodotti software e la consulenza per i propri progetti FLOSS.</p>

            <p>Laddove l'approccio FLOSS non può supplire totalmente alle proprie esigenze i pacchetti forniti possono essere anche <b>integrati</b> con prodotti commerciali per ottenere un connubio perfetto.</p>
        </div>
    </div>
</div>
`
}
