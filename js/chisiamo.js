
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
<div class="container-d-flex">
    <div class="row mb-0">
        <i class="bi-buildings text-center" style="font-size: 4.0rem; color: #3F7EBE;"></i>
    </div>
    <div class="row fs-6 mb-4">
        <p class="text-psl fs-3"><b>Una rete di professionisti</b></p>
        <p>Il gruppo nasce nel 2013 a seguito di un accordo tra <b>LEICON di Serenella Saccon</b> e <b>Softel di Ferrario Giorgio</b>.</p>
        <p>Spinte dalla richiesta di <b>consulenza specialistica</b> le due strutture hanno costruito la <b>rete di imprese</b> collegando ad essa le competenze di una variegata rete di consulenti. L'obbiettivo è quello di costruire ogni servizio scomponendolo in <b>specifici compiti specialistici</b> che vengono poi affidati al singolo professionista che può dedicarsi così alla propria naturale attività.</p>
        <p>Ogni componente della rete riesce in questo modo a fornire un servizio pari a quello di strutture più articolate ad un <b>costo contenuto</b> grazie ad un'infrastruttura condivisa.</p>
        <p>La rete di consulenti oggi si è espansa arrivando ad includere anche <b>professionisti</b> lontani dal mondo dell'infomatica permettendo alla struttura di offrire servizi diversificati.</p>
        <p>Nel 2021 <b>Progettosl</b> meglio conosciuta come PSL è diventata un'<b>insegna</b> di LEICON di Serenlla Saccon</p>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col col-lg-1">
            <img src="img/logo_leicon.jpg" class="img-fluid" style="width: 200px; border: solid 1px;" alt="LEICON di Serenella Saccon">
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-9">
            <p class="text-psl fs-3"><b>LEICON di Serenella Saccon</b></p>
            <p>Leicon <b>nasce nel 2001</b> fondendo competenze inerenti la <b>consulenza giuridica informatica</b>, lo sviluppo di software, la fornitura di software e hardware, la fornitura di servizi e avvalendosi dell'operato di personale tecnico di provata esperienza. Durante gli anni successivi acquisice l'<b>importazione e la distribuzione di software</b>, in particolare in qualità di distributore sul territorio italiano del software <b>antivirus F-Prot</b>, tramite la rete di rivenditori presenti su tutto il territorio italiano.</p>
            <ul>
                <li><b>2001</b> fondazione ad opera della <b>Dottoressa Serenella Saccon</b>;</li>
                <li><b>2009</b> crea la società <b>progettosl s.r.l.</b> con cui collabora per lo sviluppo delle competenze tecniche separando la consulenza giuridica dalla realizzazione delle soluzioni software ed hardware;</li>
                <li><b>2013</b> con la collaborazione di <b>Softel crea progettosl rete di imprese</b> di cui diviene la capofila;</li>
                <li><b>2021</b> con la collaborazione di "<b>ArcheOS Tec di Mazzucchi Alessandra</b>" crea il marchio progettosl dedicato all'informatica.</li>
                <li><b>2021</b> finananzia il <b>progetto MAPOD4D</b> in collaborazione con <b>ROBDEV di Roberto Taglioretti</b>.</li>
            </ul>
        </div>
    </div>
</div>
`
}
