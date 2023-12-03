import Angular from './images/angular.jpg';
import Bootstrap from './images/boostrap.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './course.css';

const courseMap ={
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
};

function Course({courseName}) {
    // console.log(Angular);
    // console.log(courseName);
    console.log(courseMap[courseName]);
    return ( 
    <div className='courseDiv'>
        <img className='course' src={courseMap[courseName]} alt="course" />
    </div> 
    );
}

export default Course;