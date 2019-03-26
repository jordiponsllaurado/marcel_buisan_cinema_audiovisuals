import React, { Component } from 'react'
import './About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { black } from 'ansi-colors';

class About extends Component {
    render() {
        return (
            <div>
                <div className='About'>
                    <h1>SOBRE MI</h1>
                    <p>
                        Començo a estudiar cinema el 2008 a la Escuela de Cine de Barcelona (ECIB), estudis que realitzo simultàniament amb la Llicenciatura d'Història a la Universitat de Barcelona (UB). En els primers dos anys a l'ECIB dirigeixo dos curtmetratges, un en Super8mm i l'altre en HD, també participo en diferents rols, ja sigui en projectes grupals (un en format 16mm), com en projectes individuals d'altres companys.
                        <br /><br />
                        El tercer any curso l'especialització en direcció i producció de cinema en 35mm a l'UPC-ETSEIB, rodant "Un balcó d'Abril" (2011) i participant en el projecte final del graduat en 35mm, així com en altres curts en HD. Recentment he participat en produccions de la productora audiovisual Bande à Part, així com de la productora AVED, on he rodat "La herencia de Martí" (2017).
                        <br /><br />
                        Recentment he dirigit i produït el curtmetratge "En la tardor de la història" (2018), que serà la primera part d'un llargmetratge de ficció ambientat a Catalunya durant la postguerra.
                        <br /><br />
                        En el meu temps lliure treballo en guions i projectes de curtmetratges, capítols pilots per televisió i llargmetratges.
                    </p>

                    <h2>Historial de projectes</h2>
                    <h3>Com a Director</h3>
                    <ul>
                        <li>2018 - "En la tardor de la història" (Curtmetratge). 4k. - En Postproducció - Protagonitzat per Enric Majó i Àlex Casanovas</li>
    ​                    <li>2017 - "Fatarella 1938: Ofensiva republicana" (Curtmetratge documental) HD - En Postproducció</li>
                        <li>2017 - "La herencia de Martí" (Curtmetratge) AVED. 4K - En Postproducció</li>
                        <li>2011 - "Un balcó d'Abril" (Curtmetratge) ECIB i AVED. HD</li>
                        <li>2009 - "La basarda". (Curtmetratge). ECIB. HD Seleccionat a la secció "Encuentro audivisual de jóvenes" al Festival Internacional de Cinema de Valencia</li>
                        <li>2008 - "Poema Antic" (Curtmetratge). ECIB. Super8mm/ Digital</li>
                    </ul>
                    <h3>Com a Ajudant de Direcció</h3>
                    <ul>
                        <li>2014 - "Talleu" dirigit per Josep Oller. Bande à part. HD</li>
                        <li>2014 - "Nada en común" dirigit per Josep Oller. Bande à part. HD</li>
                        <li>2010 - "Hibris" dirigit per Alex Izman. ECIB. 16mm</li>
                    </ul>
                    <h3>Al Departament de Producció</h3>
                    <ul>
                        <li>2014 - "Versió tercera" dirigit per Josep Oller. Bande à part. HD. (Ajudant de Producció)</li>
                        <li>2012 - "Stop Alzheimer" (spot) dirigit per Judith Mora. AVED. HD. (Cap de Producció)</li>
                        <li>2011 - "Dead body" dirigit per Aitor de Haro. ECIB. HD. (Ajudant de Producció) Seleccionat a la categoria de "Nova autoria" en el Festival de Cinema de Sitges.</li>
                        <li>2011 - "Supermarket Inn" dirigit per Sara López. ECIB. 35mm. (Ajudant de producció)Guanyador a "millor curtmetratge de ficció" en el Eurofilm festival.</li>
                    </ul>
                    <h3>Al Departament de Fotografia</h3>
                    <ul>
                        <li>2012 - "The Jump! WTF experience" (llargmetratge documental) dirigit per Carme Puche. Operador de càmera (segona unitat) Estudi Puche Expressions i AVED. HD.</li>
                        <li>2012 - Festival Engresca't 2012. (reportatge). Operador de càmera. AVED. HD.</li>
                        <li>2009 - Lark About. "Camp a través". (videoclip) dirigit per Àngel Miñana. Ajudant de fotografia. ECIB. HD</li>
                        <li>2009 - "Trips" (curtmetratge) dirigit per Jaume Molera i Joan Llaneras. Operador de càmera. ECIB. HD.</li>
                    </ul>
                </div>
                <h3 style={{ color: '#2196f3', padding: '40px'}}>Al Departament de So</h3>
                <VerticalTimeline layout_='1-column'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011"
                        style={{ color: black}}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">"La última habitación"</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dirigit per Pilar M. Aláez. ECIB i AVED. HD.</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Lo que siempre te quise decir</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dirigit per Àngel Miñana. ECIB. HD.</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">18.04</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dirigit per Laura Abelló. ECIB. HD.</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default About