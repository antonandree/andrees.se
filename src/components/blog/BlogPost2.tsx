const BlogPost2 = () => (
  <>
    <p>
      När jag började min bana som Data Engineer för några år sedan trodde jag att jag hade koll på de nödvändiga filformaten för data – och att det egentligen inte spelade så stor roll vilket man valde.
    </p>

    <p>Oj vad naiv jag var.</p>

    <p>
      De format jag tänkte på var JSON och CSV. Det var dessa jag exponerats för under år av universitetsstudier, där dataseten vanligtvis var relativt små och där det varken fanns några krav på latency, skalbarhet eller kostnadseffektivitet.
    </p>

    <p>
      Förstå mig inte fel – JSON och CSV är fantastiska format som används i en mängd applikationer och dataflöden. De är läsbara, intuitiva och enkla att debugga. Just därför är det inte konstigt att de varit – och fortfarande är – extremt populära.
    </p>

    <p>
      Men de är också textbaserade och radorienterade. Och det är här begränsningarna börjar visa sig när systemen växer.
    </p>

    <h2>Text- och radorienterade filformat</h2>

    <p>
      Som namnet antyder är dessa format både textbaserade och radorienterade – två egenskaper som har stor betydelse för hur data lagras och läses.
    </p>

    <p>
      Textbaserat innebär att varje värde representeras som tecken. Talet 29 lagras exempelvis som tecknen "2" och "9" i UTF-8, inte som ett kompakt binärt heltal. Det gör datan mänskligt läsbar och enkel att inspektera med en vanlig texteditor.
    </p>

    <p>
      Radorienterat innebär att varje post skrivs i sin helhet innan nästa post börjar. Alla attribut i en post ligger samlade bredvid varandra i filen. I radorienterade format sammanfaller därför en fysisk rad med en logisk post.
    </p>

    <p>Om vi exempelvis har en tabell:</p>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>namn</th>
          <th>ålder</th>
          <th>stad</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Anna</td><td>29</td><td>Stockholm</td></tr>
        <tr><td>2</td><td>Erik</td><td>35</td><td>Göteborg</td></tr>
        <tr><td>3</td><td>Sara</td><td>42</td><td>Malmö</td></tr>
      </tbody>
    </table>

    <p>Varje post innehåller alltså all information om en individ.</p>

    <p>Det gör dessa format:</p>
    <ul>
      <li>Enkla att läsa med blotta ögat</li>
      <li>Enkla att transportera mellan system</li>
      <li>Lätta att arbeta med i mindre projekt</li>
      <li>Naturliga i API:er och integrationsflöden</li>
    </ul>

    <p>Men strukturen har också konsekvenser.</p>

    <p>
      Anta att vi bara vill veta vilken stad personen med id 3 bor i. I ett radorienterat format måste systemet:
    </p>

    <ol>
      <li>Läsa poster sekventiellt tills rätt post hittas</li>
      <li>Läsa hela posten</li>
      <li>Parsa alla värden i posten för att extrahera fältet stad</li>
    </ol>

    <p>Även om vi bara är intresserade av ett enda fält måste hela posten parsas.</p>

    <p>Det är obetydligt när vi har tre rader. Det är betydligt mer kostsamt när vi har tre miljarder.</p>

    <p>Begränsningarna blir då tydliga:</p>
    <ul>
      <li>Ingen eller svag schemakontroll</li>
      <li>Ineffektiv lagring (text är större än binär representation)</li>
      <li>Onödig disk-I/O vid analytiska frågor</li>
      <li>Begränsade optimeringsmöjligheter för kolumnorienterade arbetslaster</li>
    </ul>

    <p>Och det är här utvecklingen av mer specialiserade format börjar ta vid.</p>

    <h2>CSV</h2>

    <p>
      CSV (Comma-Separated Values) har funnits i någon form sedan 1970–80-talet, men formaliserades som standard (RFC 4180) först 2005.
    </p>

    <p>Det är egentligen inte mer än en konvention för att representera tabulär data som text.</p>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Extremt enkelt och universellt stöd</li>
      <li>Naturligt för platt, tabulär data</li>
      <li>Lätt att generera från databaser och skript</li>
      <li>Kräver minimal infrastruktur</li>
    </ul>

    <p><strong>Svagheter / Begränsningar:</strong></p>
    <ul>
      <li>Ingen inbyggd schema- eller typinformation</li>
      <li>Saknar stöd för nested eller komplex data</li>
      <li>Känsligt för delimiter-, quoting- och encoding-problem</li>
      <li>Ineffektivt vid stora analytiska arbetslaster</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      CSV är fortfarande fullt rimligt i många sammanhang. Det används ofta vid dataexporter, enklare batchflöden och som ett första staging-lager innan data transformeras vidare. Det är också vanligt i legacy-integrationer där enkelhet och kompatibilitet är viktigare än prestanda.
    </p>
    <p>CSV är inte "fel" – det är bara minimalt. Det löser problemet att representera tabulär data i textform, varken mer eller mindre.</p>

    <h2>JSON</h2>

    <p>
      JSON (JavaScript Object Notation) skapades i början av 2000-talet och blev snabbt standardformatet för datautbyte på webben.
    </p>

    <p>Det är ett textbaserat format för att representera strukturerad data i form av objekt och listor.</p>

    <p>
      Till skillnad från CSV, där kolumnnamn vanligtvis definieras en gång i en header-rad, består JSON av en samling objekt där varje objekt innehåller sina egna fält och fältnamn.
    </p>

    <pre>{`[
  { "id": 1, "namn": "Anna", "ålder": 29, "stad": "Stockholm" },
  { "id": 2, "namn": "Erik", "ålder": 35, "stad": "Göteborg" }
]`}</pre>

    <p>Fältnamnen upprepas för varje objekt, vilket gör formatet självbeskrivande och flexibelt — men innebär också mer lagringsöverhead jämfört med en ren kolumnheader i CSV.</p>

    <p>JSON kan även representera mer komplexa strukturer:</p>

    <pre>{`{
  "id": 1,
  "namn": "Anna",
  "adress": {
    "stad": "Stockholm",
    "postnummer": "11122"
  },
  "intressen": ["löpning", "läsning"]
}`}</pre>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Flexibelt och lättläst</li>
      <li>Stöd för nested och semi-strukturerad data</li>
      <li>Standard i API:er och eventflöden</li>
      <li>Brett stöd i moderna programmeringsspråk</li>
    </ul>

    <p><strong>Svagheter / Begränsningar:</strong></p>
    <ul>
      <li>Fältnamn upprepas – tar onödigt lagringsutrymme</li>
      <li>Ofta implicit eller otydlig schemahantering</li>
      <li>Dyrt att parsa i stor skala</li>
      <li>Inte optimerat för analytisk lagring</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      JSON är idag standard vid API-ingestion, event payloads och loggdata. Det fungerar väl när data behöver vara flexibel och självbeskrivande, särskilt i distribuerade system där flera tjänster kommunicerar med varandra.
    </p>
    <p>JSON är inte ineffektivt per definition – men det är främst designat för transport, inte för storskalig analytisk lagring.</p>

    <h2>XML</h2>

    <p>
      XML (eXtensible Markup Language) standardiserades 1998 och var länge det dominerande formatet för systemintegration, särskilt inom enterprise-miljöer.
    </p>

    <p>Det är ett textbaserat markup-språk där data representeras med start- och sluttaggar.</p>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Tydlig och strikt strukturerad markup</li>
      <li>Schema- och valideringsstöd (XSD)</li>
      <li>Lämpligt för dokumentorienterad data</li>
    </ul>

    <p><strong>Begränsningar:</strong></p>
    <ul>
      <li>Mycket markup – större filer</li>
      <li>Mer komplex struktur</li>
      <li>Högre parser-overhead</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      XML förekommer fortfarande i bank, offentlig sektor och äldre integrationsplattformar. I modern data engineering är det oftast något man hanterar snarare än väljer.
    </p>
    <p>
      Formatet är designat för strikt validering och komplexa integrationskontrakt. I webbaserade API:er och enklare dataflöden har mer kompakta och lättviktiga alternativ som JSON tagit över.
    </p>
    <p>XML är alltså inte utdaterat – men det är optimerat för en annan typ av problem än de flesta moderna dataplattformar fokuserar på.</p>

    <h2>Binära och radorienterade filformat</h2>

    <p>
      Textbaserade format är enkla, läsbara och flexibla. Men de lagrar varje värde som tecken. Fältnamn upprepas, numeriska värden skrivs som text och strukturen innehåller extra syntaktiskt brus. Det gör filerna större och mer resurskrävande att bearbeta än nödvändigt.
    </p>

    <p>
      Att komprimera med exempelvis gzip minskar lagringsstorleken, men förändrar inte representationen. Data är fortfarande text och måste parsas som sådan vid inläsning.
    </p>

    <p>
      När datavolymerna växer uppstår därför behovet av format som representerar data mer kompakt och typmedvetet. Här kommer binära format in i bilden.
    </p>

    <p>
      Istället för att lagra värden som text representeras de direkt i binär form, ofta tillsammans med explicit schema- och typinformation. Resultatet blir mindre filer och effektivare bearbetning.
    </p>

    <h2>Avro</h2>

    <p>
      Apache Avro skapades 2009 inom Hadoop-ekosystemet och är ett binärt, radorienterat format designat för effektivt datautbyte i distribuerade system.
    </p>

    <p>Till skillnad från JSON separerar Avro schemat från själva datarepresentationen.</p>

    <p><strong>Exempel på schema:</strong></p>
    <pre>{`{
  "type": "record",
  "name": "Person",
  "fields": [
    {"name": "id", "type": "int"},
    {"name": "namn", "type": "string"},
    {"name": "ålder", "type": "int"},
    {"name": "stad", "type": "string"}
  ]
}`}</pre>

    <p>
      Själva posterna skrivs sedan binärt enligt detta schema. Det innebär att värden lagras i en kompakt binär representation baserad på sina datatyper – ett heltal lagras som ett faktiskt heltal i binär form, inte som tecken.
    </p>

    <p>
      I Avro-filer är schemat inbäddat i filens header. Den binära datan innehåller endast värdena, i den ordning som definieras i schemat. Fältnamn lagras inte per post — detta är en avgörande skillnad jämfört med JSON.
    </p>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Explicit schema och tydliga datatyper</li>
      <li>Schema lagras en gång per fil</li>
      <li>Kompakt binär representation</li>
      <li>Stöd för schema-evolution</li>
    </ul>

    <p><strong>Svagheter / Begränsningar:</strong></p>
    <ul>
      <li>Inte mänskligt läsbart</li>
      <li>Kräver schemahantering</li>
      <li>Mindre lämpligt för direkt API-respons</li>
      <li>Ej optimerat för storskalig analys</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      Avro är vanligt i eventdrivna system och streamingplattformar, exempelvis tillsammans med Kafka och Schema Registry. Det lämpar sig väl när flera system behöver dela strukturerad data med tydliga kontrakt och lång livslängd.
    </p>
    <p>Avro är i grunden byggt för data pipelines – inte för att öppnas i en texteditor.</p>

    <h2>Protocol Buffers</h2>

    <p>
      Protocol Buffers (Protobuf) utvecklades av Google och publicerades öppet 2008. Det är ett binärt, radorienterat serialiseringsformat designat för effektiv kommunikation mellan system.
    </p>

    <p>
      Till skillnad från Avro lagras inte schemat och värdena i samma fil. I Protobuf definieras strukturen i en separat .proto-fil som både producent och konsument måste känna till i förväg.
    </p>

    <p><strong>Exempel på schema (.proto-fil):</strong></p>
    <pre>{`message Person {
  int32 id = 1;
  string namn = 2;
  int32 alder = 3;
  string stad = 4;
}`}</pre>

    <p>
      Varje fält identifieras via sitt numeriska fältnummer. Schemat definieras i en .proto-fil, lagras separat och inte i datafilerna. Endast värden serialiseras binärt.
    </p>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Mycket kompakt binär representation</li>
      <li>Tydlig och strikt typdefinition</li>
      <li>Snabb serialisering och deserialisering</li>
      <li>Möjlighet att utveckla schemat utan att bryta befintliga system</li>
    </ul>

    <p><strong>Svagheter / Begränsningar:</strong></p>
    <ul>
      <li>Inte mänskligt läsbart</li>
      <li>Schemat lagras separat och måste versionshanteras</li>
      <li>Kräver att producent och konsument delar samma schema</li>
      <li>Ej optimerat för storskalig analys</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      Protobuf lämpar sig väl för service-till-service-kommunikation där låg latens och effektiv nätverkstrafik är viktigt. Det används ofta i mikrotjänstarkitekturer och realtidssystem där tydliga kontrakt mellan system är avgörande.
    </p>
    <p>
      I data engineering-sammanhang förekommer det främst i integrations- och transportlager, snarare än som lagringsformat i datalager eller analysplattformar.
    </p>

    <h2>Binära och kolumnorienterade filformat</h2>

    <p>
      Vi har nu rört oss från textbaserade format till binära format. Det första steget handlade om representation – att gå från mänskligt läsbar text till kompakt, typmedveten binär lagring. Det gav mindre filer, tydligare schema och effektivare serialisering.
    </p>

    <p>Men något är fortfarande oförändrat.</p>

    <p>
      Både JSON, CSV, Avro och Protobuf är radorienterade format. Varje post skrivs i sin helhet innan nästa post börjar. Alla fält för en post ligger samlade bredvid varandra i filen.
    </p>

    <p>
      Det är naturligt när data ska transporteras mellan system. Men det är inte alltid optimalt när data ska analyseras.
    </p>

    <p>
      I analytiska arbetslaster är det vanligt att endast ett fåtal kolumner används i en query. Om vi exempelvis vill beräkna medelålder behöver vi inte läsa namn och stad för varje individ. I ett radorienterat format måste dock hela posten parsas, även om bara ett fält är relevant.
    </p>

    <p>När datamängderna växer blir detta en strukturell begränsning.</p>

    <p>
      Det är här nästa steg i utvecklingen kommer in: kolumnorienterade format.
    </p>

    <p>
      Istället för att lagra data post för post lagras värden kolumnvis. Alla värden för en och samma kolumn ligger samlade tillsammans. Det förändrar hur data kan läsas, komprimeras och bearbetas – och är en av de viktigaste innovationerna i modern data engineering.
    </p>

    <h2>Parquet</h2>

    <p>
      Apache Parquet utvecklades av Twitter och Cloudera och publicerades 2013 som en del av Hadoop-ekosystemet. Det är ett binärt, kolumnorienterat filformat designat för effektiv lagring och analys av stora datamängder.
    </p>

    <p>Till skillnad från radorienterade format skrivs inte varje post i sin helhet. Istället grupperas värden kolumnvis och lagras i block.</p>

    <p>Parquet kombinerar:</p>
    <ul>
      <li>Kolumnorienterad lagring</li>
      <li>Binär, typmedveten representation</li>
      <li>Inbyggd metadata om schema och struktur</li>
    </ul>

    <p>
      Data delas upp i så kallade <em>row groups</em>. Inom varje row group lagras varje kolumn separat, uppdelad i <em>column chunks</em>. Metadata lagras i filens footer.
    </p>

    <p>Det innebär att en läsare kan:</p>
    <ul>
      <li>Läsa endast de kolumner som behövs</li>
      <li>Hoppa över hela row groups baserat på metadata</li>
      <li>Utnyttja kolumnspecifik komprimering</li>
    </ul>

    <p><strong>Varför är detta kraftfullt?</strong></p>
    <p>
      Anta att vi vill beräkna medelålder. I ett radorienterat format måste varje post parsas. I Parquet kan endast kolumnen ålder läsas. Det minskar disk-I/O, minneanvändning och CPU-arbete. Vid stora datamängder är skillnaden dramatisk.
    </p>

    <p><strong>Komprimering:</strong></p>
    <p>
      Eftersom varje kolumn lagras separat innehåller den värden av samma typ. Det gör att numeriska kolumner komprimeras mycket effektivt, upprepade värden kan kodas med exempelvis run-length encoding, och dictionary encoding kan användas för låg-kardinalitetskolumner.
    </p>
    <p>Kolumnvis lagring + kolumnvis komprimering är en central anledning till Parquets effektivitet.</p>

    <p><strong>Styrkor:</strong></p>
    <ul>
      <li>Kolumnorienterad lagring</li>
      <li>Effektiv komprimering per kolumn</li>
      <li>Möjlighet till predicate pushdown</li>
      <li>Inbyggd schema- och metadatahantering</li>
      <li>Optimerat för storskaliga analytiska arbetslaster</li>
    </ul>

    <p><strong>Svagheter / Begränsningar:</strong></p>
    <ul>
      <li>Inte mänskligt läsbart</li>
      <li>Mindre lämpligt för realtids- eller radvisa uppdateringar</li>
      <li>Mer komplext format än CSV/JSON</li>
      <li>Kräver verktyg som förstår formatets struktur</li>
    </ul>

    <p><strong>Rimliga användningsområden:</strong></p>
    <p>
      Parquet är idag standardformat i moderna datalager och data lakes. Det används tillsammans med verktyg som Spark, Snowflake, BigQuery och Athena och lämpar sig särskilt väl för storskalig analys, batch-bearbetning och dataplattformar byggda på objektlagring.
    </p>
    <p>Parquet är i praktiken standardvalet när data ska lagras för analytisk användning.</p>

    <h2>Sammanfattning</h2>

    <p>
      Valet av filformat är inte kosmetiskt – det påverkar lagringskostnad, prestanda, schemahantering och arkitektur.
    </p>

    <table>
      <thead>
        <tr>
          <th>Format</th>
          <th>Representation</th>
          <th>Orientering</th>
          <th>Schema</th>
          <th>Optimerat för</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CSV</td><td>Text</td><td>Rad</td><td>Nej</td><td>Enkel export</td></tr>
        <tr><td>JSON</td><td>Text</td><td>Rad</td><td>Implicit</td><td>API / events</td></tr>
        <tr><td>XML</td><td>Text</td><td>Rad</td><td>Ja (XSD möjligt)</td><td>Enterprise-integrationer</td></tr>
        <tr><td>Avro</td><td>Binär</td><td>Rad</td><td>Ja (inbäddat)</td><td>Data pipelines / streaming</td></tr>
        <tr><td>Protobuf</td><td>Binär</td><td>Rad</td><td>Ja (extern .proto)</td><td>Service-kommunikation</td></tr>
        <tr><td>Parquet</td><td>Binär</td><td>Kolumn</td><td>Ja (inbäddat)</td><td>Analys / datalager</td></tr>
      </tbody>
    </table>

    <p>
      Textbaserade format är enkla och flexibla. Binära format är kompaktare och typmedvetna. Kolumnorienterade format är optimerade för analys.
    </p>

    <p>
      Det finns inget universellt "bästa" format – bara format som är bättre lämpade för olika problem.
    </p>

    <p>
      Som data engineer är det därför avgörande att förstå vad som händer under ytan. Filformat är inte bara hur data ser ut. Det är hur data rör sig, lagras och analyseras.
    </p>

    <p>
      <strong>Up next:</strong> 👉 Table formats (Iceberg / Delta Lake)
    </p>
  </>
);

export default BlogPost2;
