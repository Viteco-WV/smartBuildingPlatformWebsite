import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Algemene Voorwaarden Infinity Analysis & Consultancy B.V.</h1>
        <div className="prose prose-lg max-w-none [&_p]:mb-5">
          <h2 className="mt-10 font-bold">Artikel 1 - Definities</h2>
          <p>Infinity Analysis & Consultancy B.V., gevestigd te Beverwijk, KvK-nummer 67965660, wordt in deze algemene voorwaarden aangeduid als dienstverlener.</p>
          <p>De wederpartij van dienstverlener wordt in deze algemene voorwaarden aangeduid als opdrachtgever.</p>
          <p>Partijen zijn dienstverlener en opdrachtgever samen.</p>
          <p>Met de overeenkomst wordt bedoeld de overeenkomst tot dienstverlening tussen partijen.</p>

          <h2 className="mt-10 font-bold">Artikel 2 - Toepasselijkheid algemene voorwaarden</h2>
          <p>Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, overeenkomsten en leveringen van diensten of goederen door of namens dienstverlener.</p>
          <p>Afwijken van deze voorwaarden kan alleen als dat uitdrukkelijk én schriftelijk door partijen is overeengekomen.</p>
          <p>De overeenkomst bevat voor dienstverlener steeds inspanningsverplichtingen, geen resultaatsverplichtingen.</p>

          <h2 className="mt-10 font-bold">Artikel 3 - Betaling</h2>
          <p>Facturen moeten binnen 14 dagen na factuurdatum betaald zijn, tenzij partijen hierover schriftelijk andere afspraken hebben gemaakt of op de factuur een andere betaaltermijn vermeld is.</p>
          <p>Betalingen geschieden, zonder enig beroep op opschorting of verrekening, door overschrijving van het verschuldigde bedrag op het door dienstverlener opgegeven bankrekeningnummer.</p>
          <p>Betaalt opdrachtgever een factuur niet binnen de overeengekomen termijn, zal hij een herinnering tegemoet zien. Indien de opdrachtgever na de herinnering de factuur nog niet overeengekomen is, is hij van rechtswege in verzuim. Vanaf dat moment is dienstverlener gerechtigd de verplichtingen op te schorten totdat opdrachtgever aan zijn betalingsverplichtingen heeft voldaan.</p>
          <p>Blijft opdrachtgever in gebreke, dan zal dienstverlener tot invordering overgaan. De kosten met betrekking tot die invordering komen voor rekening van de opdrachtgever. Wanneer opdrachtgever in verzuim is, is hij naast de hoofdsom tevens wettelijke (handels)rente, buitengerechtelijke incassokosten en overige schade verschuldigd aan dienstverlener. De incassokosten worden berekend aan de hand van het “Besluit vergoeding voor buitengerechtelijke incassokosten”.</p>
          <p>In geval van liquidatie, faillissement, beslag of surseance van betaling van de opdrachtgever zijn de vorderingen van dienstverlener op de opdrachtgever onmiddellijk opeisbaar.</p>
          <p>Weigert opdrachtgever zijn medewerking aan de uitvoering van de opdracht door dienstverlener, dan is hij nog steeds verplicht de afgesproken prijs aan dienstverlener te betalen.</p>

          <h2 className="mt-10 font-bold">Artikel 4 - Offertes en aanbiedingen</h2>
          <p>De offerte van dienstverlener is maximaal 2 maanden geldig, tenzij in de offerte een andere termijn van aanvaarding is genoemd. Wordt het aanbod niet binnen die gestelde termijn aanvaard, dan vervalt de offerte.</p>
          <p>Levertijden in offertes zijn indicatief en geven de opdrachtgever bij overschrijding daarvan geen recht op ontbinding of schadevergoeding, tenzij partijen uitdrukkelijk én schriftelijk anders zijn overeengekomen.</p>
          <p>Aanbiedingen en offertes gelden niet automatisch voor nabestellingen. Partijen moeten dit schriftelijk overeenkomen.</p>

          <h2 className="mt-10 font-bold">Artikel 5 - Prijzen</h2>
          <p>De op aanbiedingen, offertes en facturen van dienstverlener genoemde prijzen zijn exclusief btw en eventuele andere overheidsheffingen, tenzij uitdrukkelijk anders vermeld.</p>
          <p>De prijzen van goederen zijn gebaseerd op de op dat moment bekend zijnde kostprijzen. Verhogingen hiervan, die door de dienstverlener niet konden worden voorzien ten tijde van het doen van de aanbieding c.q. het tot stand komen van de overeenkomst, kunnen aanleiding geven tot prijsverhogingen. Echter zal dit schriftelijk gecommuniceerd worden naar de dienstverlener.</p>
          <p>Ten aanzien van de dienstverlening kunnen partijen bij de totstandkoming van de overeenkomst een vaste prijs overeenkomen.</p>
          <p>Indien er geen vaste prijs is overeengekomen, kan het tarief met betrekking tot de dienstverlening worden vastgesteld op grond van de werkelijk bestede uren. Het tarief wordt berekend volgens de gebruikelijke uurtarieven van dienstverlener, geldend voor de periode waarin hij de werkzaamheden verricht, tenzij een daarvan afwijkend uurtarief is overeengekomen.</p>
          <p>Indien geen tarief op grond van de werkelijk bestede uren is afgesproken, wordt voor de dienstverlening een richtprijs afgesproken, waarbij dienstverlener gerechtigd is om hier tot 10% vanaf te afwijken. Indien de richtprijs meer dan 10% hoger uit gaat vallen, dient dienstverlener opdrachtgever tijdig te laten weten waarom een hogere prijs gerechtvaardigd is. Opdrachtgever heeft in dat geval het recht om een deel van de opdracht te laten vervallen, dat boven de richtprijs vermeerderd met 10% uitkomt.</p>
          <p>Administratiekosten worden gerekend bij eenmalige facturen op staffelbasis</p>
          <ul>
            <li>€0 tot €250,- zijn administratiekosten €25,-</li>
            <li>€250,- tot €500,- zijn administratiekosten €12,50</li>
            <li>Boven de €500,- zijn administratiekosten €0,-</li>
          </ul>

          <h2 className="mt-10 font-bold">Artikel 6 - Prijsindexering</h2>
          <p>De bij het aangaan van de overeenkomst overeengekomen prijzen en uurlonen zijn gebaseerd op het op dat moment gehanteerde prijspeil. Dienstverlener heeft het recht de aan opdrachtgever te berekenen vergoedingen jaarlijks per 1 januari aan te passen.</p>
          <p>Aangepaste prijzen, tarieven en uurlonen worden zo spoedig mogelijk medegedeeld aan opdrachtgever.</p>

          <h2 className="mt-10 font-bold">Artikel 7 - Informatieverstrekking door opdrachtgever</h2>
          <p>Opdrachtgever stelt alle informatie die voor de uitvoering van de opdracht relevant is beschikbaar voor dienstverlener.</p>
          <p>Opdrachtgever is verplicht alle gegevens en bescheiden, die dienstverlener meent nodig te hebben voor het correct uitvoeren van de opdracht, tijdig en in de gewenste vorm en op de gewenste wijze ter beschikking te stellen.</p>
          <p>Opdrachtgever staat in voor de juistheid, volledigheid en betrouwbaarheid van de aan dienstverlener ter beschikking gestelde gegevens en bescheiden, ook indien deze van derden afkomstig zijn, voor zover uit de aard van de opdracht niet anders voortvloeit.</p>
          <p>Opdrachtgever vrijwaart dienstverlener voor elke schade in welke vorm dan ook die voortvloeit uit het niet voldoen aan het in het eerste lid van dit artikel gestelde.</p>
          <p>Indien en voor zover opdrachtgever dit verzoekt, retourneert dienstverlener de betreffende bescheiden.</p>
          <p>Stelt opdrachtgever niet, niet tijdig of niet behoorlijk de door dienstverlener verlangde gegevens en bescheiden beschikbaar en loopt de uitvoering van de opdracht hierdoor vertraging op, dan komen de daaruit voortvloeiende extra kosten en extra honoraria voor rekening van opdrachtgever.</p>

          <h2 className="mt-10 font-bold">Artikel 8 - Intrekking opdracht</h2>
          <p>Het staat opdrachtgever vrij om de opdracht aan dienstverlener op elk gewenst moment te beëindigen.</p>
          <p>Wanneer opdrachtgever de opdracht intrekt, is opdrachtgever verplicht het verschuldigde loon en de gemaakte onkosten van dienstverlener te betalen.</p>

          <h2 className="mt-10 font-bold">Artikel 9 - Uitvoering van de overeenkomst</h2>
          <p>Dienstverlener voert de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uit.</p>
          <p>Dienstverlener heeft het recht om werkzaamheden te laten verrichten door derden.</p>
          <p>De uitvoering geschiedt in onderling overleg en na schriftelijk akkoord en betaling van het eventueel afgesproken voorschot.</p>
          <p>Het is de verantwoordelijkheid van opdrachtgever dat dienstverlener tijdig kan beginnen aan de opdracht.</p>

          <h2 className="mt-10 font-bold">Artikel 10 - Contractduur opdracht</h2>
          <p>De overeenkomst tussen opdrachtgever en dienstverlener wordt aangegaan voor onbepaalde tijd, tenzij uit de aard van de overeenkomst iets anders voortvloeit of partijen uitdrukkelijk én schriftelijk anders zijn overeengekomen.</p>
          <p>Indien de opdrachtgever of dienstverlener het contract stop wil zetten, wordt een opzegtermijn van 2 maanden gehanteerd. De stopzetting dient schriftelijk gecommuniceerd te worden.</p>
          <p>Zijn partijen binnen de looptijd van de overeenkomst voor de voltooiing van bepaalde werkzaamheden een termijn overeengekomen, dan is dit nooit een fatale termijn. Bij overschrijding van deze termijn moet opdrachtgever dienstverlener schriftelijk in gebreke stellen.</p>

          <h2 className="mt-10 font-bold">Artikel 11 - Wijziging van de overeenkomst</h2>
          <p>Indien tijdens de uitvoering van de overeenkomst blijkt dat het voor een behoorlijke uitvoering van de opacht noodzakelijk is om de te verrichten werkzaamheden te wijzigen of aan te vullen, passen partijen tijdig en in onderling overleg de overeenkomst dienovereenkomstig schriftelijk aan.</p>
          <p>Indien partijen overeenkomen dat de overeenkomst wordt gewijzigd of aangevuld, kan het tijdstip van voltooiing van de uitvoering daardoor worden beïnvloed. Dienstverlener stelt opdrachtgever hiervan zo spoedig mogelijk op de hoogte.</p>
          <p>Indien de wijziging van of aanvulling op de overeenkomst financiële en/of kwalitatieve consequenties heeft, licht dienstverlener opdrachtgever hierover zo spoedig mogelijk schriftelijk in.</p>
          <p>Indien partijen een vast honorarium zijn overeengekomen, geeft dienstverlener daarbij aan in hoeverre de wijziging of aanvulling van de overeenkomst een overschrijding van dit honorarium tot gevolg heeft.</p>

          <h2 className="mt-10 font-bold">Artikel 12 - Overmacht</h2>
          <p>Een tekortkoming kan de schuldenaar niet worden toegerekend, indien zij niet te wijten aan zijn schuld, noch krachtens wet, rechtshandeling of in het verkeer geldende opvattingen voor zijn rekening komt, zie artikel 6:75 BW. In aanvulling hierop geldt dat een tekortkoming van dienstverlener, in de nakoming van enige verplichting naar de opdrachtgever, niet aan dienstverlener kan worden toegerekend in geval van een voor de dienstverlener onafhankelijke omstandigheid, ook wel force majeure. Bijvoorbeeld ziekte, natuurgeweld, onverwachte overheidsmaatregelen, quarantaines, een epidemie, oorlog, andere belemmeringen of overige onvoorziene omstandigheden.</p>
          <p>Indien zich een situatie als hiervoor bedoeld voordoet als gevolg waarvan dienstverlener niet aan zijn verplichtingen tegenover opdrachtgever kan voldoen, worden die verplichtingen opgeschort zolang dienstverlener niet aan zijn verplichtingen kan voldoen. Indien de bovenstaande situatie zestig kalenderdagen heeft geduurd, hebben partijen het recht de overeenkomst schriftelijk geheel of gedeeltelijk te ontbinden.</p>
          <p>Dienstverlener is in het geval als bedoeld in artikel 12.2 niet gehouden tot vergoeding van enige schade, ook niet als dienstverlener als gevolg van de overmachtstoestand enig voordeel geniet.</p>

          <h2 className="mt-10 font-bold">Artikel 13 - Verrekening</h2>
          <p>Opdrachtgever doet afstand van zijn recht om een schuld aan dienstverlener te verrekenen met een vordering op dienstverlener.</p>

          <h2 className="mt-10 font-bold">Artikel 14 - Opschorting</h2>
          <p>Opdrachtgever doet afstand van het recht om de nakoming van enige uit deze overeenkomst voortvloeiende verbintenis op te schorten.</p>

          <h2 className="mt-10 font-bold">Artikel 15 - Overdracht van rechten</h2>
          <p>Rechten van een partij uit deze overeenkomst kunnen niet worden overgedragen zonder de voorafgaande schriftelijke instemming van de andere partij. Deze bepaling geldt als een beding met goederenrechtelijke werking zoals bedoeld in artikel 3:83 lid 2 BW.</p>

          <h2 className="mt-10 font-bold">Artikel 16 - Verval van de vordering</h2>
          <p>Elk recht op vergoeding van schade veroorzaakt door dienstverlener vervalt in elk geval 12 maanden na de gebeurtenis waaruit de aansprakelijkheid direct of indirect voortvloeit. Hiermee wordt niet uitgesloten het bepaalde in artikel 6:89 BW.</p>

          <h2 className="mt-10 font-bold">Artikel 17 - Garantie</h2>
          <p>Partijen zijn een overeenkomst met een dienstverlenend karakter aangegaan, welke voor Infinity Analysis & Consultancy B.V. enkel een inspanningsverplichting bevat en dus geen resultaatsverplichting.</p>

          <h2 className="mt-10 font-bold">Artikel 18 - Verzekering</h2>
          <p>Opdrachtgever verplicht zich geleverde zaken die noodzakelijk zijn voor de uitvoering van de onderliggende overeenkomst, alsook zaken van dienstverlener die bij opdrachtgever aanwezig zijn en zaken die onder eigendomsvoorbehoud zijn geleverd, adequaat te verzekeren en verzekerd te houden tegen onder andere brand, ontploffings- en waterschade evenals diefstal.</p>
          <p>Opdrachtgever geeft op eerste verzoek de polis van deze verzekeringen ter inzage.</p>

          <h2 className="mt-10 font-bold">Artikel 19 - Aansprakelijkheid schade</h2>
          <p>Dienstverlener is niet aansprakelijk voor schade die voortvloeit uit deze overeenkomst, tenzij dienstverlener de schade opzettelijk of met grove schuld heeft veroorzaakt.</p>
          <p>In het geval dat dienstverlener een schadevergoeding verschuldigd is aan opdrachtgever bedraagt de schade niet meer dan het honorarium.</p>
          <p>Iedere aansprakelijkheid voor schade, voortvloeiende uit of verband houdende met de uitvoering van een overeenkomst, is steeds beperkt tot het bedrag dat in het desbetreffende geval door de gesloten (beroeps)aansprakelijkheidsverzekering(en) wordt uitbetaald. Dit bedrag wordt vermeerderd met het bedrag van het eigen risico volgens de desbetreffende polis.</p>
          <p>De aansprakelijkheidsbeperking geldt ook als dienstverlener aansprakelijk wordt gesteld voor schade die direct of indirect voortvloeit uit het niet deugdelijk functioneren van de door dienstverlener bij de uitvoering van de opdracht gebruikte apparatuur, software, gegevensbestanden, registers of andere zaken.</p>
          <p>Niet uitgesloten is de aansprakelijkheid van dienstverlener voor schade die het gevolg is van opzet of bewuste roekeloosheid van dienstverlener, zijn leidinggevende of ondergeschikten.</p>

          <h2 className="mt-10 font-bold">Artikel 20 - Aansprakelijkheid opdrachtgever</h2>
          <p>In geval een opdracht wordt verstrekt door meer dan één persoon, is ieder van hen hoofdelijk aansprakelijk voor de bedragen die uit hoofde van die opdracht aan dienstverlener verschuldigd zijn.</p>
          <p>Wordt een opdracht middellijk of onmiddellijk verstrekt door een natuurlijke persoon namens een rechtspersoon, dan kan deze natuurlijke persoon tevens in privé opdrachtgever zijn. Daarvoor is vereist dat deze natuurlijke persoon beschouwd kan worden als de (mede)beleidsbepaler van de rechtspersoon. Bij wanbetaling door de rechtspersoon is de natuurlijke persoon dus persoonlijk aansprakelijk voor de betaling van de declaratie, onverschillig of deze, al dan niet op verzoek van opdrachtgever, ten name van een rechtspersoon dan wel ten name van opdrachtgever als natuurlijk persoon of hen beiden is gesteld.</p>

          <h2 className="mt-10 font-bold">Artikel 21 - Vrijwaring</h2>
          <p>De opdrachtgever vrijwaart dienstverlener tegen alle aanspraken van derden, die verband houden met de door dienstverlener geleverde goederen en/of diensten.</p>

          <h2 className="mt-10 font-bold">Artikel 22 - Klachtplicht</h2>
          <p>Opdrachtgever is verplicht klachten over de verrichte werkzaamheden dan wel direct telefonisch, maar in ieder geval schriftelijk te melden aan dienstverlener. De klacht bevat een zo gedetailleerd mogelijke omschrijving van de tekortkoming, zodat dienstverlener in staat is hierop adequaat te reageren.</p>
          <p>Een klacht kan er in ieder geval niet toe leiden, dat dienstverlener gehouden kan worden om andere werkzaamheden te verrichten dan zijn overeengekomen.</p>

          <h2 className="mt-10 font-bold">Artikel 23 - Eigendomsvoorbehoud, opschortingsrecht en retentierecht</h2>
          <p>De bij opdrachtgever aanwezige zaken en geleverde zaken en onderdelen blijven eigendom van dienstverlener totdat opdrachtgever de gehele afgesproken prijs heeft betaald. Tot die tijd kan dienstverlener zich beroepen op zijn eigendomsvoorbehoud en de zaken terugnemen.</p>
          <p>Indien de overeengekomen vooruit te betalen bedragen niet of niet op tijd worden voldaan, heeft dienstverlener het recht om de werkzaamheden op te schorten totdat het overeengekomen deel alsnog is voldaan. Er is dan sprake van schuldeisersverzuim. Een verlate levering kan in dat geval niet aan dienstverlener worden tegengeworpen.</p>
          <p>Dienstverlener is niet bevoegd de onder zijn eigendomsvoorbehoud vallende zaken te verpanden noch op enige andere wijze te bezwaren.</p>
          <p>Indien zaken nog niet zijn geleverd, maar de overeengekomen voortuitbetaling of prijs niet conform afspraak is voldaan, heeft dienstverlener het recht van retentie. De zaak wordt dan niet geleverd totdat opdrachtgever volledig en conform afspraak heeft betaald.</p>
          <p>In geval van liquidatie, insolventie of surseance van betaling van opdrachtgever zijn de verplichtingen van opdrachtgever onmiddellijk opeisbaar.</p>

          <h2 className="mt-10 font-bold">Artikel 24 - Intellectueel eigendom</h2>
          <p>Tenzij partijen schriftelijk anders zijn overeengekomen, behoudt dienstverlener alle intellectuele absolute rechten (waaronder auteursrecht, octrooirecht, merkenrecht, tekeningen- en modellen-recht, etc.) op alle ontwerpen, tekeningen, geschriften, dragers met gegevens, software of andere informatie, offertes, afbeeldingen, schetsen, modellen, maquettes, etc.</p>
          <p>De genoemde intellectuele absolute rechten mogen niet zonder schriftelijke toestemming van dienstverlener worden gekopieerd, aan derden getoond en/of ter beschikking gesteld of op andere wijze worden gebruikt.</p>
          <p>Opdrachtgever verplicht zich tot geheimhouding van de door dienstverlener aan hem ter beschikking gestelde vertrouwelijke informatie. Onder vertrouwelijke informatie wordt in ieder geval verstaan datgene waarop dit artikel betrekking heeft, alsmede de bedrijfsgegevens. Opdrachtgever verplicht zich zijn personeel en/of derden die betrokken zijn bij de uitvoering van deze overeenkomst, een schriftelijke geheimhoudingsplicht op te leggen van de strekking van deze bepaling.</p>
          <p>Data welke wordt vergaard uit gebouw gebonden installaties van opdrachtgever blijven te allen tijde eigendom van opdrachtgever. Dienstverlener mag tenzij anders overeengekomen de data van opdrachtgever gebruiken voor benchmark doeleinden.</p>

          <h2 className="mt-10 font-bold">Artikel 25 - Geheimhouding</h2>
          <p>Ieder der partijen houdt de informatie die hij, in welke vorm dan ook, van de andere partij ontvangt en alle andere informatie betreffende de andere partij waarvan hij weet of redelijkerwijs kan vermoeden dat deze geheim of vertrouwelijk is, dan wel informatie waarvan hij kan verwachten dat de verspreiding daarvan de andere partij schade kan berokkenen, geheim en neemt alle nodige maatregelen om te waarborgen dat zijn personeel de genoemde informatie ook geheimhoudt.</p>
          <p>De in het eerste lid van dit artikel genoemde geheimhoudingsplicht geldt niet voor informatie:</p>
          <ul>
            <li>die op het moment dat de ontvanger deze informatie ontving al openbaar was of nadien openbaar is geworden zonder een schending door de ontvangende partij van een op hem rustende geheimhoudingsplicht</li>
            <li>waarvan de ontvangende partij kan bewijzen dat deze informatie al in zijn bezit was op het moment van verstrekken door de andere partij</li>
            <li>die de ontvangende partij van een derde heeft ontvangen waarbij deze derde gerechtigd was deze informatie aan de ontvangende partij te verstrekken</li>
            <li>die door de ontvangende partij openbaar wordt gemaakt op grond van een wettelijke plicht</li>
          </ul>
          <p>De in artikel 25 omschreven geheimhoudingsplicht geldt voor de duur van deze overeenkomst en voor een periode van onbepaalde tijd na het eindigen daarvan.</p>

          <h2 className="mt-10 font-bold">Artikel 26 - Boete op overtreding geheimhoudingsplicht</h2>
          <p>Overtreedt opdrachtgever het artikel van deze algemene voorwaarden over geheimhouding, dan verbeurt opdrachtgever ten behoeve van dienstverlener een onmiddellijk opeisbare boete van €10.000,00 voor elke overtreding en daarnaast een bedrag van €1.000,00 voor elke dag dat die overtreding voortduurt. Dit is ongeacht of de overtreding aan opdrachtgever kan worden toegerekend. Bovendien is er voor het verbeuren van deze boete geen voorafgaande ingebrekestelling of gerechtelijke procedure benodigd. Ook hoeft er geen sprake te zijn van enige vorm van schade.</p>
          <p>Het verbeuren van de in het artikel 26.1 bedoelde boete doet geen afbreuk aan de overige rechten van dienstverlener waaronder zijn recht om naast de boete schadevergoeding te vorderen.</p>

          <h2 className="mt-10 font-bold">Artikel 27 - Niet-overname personeel</h2>
          <p>Opdrachtgever neemt geen medewerkers van dienstverlener (of van ondernemingen waarop dienstverlener ter uitvoering van deze overeenkomst een beroep heeft gedaan en die betrokkenen zijn (geweest) bij de uitvoering van de overeenkomst) in dienst. Ook laat hij hen niet anderszins direct of indirect voor zich werken. Dit verbod geldt gedurende de looptijd van de overeenkomst tot een jaar na beëindiging daarvan. Op dit verbod geldt één uitzondering; Partijen komen samen overeen om andere afspraken te maken, waaronder mogelijk een afkoopregeling. Deze afspraken gelden voor zover die schriftelijk zijn vastgelegd.</p>

          <h2 className="mt-10 font-bold">Artikel 28 - Wijziging algemene voorwaarden</h2>
          <p>Infinity Analysis & Consultancy B.V. is gerechtigd deze algemene voorwaarden te wijzigen of aan te vullen.</p>
          <p>Wijzigingen van ondergeschikt belang kunnen te allen tijde worden doorgevoerd.</p>
          <p>Grote inhoudelijke wijzigingen zal Infinity Analysis & Consultancy B.V. zoveel mogelijk vooraf met de klant bespreken.</p>

          <h2 className="mt-10 font-bold">Artikel 29 - Toepasselijk recht</h2>
          <p>Op iedere overeenkomst tussen partijen is uitsluitend het Nederlands recht van toepassing</p>

          <p className="mt-8 text-sm text-gray-500">Versienummer 25.4</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 