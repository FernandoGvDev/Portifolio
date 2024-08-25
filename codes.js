//voltar ao tpo
document.querySelector('.voltar-topo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//menu no celular
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // Mostra ou esconde o menu
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show'); // Esconde o menu quando um link é clicado
        });
    });
});

//model de descrição de serviço

// Função que abre o modal
function SaibaMais(servico) {
    // Obtenha o modal
    var modal = document.getElementById("myModal");

    // Defina o título e a descrição do modal com base no serviço clicado
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");

    switch (servico) {
        case 'Design Gráfico':
            modalTitle.textContent = "Design Gráfico";
            modalDescription.textContent = "Ofereço um serviço completo de Design Gráfico, focado em criar soluções visuais que fortalecem a identidade da sua marca e capturam a essência do seu negócio. Desde a criação de logotipos que representam os valores e a personalidade da sua empresa, até o desenvolvimento de materiais de marketing como cartões de visita, flyers, banners, e muito mais, estou comprometido em ajudar sua marca a se destacar no mercado. Além disso, trabalho na concepção de identidade visual completa, incluindo a escolha de cores, tipografia e outros elementos visuais que garantem consistência e reconhecimento instantâneo em todos os pontos de contato com seu público. Meu objetivo é criar designs que não apenas sejam visualmente atraentes, mas que também transmitam a mensagem certa e deixem uma impressão duradoura. Se você está lançando uma nova marca ou deseja revitalizar a imagem da sua empresa, posso ajudá-lo a criar um design único que comunica seu propósito e diferencia você dos concorrentes. Cada projeto é personalizado para atender às suas necessidades específicas, garantindo que o resultado final seja tanto estético quanto funcional.";
            break;
        case 'Desenvolvimento Web':
            modalTitle.textContent = "Desenvolvimento Web";
            modalDescription.textContent = "Ofereço serviços de Desenvolvimento Web, criando sites responsivos e aplicações web com foco na experiência do usuário. Cada projeto é planejado para ser visualmente atraente, intuitivo e funcional em todos os dispositivos. Utilizo as melhores práticas em SEO, performance e segurança para garantir que seu site atraia e converta visitantes em clientes. Seja para um site institucional, uma loja virtual ou uma aplicação personalizada, estou pronto para transformar suas ideias em realidade, usando as tecnologias mais modernas e alinhadas com as tendências do mercado.";
            break;
        case 'Criação de Conteúdo':
            modalTitle.textContent = "Criação de Conteúdo";
            modalDescription.textContent = "Especializo-me na produção de conteúdo estratégico e envolvente, incluindo artigos, posts para redes sociais e textos otimizados para SEO. Meu objetivo é criar conteúdo que não só capte a atenção do seu público, mas também melhore sua visibilidade online e gere engajamento. Cada peça de conteúdo é desenvolvida com base em pesquisa e análise, garantindo relevância e impacto. Com foco na qualidade e na otimização, ajudo a fortalecer a presença digital da sua marca e a alcançar seus objetivos de marketing.";
            break;
        case 'Gerenciamento de Estoque':
            modalTitle.textContent = "Gerenciamento de Estoque";
            modalDescription.textContent = "Ofereço um software de gestão de depósitos que proporciona controle total sobre seu estoque, com rastreamento em tempo real e funcionalidades avançadas para gerenciar entradas e saídas de produtos. Meu sistema permite uma visão detalhada e atualizada do seu inventário, facilitando o monitoramento de níveis de estoque, a automação de processos e a geração de relatórios precisos. Ideal para otimizar a eficiência operacional e reduzir erros, garantindo que você tenha sempre a quantidade certa de produtos disponíveis para atender às demandas do seu negócio.";
            break;
        case 'Suporte Técnico':
            modalTitle.textContent = "Suporte Técnico";
            modalDescription.textContent = "Ofereço assistência e manutenção especializada para sistemas e aplicações, assegurando um funcionamento contínuo e eficiente. Meu serviço inclui diagnóstico e resolução de problemas, atualizações de software, e suporte técnico proativo para prevenir falhas. Com foco na estabilidade e performance, garanto que seus sistemas funcionem adequadamente e com o mínimo de interrupções, proporcionando soluções rápidas e eficazes para manter suas operações funcionando sem problemas.";
            break;
        default:
            modalTitle.textContent = "";
            modalDescription.textContent = "";
            break;
    }

    // Exiba o modal
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fechar o modal ao clicar no "X"
document.querySelector(".close").addEventListener("click", closeModal);

// Fechar o modal ao clicar fora da área de conteúdo
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
});

