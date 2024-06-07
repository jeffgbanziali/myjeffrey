import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import { useLocation } from 'react-router-dom';
import studentsData from '../MyData/Students.json';
import teachersData from '../MyData/Teachers.json';

const EnterNote = () => {
    const location = useLocation();
    const { user } = location.state;
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {

        if (user) {
            const teacherCourseTitles = user.courses.map(course => course.title);

            const enrolledStudents = studentsData.filter(student =>
                student.cours_suivis.some(course => teacherCourseTitles.includes(course.title))
            );

            setStudents(enrolledStudents);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedStudent || !selectedCourse || !note) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Mise à jour des données d'un des étudiants avec sa nouvelle note
        const updatedStudents = students.map(student => {
            if (student.username === selectedStudent) {
                const updatedNotes = { ...student.notes };

                Object.keys(updatedNotes).forEach(semester => {
                    updatedNotes[semester] = updatedNotes[semester].map(ue => {
                        const updatedModules = ue.module.map(module => {
                            if (module.name.toUpperCase() === selectedCourse) {
                                console.log("Mon module ", module.name)
                                return {
                                    ...module,
                                    grade: note
                                };
                            }
                            return module;
                        });

                        console.log("Mon module ", updatedModules)

                        return {
                            ...ue,
                            module: updatedModules
                        };
                    });
                });

                const updatedStudent = {
                    ...student,
                    notes: updatedNotes
                };

                console.log('Updated student:', updatedStudent);

                return updatedStudent;
            }
            return student;
        });

        setStudents(updatedStudents);

        setSelectedStudent('');
        setSelectedCourse('');
        setNote('');
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-opacity-75 flex'>
            <div className="flex flex-col justify-center w-[100%] rounded-xl h-[100%] shadow-lg transform transition-all ease-in-out duration-300 scale-100">
                <Navbar user={user} />
                <div className='w-full h-full bg-opacity-75 flex justify-center items-center'>
                    <div className="flex items-center justify-center w-[90%] rounded-xl h-[90%] bg-white shadow-lg transform transition-all ease-in-out duration-300 scale-100 p-6">
                        <div className="w-full">
                            <h1 className="text-2xl font-bold mb-4">Rentrer une note</h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Étudiant:</label>
                                    <select
                                        value={selectedStudent}
                                        onChange={(e) => setSelectedStudent(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="">Sélectionner un étudiant</option>
                                        {students.map(student => (
                                            <option key={student.username} value={student.username}>
                                                {student.prenom} {student.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Cours:</label>
                                    <select
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="">Sélectionner un cours</option>
                                        {user.courses.map(course => (
                                            <option key={course.title} value={course.title}>
                                                {course.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Note:</label>
                                    <input
                                        type="text"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white p-2 rounded-md"
                                    >
                                        Enregistrer la note
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterNote;
