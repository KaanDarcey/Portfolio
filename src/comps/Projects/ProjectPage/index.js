import React from 'react';
import './projectPage.scss';
import { FaWindowClose, FaGithubAlt, FaGlobeAmericas } from 'react-icons/fa';

function ProjectPage({title, role,  skills, descr, imgs, setShowProject={setShowProject}}){
    return(
        <div className='PP-container'>
            <div className='PP-header'>
                <FaWindowClose size={30} className='PP-close' onClick={()=>setShowProject(false)} />
                <h1>{title}</h1>
            </div>
            <div className='PP-page'>
            <div className='PP-section'>
                    <div className='PP-section-descr PP-section-descr-top'>
                        <div className='PP-section-top'>
                            <div className='PP-section-tools'>
                                <h3 className='PP-section-header'>Role</h3>
                                <p className='PP-section-text'>{role}</p>
                            </div>
                            <div className='PP-section-skills'>
                                <h3 className='PP-section-header'>Software/Tools</h3>
                                <ul className='PP-section-text'>
                                    <li>{skills[0]}</li>
                                    <li>{skills[1]}</li>
                                    <li>{skills[2]}</li>
                                </ul>
                            </div>
                        </div>
                            <div className='PP-icons'>
                                <a href='https://github.com/KaanDarcey'>
                                    <div className='PP-icon'>
                                        <FaGithubAlt size={60}/>
                                        <h4 className='PP-text'>View Github</h4>
                                    </div>
                                </a>
                                <a href='https://www.behance.net/kaandarcey'>
                                    <div className='PP-icon'>
                                        <FaGlobeAmericas size={60}/>
                                        <h4 className='PP-text'>View Live</h4>
                                    </div>
                                </a>
                            </div>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[0]+'.png')} />
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>About</h3>
                        <p className='PP-section-text'>{descr[0]}</p>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[1]+'.png')}/>
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>Design</h3>
                        <p className='PP-section-text'>{descr[1]}</p>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[2]+'.png')}/>
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>Development</h3>
                        <p className='PP-section-text'>{descr[2]}</p>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[3]+'.png')}/>
                </div>
                <div className='PP-up'></div>
            </div>
        </div>
    )
}

ProjectPage.defaultProps = {
    title:'default',
    role:'Front-End Developer',
    skills:['HTML', 'CSS', 'JavaScript'],
    descr:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id. Sed nisi lacus sed viverra tellus in hac. Felis donec et odio pellentesque diam volutpat commodo. Id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget. Risus pretium quam vulputate dignissim. Eu tincidunt tortor aliquam nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus. Enim sit amet venenatis urna cursus eget nunc. Nisi vitae suscipit tellus mauris a diam maecenas.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id. Sed nisi lacus sed viverra tellus in hac. Felis donec et odio pellentesque diam volutpat commodo. Id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget. Risus pretium quam vulputate dignissim. Eu tincidunt tortor aliquam nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus. Enim sit amet venenatis urna cursus eget nunc. Nisi vitae suscipit tellus mauris a diam maecenas.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id. Sed nisi lacus sed viverra tellus in hac. Felis donec et odio pellentesque diam volutpat commodo. Id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget. Risus pretium quam vulputate dignissim. Eu tincidunt tortor aliquam nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus. Enim sit amet venenatis urna cursus eget nunc. Nisi vitae suscipit tellus mauris a diam maecenas.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id. Sed nisi lacus sed viverra tellus in hac. Felis donec et odio pellentesque diam volutpat commodo. Id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget. Risus pretium quam vulputate dignissim. Eu tincidunt tortor aliquam nulla facilisi. Enim lobortis scelerisque fermentum dui faucibus. Enim sit amet venenatis urna cursus eget nunc. Nisi vitae suscipit tellus mauris a diam maecenas.'],
    imgs:[]
}

export default ProjectPage;