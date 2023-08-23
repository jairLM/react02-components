import Student from "./students/student";
import studentsInfo from "./students/students-info";

/*
Las props (propiedades) son un mecanismo para pasar datos de un componente padre a un componente hijo
Las props son unidireccionales. padre => hijo
*/

export default function Generation(){

    return (<>
                <h2>Generation</h2>
                <p>En <em>Generation</em> aprendí con pasión,
                    Java Dev Jr. fue mi canción.
                    Bootcamp brillante, conocimientos al alza,
                     <strong> Generation MX</strong>, ¡mi ruta en casa!
                </p>
                <h4 id="subtitle">Participantes</h4>                
                {studentsInfo.map( studentInfo =>
                             <Student info={studentInfo}>GenCh30</Student>  )}
            </>)


}







/* {<Student
 id="p1"
 name="Tania"
 url="https://www.linkedin.com/in/taniagd/"
 isGraduate={true} />
<Student
id="p2" 
name="Jimena" 
url="https://www.linkedin.com/in/jimena-b-456405153" 
isGraduate={false} />
<Student 
id="p3" 
name="Yael" 
url="https://www.linkedin.com/in/jesus-yael-quiroz-p%C3%A9rez-7b4001283/"
isGraduate={false} />
<Student 
id="p4" 
name="Antonio"
url="https://www.linkedin.com/in/antonio-maldonado-pinzon-4aaa93221/" isGraduate={false}  />} */