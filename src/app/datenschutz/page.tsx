"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-[#F2F0ED] pt-32 pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6">
                <div className="pt-10 pb-10 text-center">
                    <Reveal>
                        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                            Datenschutzerklärung
                        </h1>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <Card className="bg-white border border-gray-200 shadow-sm p-10 md:p-16 rounded-2xl">
                        <div className="prose prose-stone max-w-none text-gray-700 leading-relaxed space-y-8">

                            <h2 className="text-2xl font-bold border-b pb-2">1. Datenschutz auf einen Blick</h2>

                            <h3 className="text-xl font-bold">Allgemeine Hinweise</h3>
                            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Hierzu gehören beispielsweise Name, Adresse, E-Mail-Adresse oder IP-Adresse.</p>
                            <p>Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                            <hr className="my-8" />

                            <h3 className="text-xl font-bold">Datenerfassung auf dieser Website</h3>

                            <h4 className="font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des Verantwortlichen können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>

                            <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
                            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich beispielsweise um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es sich vor allem um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                            <p>Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                            <h4 className="font-bold">Wofür nutzen wir Ihre Daten?</h4>
                            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

                            <h4 className="font-bold">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                            <p>Sie haben jederzeit das Recht:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                                <li>eine erteilte Einwilligung jederzeit für die Zukunft zu widerrufen</li>
                                <li>unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                            </ul>
                            <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">2. Hosting</h2>
                            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                            <p><strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                USA</p>
                            <p>Die Serverregion befindet sich innerhalb der Europäischen Union (Frankfurt). Dennoch kann es im Rahmen der technischen Bereitstellung zu Datenübertragungen in die USA kommen.</p>
                            <p>Vercel ist nach dem <strong>EU-US Data Privacy Framework (DPF)</strong> zertifiziert.</p>
                            <p>Die Verwendung des Hosters erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>
                            <p>Wir haben mit dem Anbieter einen <strong>Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO</strong> geschlossen.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                            <h3 className="text-xl font-bold">Datenschutz</h3>
                            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                            <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

                            <h3 className="text-xl font-bold">Hinweis zur verantwortlichen Stelle</h3>
                            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                            <p>TK Beauty<br />
                                Inhaberin: Tetyana Kolunin<br />
                                Krugstraße 39<br />
                                90419 Nürnberg<br />
                                Deutschland</p>
                            <p>Telefon: +49 15562 483435<br />
                                E-Mail: tkbeauty@web.de</p>
                            <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

                            <h3 className="text-xl font-bold">Speicherdauer</h3>
                            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>
                            <p>Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

                            <h3 className="text-xl font-bold">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
                            <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>. Sind Ihre Daten zur Vertragserfüllung erforderlich, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>. Sofern eine gesetzliche Verpflichtung besteht, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. c DSGVO</strong>. In anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses gemäß <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>

                            <h3 className="text-xl font-bold">Empfänger von personenbezogenen Daten</h3>
                            <p>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit externen Dienstleistern zusammen. Eine Übermittlung personenbezogener Daten erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, wir gesetzlich dazu verpflichtet sind, ein berechtigtes Interesse besteht oder eine Einwilligung vorliegt.</p>

                            <h3 className="text-xl font-bold">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt davon unberührt.</p>

                            <h3 className="text-xl font-bold">Widerspruchsrecht gemäß Art. 21 DSGVO</h3>
                            <p>Wenn die Datenverarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. e oder f DSGVO</strong> erfolgt, haben Sie jederzeit das Recht, Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.</p>

                            <h3 className="text-xl font-bold">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                            <p>Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde:</p>
                            <p>Bayerisches Landesamt für Datenschutzaufsicht<br />
                                Promenade 18, 91522 Ansbach, Deutschland<br />
                                https://www.lda.bayern.de</p>

                            <h3 className="text-xl font-bold">Recht auf Datenübertragbarkeit</h3>
                            <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, in einem maschinenlesbaren Format zu erhalten.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">4. Datenerfassung auf dieser Website</h2>

                            <h3 className="text-xl font-bold">Cookies</h3>
                            <p>Unsere Internetseiten verwenden sogenannte Cookies. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder als Session-Cookies (werden nach Ende des Besuchs gelöscht) oder als permanente Cookies gespeichert. Rechtsgrundlage für technisch notwendige Cookies ist <strong>§ 25 Abs. 2 TDDDG</strong>. Analyse-Cookies werden nur mit Einwilligung gesetzt (<strong>Art. 6 Abs. 1 lit. a DSGVO</strong>).</p>

                            <h3 className="text-xl font-bold">Server-Log-Dateien</h3>
                            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien. Dies sind: Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Die Erfassung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>

                            <h3 className="text-xl font-bold">Kontaktformular</h3>
                            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular gespeichert (Name, E-Mail, Telefonnummer, Nachricht). Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>.</p>
                            <p>Die Daten werden gespeichert bei:<br />
                                <strong>Supabase Inc.</strong>, San Francisco, USA</p>
                            <p>Zusätzlich erfolgt eine Weiterleitung per E-Mail über den SMTP-Server: mail.agenturserver.de. Mit den Dienstleistern bestehen <strong>Auftragsverarbeitungsverträge nach Art. 28 DSGVO</strong>.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">5. Plugins und Tools</h2>

                            <h3 className="text-xl font-bold">Google Maps</h3>
                            <p>Diese Website nutzt den Kartendienst Google Maps. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Die Nutzung erfolgt im Interesse einer ansprechenden Darstellung unserer Website. Rechtsgrundlage: <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Weitere Informationen finden Sie unter: https://policies.google.com/privacy</p>

                            <h2 className="text-2xl font-bold border-b pb-2">6. SSL- bzw. TLS-Verschlüsselung</h2>
                            <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">7. Änderungen dieser Datenschutzerklärung</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Die jeweils aktuelle Version finden Sie jederzeit auf dieser Website.</p>

                        </div>
                    </Card>
                </Reveal>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
