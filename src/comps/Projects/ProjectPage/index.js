import React from 'react';
import './projectPage.scss';
import { FaWindowClose, FaGithubAlt, FaGlobeAmericas, FaPenNib } from 'react-icons/fa';

function ProjectPage({title, role,  skills, descr, imgs, setShowProject={setShowProject}, links, linkDescr, linkIcon, subHead, type}){

    var icon1 = null,
        icon2 = null,
        skillList = null;

    if(linkIcon === 'development'){
        icon1 = <FaGithubAlt size={60}/>;
        icon2 = <FaGlobeAmericas size={60}/>;
    } else {
        icon1 = <FaPenNib size={60}/>;
        icon2 = null;
    }

    if(type === true){
        skillList =<ul className='PP-section-text'><li>{skills[0]}</li><li>{skills[1]}</li><li>{skills[2]}</li></ul>;
    } else {
        skillList =<ul className='PP-section-text'><li>{skills[0]}</li></ul> ;
    }

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
                                    {skillList}
                            </div>
                        </div>
                            <div className='PP-icons'>
                                <a href={links[0]}>
                                    <div className='PP-icon'>
                                        {icon1}
                                        <h4 className='PP-text'>{linkDescr[0]}</h4>
                                    </div>
                                </a>
                                <a href={links[1]}>
                                    <div className='PP-icon'>
                                        {icon2}
                                        <h4 className='PP-text'>{linkDescr[1]}</h4>
                                    </div>
                                </a>
                            </div>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[0]+'.png')} />
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>{subHead[0]}</h3>
                        <p className='PP-section-text'>{descr[0]}</p>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[1]+'.png')}/>
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>{subHead[1]}</h3>
                        <p className='PP-section-text'>{descr[1]}</p>
                    </div>
                    <img className='PP-img' src={require('../../../imgs/projects/'+imgs[2]+'.png')}/>
                </div>
                <div className='PP-section'>
                    <div className='PP-section-descr'>
                        <h3 className='PP-section-header'>{subHead[2]}</h3>
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
    imgs:[],
    links:['https://github.com/KaanDarcey', 'https://www.behance.net/kaandarcey'],
    linkDescr:['View Github', 'View Live'],
    linkIcon:'development',
    subHead:['About', 'Design', 'Development'],
    type:true
}

export default ProjectPage;