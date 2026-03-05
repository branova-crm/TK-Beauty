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

                            {/* Einleitung */}
                            <h2 className="text-2xl font-bold border-b pb-2">Einleitung und allgemeine Angaben</h2>
                            <p>Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein sehr wichtiges Anliegen. Im Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die durch Ihre Nutzung unserer Website erfasst werden. Die Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum Datenschutz.</p>

                            {/* Verantwortlicher */}
                            <h2 className="text-2xl font-bold border-b pb-2">Verantwortlicher im Sinne der DSGVO</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="font-bold py-3 px-4 bg-gray-50 w-1/3">Unternehmen</td>
                                            <td className="py-3 px-4">TK Beauty – Inhaberin: Tetyana Kolunin</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="font-bold py-3 px-4 bg-gray-50">Adresse</td>
                                            <td className="py-3 px-4">Krugstraße 39, 90419 Nürnberg, Deutschland</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="font-bold py-3 px-4 bg-gray-50">Telefon</td>
                                            <td className="py-3 px-4">+49 15562 483435</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold py-3 px-4 bg-gray-50">E-Mail</td>
                                            <td className="py-3 px-4">tkbeauty@web.de</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Datenschutzbeauftragter */}
                            <h3 className="text-xl font-bold">Kontaktdaten des Datenschutzbeauftragten</h3>
                            <p>Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich, da in unserem Unternehmen weniger als 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind.</p>
                            <p>Bei Fragen zum Datenschutz können Sie sich jederzeit an den oben genannten Verantwortlichen wenden.</p>

                            {/* Begriffsbestimmungen */}
                            <h2 className="text-2xl font-bold border-b pb-2">Begriffsbestimmungen</h2>
                            <p>Unsere Datenschutzerklärung soll für jedermann einfach und verständlich sein. In dieser Datenschutzerklärung werden in der Regel die offiziellen Begriffe der Datenschutzgrundverordnung (DSGVO) verwendet. Die offiziellen Begriffsbestimmungen werden in Art. 4 DSGVO erläutert.</p>

                            {/* Zugriff auf Endeinrichtungen */}
                            <h2 className="text-2xl font-bold border-b pb-2">Zugriff auf und Speicherung von Informationen in Endeinrichtungen</h2>
                            <p>Durch die Nutzung unserer Website kann ein Zugriff auf Informationen (z. B. IP-Adresse) oder eine Speicherung von Informationen (z. B. Cookies) in Ihren Endeinrichtungen erfolgen. Mit diesem Zugriff bzw. dieser Speicherung kann eine weitere Verarbeitung personenbezogener Daten im Sinne der DSGVO verbunden sein.</p>
                            <p>In den Fällen, in denen ein solcher Zugriff auf Informationen bzw. ein solches Speichern von Informationen zur technisch fehlerfreien Bereitstellung unserer Dienste unbedingt erforderlich ist, erfolgt dies auf Grundlage von <strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong>.</p>
                            <p>In den Fällen, in denen ein solcher Vorgang anderen Zwecken (z. B. Analyse der Nutzung unserer Website) dient, erfolgt dieser nur mit Ihrer Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>.</p>

                            {/* Webhosting */}
                            <h2 className="text-2xl font-bold border-b pb-2">Webhosting</h2>
                            <p>Diese Website wird bei einem externen Dienstleister gehostet.</p>
                            <p>Das Hosting dieser Website erfolgt bei:</p>
                            <p><strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                USA</p>
                            <p>Die Serverregion befindet sich innerhalb der Europäischen Union (Frankfurt am Main).</p>
                            <p>Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich insbesondere um folgende Daten handeln:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>IP-Adressen</li>
                                <li>Kontaktanfragen</li>
                                <li>Meta- und Kommunikationsdaten</li>
                                <li>Websitezugriffe</li>
                                <li>sonstige Daten, die über eine Website generiert werden</li>
                            </ul>
                            <p>Die Verarbeitung dieser Daten ist erforderlich, um einen reibungslosen Betrieb der Website zu gewährleisten.</p>
                            <p>Rechtsgrundlage für die Verarbeitung der Daten ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Wir haben mit dem Provider einen Auftragsverarbeitungsvertrag gemäß <strong>Art. 28 DSGVO</strong> geschlossen.</p>

                            {/* Server-Logfiles */}
                            <h2 className="text-2xl font-bold border-b pb-2">Server-Logfiles</h2>
                            <p>Beim Aufrufen unserer Website werden automatisch Informationen durch den Webserver erfasst.</p>
                            <p>Folgende Daten werden dabei protokolliert:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Datum und Uhrzeit der Anfrage</li>
                                <li>Name der angeforderten Datei</li>
                                <li>Referrer URL</li>
                                <li>Zugriffsstatus</li>
                                <li>verwendeter Browser</li>
                                <li>Betriebssystem</li>
                                <li>IP-Adresse</li>
                                <li>übertragene Datenmenge</li>
                            </ul>
                            <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Die Daten dienen ausschließlich der Gewährleistung eines störungsfreien Betriebs der Website sowie zur Verbesserung unseres Angebots.</p>
                            <p>Aus Gründen der technischen Sicherheit werden diese Daten für maximal 7 Tage gespeichert und anschließend automatisch gelöscht.</p>

                            {/* Cookies */}
                            <h2 className="text-2xl font-bold border-b pb-2">Cookies</h2>
                            <p>Unsere Internetseite verwendet sogenannte Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
                            <p>Ein Teil der Cookies ist technisch notwendig, um grundlegende Funktionen der Website sicherzustellen.</p>
                            <p>Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Analyse- oder Tracking-Cookies werden nur eingesetzt, sofern Sie Ihre Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> erteilt haben.</p>
                            <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden oder Cookies vollständig deaktivieren.</p>

                            {/* Analyse-Tools */}
                            <h2 className="text-2xl font-bold border-b pb-2">Analyse-Tools</h2>

                            <h3 className="text-xl font-bold">Vercel Web Analytics</h3>
                            <p>Diese Website nutzt Vercel Web Analytics.</p>
                            <p>Anbieter ist:</p>
                            <p><strong>Vercel Inc.</strong><br />
                                440 N Barranca Ave #4133<br />
                                Covina, CA 91723<br />
                                USA</p>
                            <p>Mit diesem Dienst können anonymisierte statistische Daten über die Nutzung unserer Website erfasst werden.</p>
                            <p>Nach Angaben des Anbieters werden keine Cookies gesetzt und keine Nutzerprofile erstellt.</p>
                            <p>Die Nutzung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Weitere Informationen: <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/docs/analytics</a></p>

                            <h3 className="text-xl font-bold">Vercel Speed Insights</h3>
                            <p>Diese Website nutzt Vercel Speed Insights zur Analyse der technischen Performance.</p>
                            <p>Dabei können technische Informationen über Ladezeiten, Gerätetyp oder Browserinformationen verarbeitet werden.</p>
                            <p>Diese Daten dienen ausschließlich der Verbesserung der technischen Performance unserer Website.</p>
                            <p>Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Weitere Informationen: <a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/docs/speed-insights</a></p>

                            {/* Kontaktformular */}
                            <h2 className="text-2xl font-bold border-b pb-2">Kontaktformular</h2>
                            <p>Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer und Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.</p>
                            <p>Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>.</p>
                            <p>Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung weitergegeben.</p>

                            {/* Google Maps */}
                            <h2 className="text-2xl font-bold border-b pb-2">Google Maps</h2>
                            <p>Diese Website nutzt den Kartendienst Google Maps.</p>
                            <p>Anbieter ist:</p>
                            <p><strong>Google Ireland Limited</strong><br />
                                Gordon House<br />
                                Barrow Street<br />
                                Dublin 4<br />
                                Irland</p>
                            <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.</p>
                            <p>Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
                            <p>Die Nutzung erfolgt im Interesse einer ansprechenden Darstellung unserer Website.</p>
                            <p>Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                            <p>Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></p>

                            {/* Datenweitergabe */}
                            <h2 className="text-2xl font-bold border-b pb-2">Datenweitergabe und Empfänger</h2>
                            <p>Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet grundsätzlich nicht statt, außer:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>wenn dies zur Vertragserfüllung erforderlich ist</li>
                                <li>wenn eine gesetzliche Verpflichtung besteht</li>
                                <li>wenn Sie ausdrücklich eingewilligt haben</li>
                            </ul>
                            <p>Wir setzen zudem externe Dienstleister ein (z. B. Hostinganbieter), mit denen entsprechende Auftragsverarbeitungsverträge gemäß <strong>Art. 28 DSGVO</strong> geschlossen wurden.</p>

                            {/* Datensicherheit */}
                            <h2 className="text-2xl font-bold border-b pb-2">Datensicherheit</h2>
                            <p>Wir treffen geeignete technische und organisatorische Maßnahmen gemäß <strong>Art. 32 DSGVO</strong>, um Ihre Daten zu schützen.</p>
                            <p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung.</p>

                            {/* Speicherdauer */}
                            <h2 className="text-2xl font-bold border-b pb-2">Dauer der Speicherung personenbezogener Daten</h2>
                            <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>

                            {/* Ihre Rechte */}
                            <h2 className="text-2xl font-bold border-b pb-2">Ihre Rechte</h2>
                            <p>Sie haben das Recht:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>auf Auskunft gemäß Art. 15 DSGVO</li>
                                <li>auf Berichtigung gemäß Art. 16 DSGVO</li>
                                <li>auf Löschung gemäß Art. 17 DSGVO</li>
                                <li>auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                                <li>auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                                <li>auf Widerspruch gemäß Art. 21 DSGVO</li>
                            </ul>
                            <p>Darüber hinaus haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
                            <p>Zuständige Behörde:</p>
                            <p><strong>Bayerisches Landesamt für Datenschutzaufsicht</strong><br />
                                Promenade 18<br />
                                91522 Ansbach<br />
                                Deutschland<br />
                                <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.lda.bayern.de</a></p>

                            {/* Widerspruchsrecht */}
                            <h2 className="text-2xl font-bold border-b pb-2">Widerspruchsrecht</h2>
                            <p>Wenn Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> verarbeitet werden, haben Sie das Recht, Widerspruch einzulegen.</p>
                            <p>Zur Ausübung Ihres Rechts genügt eine E-Mail an:</p>
                            <p><a href="mailto:tkbeauty@web.de" className="text-primary hover:underline font-bold">tkbeauty@web.de</a></p>

                            {/* Automatisierte Entscheidungsfindung */}
                            <h2 className="text-2xl font-bold border-b pb-2">Automatisierte Entscheidungsfindung</h2>
                            <p>Eine automatisierte Entscheidungsfindung oder Profiling gemäß <strong>Art. 22 DSGVO</strong> findet nicht statt.</p>

                            {/* Änderungsvorbehalt */}
                            <h2 className="text-2xl font-bold border-b pb-2">Änderungsvorbehalt</h2>
                            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an aktuelle rechtliche Anforderungen anzupassen.</p>
                            <p className="text-sm text-gray-500 italic mt-4">Stand dieser Datenschutzerklärung: März 2026</p>

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
