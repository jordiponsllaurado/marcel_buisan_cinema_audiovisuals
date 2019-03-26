import React, { Component } from 'react'
import './About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { black } from 'ansi-colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const movie = "M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z"
const sound = "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
const photo = "M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"

class About extends Component {
    render() {
        return (
            <div className='content'>
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
{/*
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
                    </ul>
                </div>
*/}
                </div>
                <div className='projects'>
                    <h2>Historial de projectes</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011"
                            style={{ color: black}}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SvgIcon>
                                <path d={sound} />
                            </SvgIcon>}
                        >
                            <h3 className="vertical-timeline-element-title">"La última habitación"</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dirigit per Pilar M. Aláez. ECIB i AVED. HD.</h4>
                            <p>Al Departament de So</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SvgIcon>
                                <path d={sound} />
                            </SvgIcon>}
                        >
                            <h3 className="vertical-timeline-element-title">Lo que siempre te quise decir</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dirigit per Àngel Miñana. ECIB. HD.</h4>
                            <p>Al Departament de So</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SvgIcon>
                                <path d={sound} />
                            </SvgIcon>}
                        >
                            <h3 className="vertical-timeline-element-title">18.04</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dirigit per Laura Abelló. ECIB. HD.</h4>
                            <p>Al Departament de So</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2009"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<SvgIcon>
                                <path d={photo} />
                            </SvgIcon>}
                        >
                            <h3 className="vertical-timeline-element-title">"Trips" (curtmetratge)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Dirigit per Jaume Molera i Joan Llaneras. Operador de càmera. ECIB. HD.</h4>
                            <p>Al Departament de Fotografia</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}

export default About