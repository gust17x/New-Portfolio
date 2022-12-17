import img from '../../img/caverinha-deb.png'
import '../Sass/styles.sass'
const Home = ({homePage}) => {
  return (

    <div className="App">
      
    <section class="container">
      <h1 class="container-name">Gustavo silva</h1>

      <div class="content">

         <img src={img} alt="Gustavo silva" />

          <h2 class="infor-dev">Desenvolvedor front end</h2>

          <nav class="social-media">
              <a href="https://www.linkedin.com/in/gustavo-silva-04aa87241/"  class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/gust17x" class="github"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/gust_dz7/" class="insta"><i class="fa-brands fa-instagram"></i></a>
          </nav>

          <figure class="contato">
              <nav class="contato-phone">
                  <i class="fa-solid fa-phone"></i>
                  <div class="">
                      <p class="phone-text">Telefone/whatsapp</p>
                      <h3 class="phone-number">(38) 991056888</h3>
                  </div>
                  
              </nav>

              <nav class="contato-email">
                  <i class="fa-solid fa-envelope"></i>
                  <div class="">
                      <p class="email-text">Gmail</p>
                      <h3 class="email-endereço">gusilva2810@gmail.com</h3>
                  </div>
                  
              </nav>

              <nav class="contato-localizacao">
                  <i class="fa-solid fa-location-dot"></i>
                  <div class="">
                      <p class="contato-text">Localização</p>
                      <h3 class="contato-localizacao">Janauba / MG</h3>
                  </div>
                 
              </nav>

          </figure>

          <a href="https://docs.google.com/document/d/1AR24TWX_4RQkQh_-JkLddpRYAecxLnlx_s4zD3U-Wek/edit" class="download-curriculo">Download curriculo <i class="fa-solid fa-file-arrow-down"></i> </a>

      </div>

      <div class="infors">
          <figure class="about-container">
              <h1 class="about-title">Sobre</h1>
              <p class="about-text">Comecei a programa á um ano e meio, assistindo <a href="https://www.youtube.com/@CursoemVideo">video aula no yotube</a> e desenvolvendo pequenos projetos com html, css e js, des de então so fui avançando, aprendendo e aplicando, conhecendo novas linguagens e progredindo. <br /> <br /> Agora desejo entra na area de programação web como desenvolvedor front-end e com isso progredir ainda mais na área.</p>
          </figure>

          <figure class="tecnologias-container">
              <h1 class="tecnologias-title">Tecnologias</h1>

              <div class="tecnologias-grid">
                  <nav class="tecnology-card html">
                      <i class="fa-brands fa-html5"></i>
                      <h3 class="tecnology-title">Html</h3>
                  </nav>

                  <nav class="tecnology-card css">
                      <i class="fa-brands fa-css3-alt"></i>
                      <h3 class="tecnology-title">Css</h3>
                  </nav>

                  <nav class="tecnology-card javascript">
                      <i class="fa-brands fa-square-js"></i>
                      <h3 class="tecnology-title">Java Script</h3>
                  </nav>

                  <nav class="tecnology-card git">
                      <i class="fa-brands fa-git"></i>
                      <h3 class="tecnology-title">Git</h3>
                  </nav>

                  <nav class="tecnology-card react">
                      <i class="fa-brands fa-react"></i>
                      <h3 class="tecnology-title">React</h3>
                  </nav>

                  <nav class="tecnology-card sass">
                      <i class="fa-brands fa-sass"></i>
                      <h3 class="tecnology-title">Sass</h3>
                  </nav>

                  <nav class="tecnology-card node">
                      <i class="fa-brands fa-node"></i>
                      <h3 class="tecnology-title">Node (basico)</h3>
                  </nav>
              </div>

          </figure>

          <figure class="cursos-container">
              <h1>Cursos</h1>

              <ul>
                    <li> <i class="fa-solid fa-chalkboard-user"></i>  Curso Grátis de JavaScript e ECMAScript para Iniciantes</li>
                    <li> <i class="fa-solid fa-chalkboard-user"></i>  Curso de SASS e SCSS do básico ao avançado + Projetos</li>
                    <li> <i class="fa-solid fa-chalkboard-user"></i> React do Zero a Maestria (c/ hooks, router, API, Projetos) </li>
                    <li> <i class="fa-solid fa-chalkboard-user"></i> Curso de JavaScript e TypeScript do básico ao avançado </li>
              </ul>
          </figure>

          <figure class="projetos-container">
              <h1 class="projetos-title">Projetos</h1>
              <p class="projetos-text">Atualmente estou criando alguns projetos, sempre que crio um projeto novo, atualizo aqui</p>

              
               <button onClick={homePage} class="link-portfolio">Projetos</button>
          </figure>
         
      </div>
      <script src="../js/script.js" ></script>
  </section>
  </div>

  )
}

export default Home