import React, { Component } from 'react'
import './About.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { black } from 'ansi-colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import {PROJECTS} from './constants'

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
                </div>
                <div className='projects'>
                    <h2>Historial de projectes</h2>
                    <VerticalTimeline>
                        {PROJECTS.map((project) => {
                            return (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date={project.date}
                                    style={{ color: black}}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<SvgIcon>
                                        <path d={project.icon} />
                                    </SvgIcon>}
                                >
                                    <h3 className="vertical-timeline-element-title">{project.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
                                    <p>{project.role}</p>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}

export default About