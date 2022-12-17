// imgs
import gallery from '../../img/gallery.png'
import survivalSland from '../../img/Survival Sland.png'
import '../Sass/projects.sass'

export const Projects = ({projectPage}) => {
  return (
    <section className="projects-container">

        <nav className='menu'>
            <h1>Projetos</h1>
        </nav>

        <div className="projects">
            
          <div className="box">
             <img src={gallery} alt="imagem do site gallery" /> 
             <figure className='box-infor'>
                
                <nav>
                  <h2 className='infor-title'>Gallery</h2>
                  <p className='infor-text'>Site de galeria simples com display grid</p>
                </nav>
                  <a className='btn-to-project' target={'_blank'} href='https://gust17x.github.io/Gallery/'>Ver projeto</a>

             </figure>
          </div>
          <div className="box">
            <img src={survivalSland} alt="imagem do site survival sland" />
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>Survival sland</h2>
                <p className='infor-text'>Site de um jogo que fiz pra um trabalho escolar</p>
                </nav>

                <a className='btn-to-project' target={'_blank'} href='https://gust17x.github.io/Survival-Sland/'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>Tarefas </h2>
                <p className='infor-text'> <span className='span-infor'>disponivel em breve</span> </p>
                </nav>

                <a className='btn-to-project' href='#'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>Clone Netflix</h2>
                <p className='infor-text'><span className='span-infor'>disponivel em breve</span></p>
                </nav>

                <a className='btn-to-project' href='#'>Ver projeto</a>
             </figure>
          </div>

        </div>

        <div className='div-btn-voltar'><button onClick={projectPage} className="btn-voltar" >Voltar</button></div>
    </section>
  )
}
