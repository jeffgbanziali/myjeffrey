import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { useLocation } from 'react-router';

const Ecole = () => {
    const location = useLocation();
    const { user } = location.state;

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar user={user} />
            <div className='flex flex-col items-center p-4 bg-gray-100'>
                <h1 className='text-3xl md:text-4xl font-bold mt-6 text-center'>L'Histoire de l'Efrei</h1>
                <div className='max-w-4xl w-full mt-6'>
                    <section className='mb-8'>
                        <img src='https://www.efrei.fr/wp-content/uploads/2021/09/ecole-ingenieur-generaliste-paris-efrei-scaled.jpg' alt='Efrei' className='w-full h-auto rounded-lg shadow-md' />
                        <h2 className='text-2xl md:text-3xl font-semibold mt-4'>Présentation</h2>
                        <p className='mt-2 text-justify'>
                            L’Efrei, fondée en 1936, est une école d'ingénieurs généraliste en informatique et technologies du numérique située à Villejuif en région parisienne. Depuis sa création, l’Efrei a formé des milliers d’ingénieurs et continue d’être un acteur majeur dans le domaine de l’éducation supérieure en informatique.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Les débuts</h2>
                        <p className='mt-2 text-justify'>
                            L’Efrei a été créée en 1936 pour répondre aux besoins croissants en ingénieurs spécialisés dans l’électricité et la radioélectricité. À ses débuts, l’école se concentrait principalement sur ces domaines avant de s’élargir progressivement à d’autres champs de l’ingénierie.
                        </p>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRze6x3THD2PK9Lj4AhHypQgKuaZARpRrzQv0IfCMNsGNi7CgCb6BveHhspU4fEVaAdClo&usqp=CAU' alt='Débuts' className='w-full h-auto rounded-lg shadow-md mt-4' />
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Évolution et Innovation</h2>
                        <p className='mt-2 text-justify'>
                            Au fil des décennies, l’Efrei a constamment évolué pour s’adapter aux avancées technologiques et aux besoins du marché. L’école a su intégrer les nouvelles technologies dans ses programmes et proposer des formations en adéquation avec les exigences des entreprises.
                        </p>
                        <img src='https://www.efrei.fr/wp-content/uploads/2024/05/efrei-ecole-numerique.webp' alt='Évolution' className='w-full h-auto rounded-lg shadow-md mt-4' />
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Le Campus</h2>
                        <p className='mt-2 text-justify'>
                            Le campus de l’Efrei offre un environnement moderne et dynamique propice à l’apprentissage et à l’innovation. Il est doté d’équipements de pointe, de laboratoires high-tech, et d’espaces collaboratifs pour favoriser le travail en équipe et la créativité.
                        </p>
                        <img src='https://i.vimeocdn.com/video/1370367365-3ae03935ef9339dace0e8ec35785e42a2b8d00be68f0f74056c2fa53f0950881-d_640?f=webp' alt='Campus' className='w-full h-auto rounded-lg shadow-md mt-4' />
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Vie Étudiante</h2>
                        <p className='mt-2 text-justify'>
                            La vie étudiante à l’Efrei est riche et variée, avec de nombreuses associations, clubs et événements tout au long de l’année. Les étudiants peuvent s’engager dans des activités sportives, culturelles, et associatives, renforçant ainsi la cohésion et l’esprit d’équipe.
                        </p>
                        <img src='https://www.efrei.fr/wp-content/uploads/2022/01/JPO-01-22-6862.jpg' alt='Vie Étudiante' className='w-full h-auto rounded-lg shadow-md mt-4' />
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Partenariats et Réseaux</h2>
                        <p className='mt-2 text-justify'>
                            L’Efrei a tissé de nombreux partenariats avec des entreprises, des institutions académiques et des réseaux professionnels, offrant ainsi à ses étudiants des opportunités de stages, d’emplois, et d’échanges internationaux.
                        </p>
                        <img src='https://business-cool.com/wp-content/uploads/2024/03/Visuel-signature-Efrei-Excelia-1024x683.png' alt='Partenariats' className='w-full h-auto rounded-lg shadow-md mt-4' />
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl md:text-3xl font-semibold'>Témoignages d'Anciens Élèves</h2>
                        <p className='mt-2 text-justify'>
                            "L’Efrei m’a offert une formation de qualité et des opportunités professionnelles incroyables. Grâce à l’école, j’ai pu intégrer une entreprise de renom dès la fin de mes études."
                            <br />- Jean Dupont, promotion 2015
                        </p>
                        <p className='mt-2 text-justify'>
                            "Les années passées à l’Efrei ont été parmi les meilleures de ma vie. J’y ai acquis des compétences précieuses et me suis fait des amis pour la vie."
                            <br />- Marie Durand, promotion 2018
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Ecole;
