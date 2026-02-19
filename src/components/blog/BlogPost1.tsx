const BlogPost1 = () => (
  <>
    <h2>Data warehouses och deras begränsningar</h2>

    <p>
      Data warehouses har under lång tid haft stor framgång och varit den grundpelare som data- och analysavdelningar lutat sig mot. De har förenklat resan från rådata till produktionsredo analys genom att:
    </p>

    <ul>
      <li>Samla data på ett och samma ställe</li>
      <li>Skapa en gemensam "source of truth"</li>
      <li>Möjliggöra samarbete mellan olika roller</li>
      <li>Tydliga scheman och governance</li>
      <li>Optimera data för analytiska frågor</li>
    </ul>

    <p>Kort sagt: de gjorde data hanterbart.</p>

    <p>Men trots alla fördelar har det alltid funnits delar som skavt.</p>

    <p>
      Data warehouses är i grunden byggda kring relationella tabeller och strikt schema-hantering. Det ger stabilitet — men också friktion. Schemaförändringar kan vara krångliga och kostsamma, och det krävs ofta omfattande modellering innan data ens kan börja användas.
    </p>

    <p>
      De är också historiskt designade för batch-ingestion. Data laddas i intervaller, transformeras i pipeline-steg och blir tillgänglig först när hela flödet är klart. Realtids- eller near-realtime-analys blir därför både svårt och dyrt att implementera.
    </p>

    <p>Med dessa begränsningar i åtanke började en ny idé ta form.</p>

    <h2>Data lakes – ett flexibelt alternativ</h2>

    <p>Data lakes introducerades som en motreaktion mot data warehousens begränsningar.</p>

    <p>
      Istället för att lagra data i strukturerade databastabeller började man lagra den direkt i objektlagring, exempelvis i AWS S3 eller Azure Blob Storage, ofta i sitt ursprungliga format — oavsett om datan var strukturerad, semistrukturerad eller helt ostrukturerad.
    </p>

    <p>Kärnan var flexibilitet.</p>

    <p>
      Man behövde inte längre modellera allt i förväg. Data kunde laddas direkt i sitt ursprungliga format, och analyseras senare när behov uppstod.
    </p>

    <p>Detta möjliggjorde:</p>

    <ul>
      <li>Snabbare time-to-insight</li>
      <li>Stöd för fler datatyper</li>
      <li>Lägre lagringskostnader</li>
      <li>En tydlig separation mellan lagring och beräkning</li>
    </ul>

    <p>Men flexibiliteten kom med en baksida.</p>

    <p>
      Att inte definiera scheman i förväg innebär inte att behovet av struktur försvinner. Det flyttas istället till senare i processen, ofta till analys- eller konsumtionslagret.
    </p>

    <p>
      Att skjuta upp problem är sällan en särskilt bra lösning. Många data lakes utvecklades snabbt till det som ofta kallades "data swamps": ostrukturerade samlingar av filer, med bristande datakvalitet, otydlig metadata och svårhanterliga pipelines.
    </p>

    <p>Man hade vunnit flexibilitet — men tappat kontrollen.</p>

    <h2>Data lakehouse – det bästa av två världar</h2>

    <p>Det stod snart klart att data warehouses och data lakes inte var motsatser, utan komplement.</p>

    <p>
      Data warehouses gav struktur, tillförlitlighet och governance. Data lakes gav flexibilitet, snabbhet och kostnadseffektiv lagring.
    </p>

    <p>
      Behovet av att kombinera dessa egenskaper ledde till framväxten av ett nytt arkitekturmönster: data lakehouse.
    </p>

    <p>Idén var enkel i teorin:</p>

    <p>
      Behåll data lake-lagringens flexibilitet och kostnadsfördelar, men lägg till de egenskaper som gjort data warehouses så värdefulla — såsom scheman, transaktioner, versionshantering och tillförlitlig query-prestanda.
    </p>

    <p>Detta krävde dock något som tidigare saknats.</p>

    <p>Inte nya databaser. Inte nya filformat.</p>

    <p>Utan ett nytt lager ovanpå filformaten.</p>

    <p>Det är här open table formats kommer in i bilden.</p>

    <p>
      <strong>Up next:</strong> 👉 Table formats (Iceberg / Delta Lake)
    </p>
  </>
);

export default BlogPost1;
