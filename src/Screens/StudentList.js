import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import { useLocation } from 'react-router'
import studentsData from '../MyData/Students.json';
import teachersData from '../MyData/Teachers.json';

const StudentList = () => {
    const location = useLocation()
    const { user } = location.state
    const [students, setStudents] = useState([]);

    useEffect(() => {


        if (user) {
            const teacherCourseIds = user.courses.map(course => course.title);

            const enrolledStudents = studentsData.filter(student =>
                student.cours_suivis.some(course => teacherCourseIds.includes(course.title))
            );


            console.log("Ses cours", enrolledStudents)


            setStudents(enrolledStudents);
        }
    }, [user]);

    console.log("Mon cours", students)

    return (
        <div className=' top-0 left-0 w-full h-full bg-opacity-75 flex'>
            <div className="flex flex-col justify-center w-full rounded-xl h-full shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                <Navbar user={user} />
                <div className='w-full pb-10 pt-10 h-full bg-opacity-75 flex justify-center items-center'>
                    <div className="flex items-center justify-center w-4/5 rounded-xl h-4/5 bg-white shadow-lg transform transition-all ease-in-out duration-300 scale-100 p-6">
                        <div className="w-full">
                            <h1 className="text-2xl font-bold mb-4">Mes étudiants</h1>
                            <ul className="space-y-2">
                                {students.map(student => (
                                    <li key={student.id} className="p-4 bg-gray-100 rounded-md shadow-sm flex items-center justify-between">
                                        <div>
                                            <span className="font-semibold">{student.prenom} {student.nom}</span> - <a href={`${student.email}`} className="underline text-blue-600">{student.email}</a> | <span className="text-gray-600">{student.annee}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList
