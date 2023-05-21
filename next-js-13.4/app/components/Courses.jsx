import Link from "next/link"


const Courses = async ({courses}) => {
    return (
        <div className="courses">
            {courses.map((course) => (
                <div className="card" key={course.id}>
                    <h2>{course.title}</h2>
                    <small>level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link className="btn" href={course.link} target="_blank">Go To Course</Link>

                </div>
            ))}
        </div>
    )   
  }
  
export default Courses