
import html from '../../../Assets/html.png';
import css from '../../../Assets/css.png';
import js from '../../../Assets/js.png';
import boot from '../../../Assets/boot.png';
import react from '../../../Assets/react.png';
import ts from '../../../Assets/ts.png';
import git from '../../../Assets/git.png';
import python from '../../../Assets/python.png';


const Intro = () => {



    return (
        <>
            <div class="section1">
                <h2>My Skills</h2>
                <div class="slider">
                    <div class="box" style={{'--i':1}}>
                        <img src={html} alt=""/>
                        <h3>HTML</h3>
                    </div>
                    <div class="box" style={{'--i':2}}>
                        <img src={css} alt=""/>
                        <h3>CSS</h3>
                    </div>
                    <div class="box" style={{'--i':3}}>
                        <img src={js} alt=""/>
                        <h3>JavaScript</h3>
                    </div>
                    <div class="box" style={{'--i':4}}>
                        <img src={boot} alt=""/>
                         <h3>Bootstrap</h3>
                    </div>
                    <div class="box" style={{'--i':5}}>
                        <img src={react} alt=""/>
                        <h3>React.JS</h3>
                    </div>
                    <div class="box" style={{'--i':6}}>
                        <img src={ts} alt=""/>
                        <h3>TypeScript</h3>
                    </div>
                    <div class="box" style={{'--i':7}}>
                        <img src={git} alt=""/>
                        <h3>Git Hub</h3>
                    </div>
                    <div class="box" style={{'--i': 8}}>
                        <img src={python} alt=""/>
                        <h3>Python</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro

