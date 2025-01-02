import React from 'react';
import { Parallax } from 'react-parallax';
import Me from '../assets/me.jpg';

const About = () => {
  return (
    <Parallax strength={500}>
      <div className="h-screen grid grid-cols-2 items-center bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300">
        {/* Seção da Imagem */}
        <div
          className="flex items-center justify-center"
          data-aos="fade-left" // Animação AOS para saída pela esquerda
        >
          <img
            className="w-[40%] rounded shadow-2xl border border-white/10"
            src={Me}
            alt="It's me!"
          />
        </div>

        {/* Seção de Texto */}
        <div
          className="flex items-center justify-center rounded p-10 font-medium bg-gray-200 backdrop-blur border border-white/30 text-gray-900 shadow-2xl"
          data-aos="fade-right" // Animação AOS para saída pela direita
        >
          <p>
            Olá, eu sou Yuri Piaza, tenho 27 anos e sou estudante de Desenvolvimento Web, apaixonado por criar interfaces modernas e funcionais. Trabalho com HTML, CSS, JavaScript, Typescript, React e Tailwind CSS, focando em transformar ideias em experiências digitais atraentes, eficientes e responsivas. Estou sempre em busca de novos desafios para evoluir minhas habilidades em frontend e entregar soluções inovadoras, priorizando a experiência do usuário.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
