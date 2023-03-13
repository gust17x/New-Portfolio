// imgs
// import gallery from '../../img/envioEmail.png'
import survivalSland from '../../new-survivalsland 2023-03-13 132540.png'
import SiteRelogio from '../../img/SITE RELOGIO.png'
import TaskList from '../../img/TaskList.png'
import EnvEmail from '../../img/envioEmail.png'
import '../Sass/projects.sass'

export const Projects = ({projectPage}) => {
  return (
    <section className="projects-container">

        <nav className='menu'>
            <h1>Projetos</h1>
        </nav>

        <div className="projects">
            
          <div className="box">
             {/* <img src={gallery} alt="imagem do site gallery" />  */}
             <figure className='box-infor'>
                
                <nav>
                  <h2 className='infor-title'>Gallery</h2>
                  <p className='infor-text'>Site de galeria simples com display grid</p>
                </nav>
                  <a className='btn-to-project' target={'_blank'} href='https://gallery-taupe.vercel.app/'>Ver projeto</a>

             </figure>
          </div>
          <div className="box">
            <img src={survivalSland} alt="imagem do site survival sland" />
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>Survival sland</h2>
                <p className='infor-text'>Site de um jogo que fiz pra um trabalho escolar</p>
                </nav>

                <a className='btn-to-project' target={'_blank'} href='https://survival-sland.vercel.app/'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <img src={TaskList} alt="" />
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>TaskList </h2>
                <p className='infor-text'> <span className='span-infor'>Uma lista de tarefas pra me organizar melhor</span> </p>
                </nav>

                <a className='btn-to-project' href='https://gust17x.github.io/task-list/'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <img src={SiteRelogio} alt="Imagem do site relogio" />
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>Relogio</h2>
                <p className='infor-text'><span className='span-infor'>Um relogio in live</span></p>
                </nav>

                <a className='btn-to-project' href='https://gust17x.github.io/Relogio/'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <img src={EnvEmail} alt="Imagem do site .env" />
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'>.env</h2>
                <p className='infor-text'><span className='span-infor'>Site que te envia um email com as informaçõe que vc preencher</span></p>
                </nav>

                <a className='btn-to-project' href='https://env-seven.vercel.app/'>Ver projeto</a>
             </figure>
          </div>

          <div className="box">
            <figure className='box-infor'>
                <nav>
                <h2 className='infor-title'></h2>
                <p className='infor-text'><span className='span-infor'>Site que te envia um email com as informaçõe que vc preencher</span></p>
                </nav>

                <a className='btn-to-project' href='#'>Ver projeto</a>
             </figure>
          </div>

        </div>

        <div className='div-btn-voltar'><button onClick={projectPage} className="btn-voltar" >Voltar</button></div>
    </section>
  )
}
