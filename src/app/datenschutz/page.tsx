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
                            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                            <p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, beispielsweise Name, Adresse, E-Mail-Adresse oder IP-Adresse.</p>
                            <p>Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der nachfolgenden Datenschutzerklärung.</p>

                            <h3 className="text-xl font-bold">Datenerfassung auf dieser Website</h3>

                            <h4 className="font-bold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>

                            <h4 className="font-bold">Wie erfassen wir Ihre Daten?</h4>
                            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich beispielsweise um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                            <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Dabei handelt es sich vor allem um technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                            <p>Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                            <h4 className="font-bold">Wofür nutzen wir Ihre Daten?</h4>
                            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Bearbeitung Ihrer Anfragen verwendet werden.</p>

                            <h4 className="font-bold">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                            <p>Sie haben jederzeit das Recht:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                                <li>eine erteilte Einwilligung jederzeit für die Zukunft zu widerrufen</li>
                                <li>unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                            </ul>
                            <p>Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">2. Hosting</h2>
                            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                            <p><strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                USA</p>
                            <p>Die Serverregion für diese Website befindet sich innerhalb der Europäischen Union (Frankfurt am Main). Dennoch kann im Rahmen der technischen Bereitstellung eine Übertragung von Daten in die USA nicht vollständig ausgeschlossen werden.</p>
                            <p>Vercel ist nach dem <strong>EU-US Data Privacy Framework (DPF)</strong> zertifiziert.</p>
                            <p>Die Verwendung des Hosters erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes Interesse liegt in einer möglichst zuverlässigen und sicheren Bereitstellung unserer Website.</p>
                            <p>Wir haben mit dem Anbieter einen <strong>Vertrag zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO</strong> geschlossen.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                            <h3 className="text-xl font-bold">Datenschutz</h3>
                            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                            <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

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

                            <h3 className="text-xl font-bold">Rechtsgrundlagen der Datenverarbeitung</h3>
                            <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>.</p>
                            <p>Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>.</p>
                            <p>Sofern eine gesetzliche Verpflichtung besteht, erfolgt die Verarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. c DSGVO</strong>.</p>
                            <p>In anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses gemäß <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>

                            <h3 className="text-xl font-bold">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt davon unberührt.</p>

                            <h3 className="text-xl font-bold">Widerspruchsrecht gemäß Art. 21 DSGVO</h3>
                            <p>Wenn die Datenverarbeitung auf Grundlage von <strong>Art. 6 Abs. 1 lit. e oder f DSGVO</strong> erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</p>

                            <h3 className="text-xl font-bold">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                            <p>Im Falle von Verstößen gegen die DSGVO steht Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde:</p>
                            <p>Bayerisches Landesamt für Datenschutzaufsicht<br />
                                Promenade 18, 91522 Ansbach, Deutschland<br />
                                https://www.lda.bayern.de</p>

                            <h2 className="text-2xl font-bold border-b pb-2">4. Datenerfassung auf dieser Website</h2>

                            <h3 className="text-xl font-bold">Server-Log-Dateien</h3>
                            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Browsertyp und Browserversion</li>
                                <li>verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners</li>
                                <li>Uhrzeit der Serveranfrage</li>
                                <li>IP-Adresse</li>
                            </ul>
                            <p>Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>

                            <h3 className="text-xl font-bold">Kontaktformular</h3>
                            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten. Dabei können folgende Daten verarbeitet werden:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name</li>
                                <li>E-Mail-Adresse</li>
                                <li>Telefonnummer</li>
                                <li>Nachricht</li>
                            </ul>
                            <p>Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>.</p>
                            <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis der Zweck für die Speicherung entfällt oder Sie uns zur Löschung auffordern.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">5. Analyse-Tools</h2>

                            <h3 className="text-xl font-bold">Vercel Web Analytics</h3>
                            <p>Diese Website nutzt Vercel Web Analytics, einen Analysedienst des Hosting-Anbieters Vercel Inc. Mit diesem Dienst können anonymisierte statistische Daten über die Nutzung unserer Website erfasst werden, beispielsweise Seitenaufrufe oder Herkunft des Besuchers. Nach Angaben des Anbieters werden dabei keine Cookies gesetzt und keine individuellen Nutzerprofile erstellt. Die Nutzung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes Interesse liegt in der Analyse und Optimierung unseres Webangebots.</p>
                            <p>Weitere Informationen finden Sie unter: https://vercel.com/docs/analytics</p>

                            <h3 className="text-xl font-bold">Vercel Speed Insights</h3>
                            <p>Diese Website nutzt Vercel Speed Insights zur Analyse der technischen Performance unserer Website. Dabei können technische Informationen erfasst werden, beispielsweise Ladezeiten, Gerätetyp oder Browserinformationen. Diese Daten dienen ausschließlich der Verbesserung der technischen Performance unserer Website. Die Nutzung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Weitere Informationen finden Sie unter: https://vercel.com/docs/speed-insights</p>

                            <h2 className="text-2xl font-bold border-b pb-2">6. Plugins und Tools</h2>

                            <h3 className="text-xl font-bold">Google Maps</h3>
                            <p>Diese Website nutzt den Kartendienst Google Maps. Anbieter ist: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit der von uns angegebenen Orte. Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy</p>

                            <h2 className="text-2xl font-bold border-b pb-2">7. SSL- bzw. TLS-Verschlüsselung</h2>
                            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

                            <h2 className="text-2xl font-bold border-b pb-2">8. Änderungen dieser Datenschutzerklärung</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Datenschutzerklärung.</p>

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
