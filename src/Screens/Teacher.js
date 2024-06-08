import React, { useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import { useLocation } from 'react-router';
import Modal from 'react-modal';
import Select from 'react-select';
import studentsData from '../MyData/Students.json';

const Teacher = () => {
    const location = useLocation();
    const { user } = location.state;

    const [courses, setCourses] = useState(user.courses || []);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newCourseTitle, setNewCourseTitle] = useState('');
    const [newCourseDesc, setNewCourseDesc] = useState('');
    const [newCourseStart, setNewCourseStart] = useState('');
    const [newCourseEnd, setNewCourseEnd] = useState('');

    const handleAddCourse = () => {
        const newCourse = {
            id: Date.now(),
            title: newCourseTitle,
            start: newCourseStart,
            end: newCourseEnd,
            desc: newCourseDesc,
            students: [],
        };
        setCourses([...courses, newCourse]);
        setNewCourseTitle('');
        setNewCourseTitle(newCourseTitle);
        setNewCourseDesc('');
        setNewCourseStart('');
        setNewCourseEnd('');
        setModalIsOpen(false);
    };

    const handleDeleteCourse = (courseId) => {
        setCourses(courses.filter(course => course.id !== courseId));
    };

    const handleAddStudentToCourse = (courseId, student) => {
        const updatedCourses = courses.map(course =>
            course.id === courseId ? { ...course, students: [...course.students, student.id] } : course
        );
        setCourses(updatedCourses);

        const updatedStudents = studentsData.map(s => {
            if (s.id === student.id) {
                const updatedCoursSuivis = [...s.cours_suivis, updatedCourses.find(course => course.id === courseId)];
                s.cours_suivis = updatedCoursSuivis;

                const ue = s.notes["2023-2024 - S5"].find(ue => ue.ue === "Développement applications Web et Mobile");
                if (ue) {
                    const module = ue.module.find(mod => mod.name === newCourseTitle);
                    if (module) {
                        module.grade = '...';
                    } else {
                        ue.module.push({
                            name: newCourseTitle,
                            teacher: { nom: user.nom, prenom: user.prenom },
                            type: "Cours et TD",
                            coef: 1,
                            grade: "..."
                        });
                    }
                }
            }
            return s;
        });

        const studentsCopy = updatedStudents.map(student => ({
            ...student,
            cours_suivis: student.cours_suivis.map(course => ({
                ...course,
                students: undefined
            }))
        }));

        localStorage.setItem('students', JSON.stringify(studentsCopy));
    };

    const handleDeleteStudentFromCourse = (courseId, studentId) => {
        setCourses(
            courses.map(course =>
                course.id === courseId ? { ...course, students: course.students.filter(id => id !== studentId) } : course
            )
        );

        const updatedStudents = studentsData.map(s => {
            if (s.id === studentId) {
                const updatedCoursSuivis = s.cours_suivis.filter(course => course.id !== courseId);
                s.cours_suivis = updatedCoursSuivis;

                s.notes["2023-2024 - S6"].forEach(ue => {
                    ue.module = ue.module.filter(mod => mod.name !== courses.find(course => course.id === courseId).title);
                });
            }
            return s;
        });

        const studentsCopy = updatedStudents.map(student => ({
            ...student,
            cours_suivis: student.cours_suivis.map(course => ({
                ...course,
                students: undefined
            }))
        }));

        localStorage.setItem('students', JSON.stringify(studentsCopy));
    };


    console.log("Pourquoi toi ", newCourseTitle)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '600px',
        },
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-100 flex flex-col'>
            <Navbar user={user} />
            <div className='flex flex-col items-center justify-center p-4'>
                <h1 className='text-3xl font-bold mb-4'>Gestion des cours</h1>
                <button
                    onClick={() => setModalIsOpen(true)}
                    className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                >
                    Ajouter un cours
                </button>
                <div className='w-full mt-4'>
                    {courses.map(course => (
                        <div key={course.id} className='bg-white shadow-md rounded p-4 mb-4'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-xl font-bold'>{course.title}</h2>
                                <button
                                    onClick={() => handleDeleteCourse(course.id)}
                                    className='text-red-500 hover:text-red-700'
                                >
                                    Supprimer
                                </button>
                            </div>
                            <p className='text-gray-700'>{course.desc}</p>
                            <p className='text-gray-600'>Début: {new Date(course.start).toLocaleString()}</p>
                            <p className='text-gray-600'>Fin: {new Date(course.end).toLocaleString()}</p>
                            <div className='mt-2'>
                                <h3 className='text-lg font-semibold'>Étudiants</h3>
                                <ul>
                                    {course.students && course.students.map(studentId => {
                                        const student = studentsData.find(s => s.id === studentId);
                                        return (
                                            <li key={student.id} className='flex justify-between items-center'>
                                                {student.prenom} {student.nom}
                                                <button
                                                    onClick={() => handleDeleteStudentFromCourse(course.id, student.id)}
                                                    className='text-red-500 hover:text-red-700'
                                                >
                                                    Retirer
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='mt-2'>
                                <Select
                                    options={studentsData.map(student => ({ value: student, label: `${student.prenom} ${student.nom}` }))}
                                    onChange={option => handleAddStudentToCourse(course.id, option.value)}
                                    placeholder='Ajouter un étudiant'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Ajouter un cours"
            >
                <h2 className='text-2xl font-bold mb-4'>Ajouter un nouveau cours</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleAddCourse(); }}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Titre du cours</label>
                        <input
                            type='text'
                            value={newCourseTitle}
                            onChange={(e) => setNewCourseTitle(e.target.value)}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Description du cours</label>
                        <textarea
                            value={newCourseDesc}
                            onChange={(e) => setNewCourseDesc(e.target.value)}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Début du cours</label>
                        <input
                            type='datetime-local'
                            value={newCourseStart}
                            onChange={(e) => setNewCourseStart(e.target.value)}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Fin du cours</label>
                        <input
                            type='datetime-local'
                            value={newCourseEnd}
                            onChange={(e) => setNewCourseEnd(e.target.value)}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button
                            type='button'
                            onClick={() => setModalIsOpen(false)}
                            className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mr-2'
                        >
                            Annuler
                        </button>
                        <button
                            type='submit'
                            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Teacher;
