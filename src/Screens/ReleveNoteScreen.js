import React, { useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import { useLocation } from 'react-router';




const renderNoteGroups = (noteGroups) => {
    return noteGroups.map((noteGroup, index) => (
        <React.Fragment key={index}>
            <tr className="bg-gray-200">
                <td colSpan="5" className='p-2 font-bold '>{noteGroup.ue}</td>
                <td className='p-2 text-[14px] font-bold text-center'>{noteGroup.Moyenne}</td>
                <td className='p-2 text-[14px] font-bold text-blue-500 text-center'>{noteGroup.credit}</td>
            </tr>
            {renderModules(noteGroup.module)}
        </React.Fragment>
    ));
};

const renderModules = (modules) => {
    return modules.map((mod, modIndex) => (
        <tr key={modIndex} className="  ">
            <td className='p-2  text-left'></td>
            <td className='p-2 font-semibold text-[14px] text-left'>{mod.name}<span className="teacher">({mod.teacher.nom}{", "}{mod.teacher.prenom})</span></td>
            <td className='p-2 text-[14px] text-center'>{mod.type}</td>
            <td className='p-2 text-[14px] text-center'>{mod.coef}</td>
            <td className='p-2  text-[15px] text-center'>{mod.grade}</td>
        </tr>
    ));
};


const ReleveNoteScreen = () => {
    const [semester, setSemester] = useState('2023-2024 - S6');
    const [showInfo, setShowInfo] = useState(false);
    const location = useLocation()
    const { user } = location.state



    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
    };

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    const data = user.notes



    return (
        <div className='top-0 left-0 w-full h-full  bg-opacity-75 flex '>
            <div className=" flex mb-10 flex-col items-center justify-center w-[100%]   h-[100%]   transform transition-all ease-in-out duration-300 scale-100">

                <Navbar user={user} />
                <div className="w-[70%] mt-10 mb-10 h-[100%]">
                    <h1 className="text-3xl font-bold mb-4">Notes et crédits</h1>
                    <div className="mb-4">
                        <p className="text-sm">
                            <i className="info-icon">&#8505;</i> Pour toute question relative à vos cours et notes, nous vous invitons à envoyer un mail à l'adresse : scolarite@efrei.fr.
                        </p>
                        <button className="notes-button mt-2" onClick={toggleInfo}>
                            &#x25BA; Informations sur vos notes
                        </button>
                        {showInfo && (
                            <div className="info-box mt-2">
                                <p className="text-sm">L’affichage de vos notes, de vos moyennes de module / UE et de vos ECTS obtenus n’est pas automatique. L’approbation par le responsable de département ou de majeure est nécessaire pour la publication de vos résultats.</p>
                                <p className="text-sm">Cette icône &#x22EF; est affichée sur les éléments pour lesquels vous n'avez pas encore de résultat ou avez des résultats non approuvés.</p>
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="semester" className="block text-sm font-medium mb-1">Semestre</label>
                        <select id="semester" value={semester} onChange={handleSemesterChange} className="w-48 p-2 border border-gray-300 rounded-md">
                            <option value="2023-2024 - S6">2023-2024 - S6</option>
                            <option value="2023-2024 - S5">2023-2024 - S5</option>
                        </select>
                    </div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="p-2  text-left">UE</th>
                                <th className="p-2 text-left">Module</th>
                                <th className="p-2 text-left">Type</th>
                                <th className="p-2 text-left">Coef</th>
                                <th className="p-2 text-left">Résultat</th>
                                <th className="p-2 text-left">Moyenne</th>
                                <th className="p-2 text-left">Crédit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderNoteGroups(data[semester])}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReleveNoteScreen;
