import React from 'react';
import './App.css';
import menu from './list.png';
function App() {
  return (
  <div className="App">
      <div className='cabeçalho'>
      <nav>
        <div className='logo'><img src='https://1000marcas.net/wp-content/uploads/2022/07/Demon-Slayer-Logo-2048x1152.png' alt='logo' style={{height : 40}}/></div>
          <div>sobre nós</div>
          <div>contato</div>
         <div> central de ajuda</div>
           <div> <img src={menu} alt='logo' style={{height : 20}}/></div>

       
       </nav>
      </div>
     <main>
      <>
    <h1>NOVA TEMPORADA DE DEMON SLAYER È ANUNCIADA</h1>
    <p>não é de hoje que os fãs de kimestu no yaiba estão totalmente ansiosos pela nova temporada do anime, a temporada está prevista para chegar dia 23 de abril de 2023 dita pelo estudio Ufotable, nesta temporada estará sendo abordada o arco do Vilarejo dos ferreiros onde tanjiro kamado vá em busca de uma nova espada mas se depara com dois onis superiores que são criaturas extremamente fortes ranqueadas pelo o rei dos onis vulgo Muzan, mas tanjiro kamado não está nessa sozinho...ele conta com ajuda de Mitsuri Kanroji a pilar do amor, e Muichiro Tokito, pilar da névoa.</p>
    <p>foi revelado um novo trailer da terceira temporada. confira:</p>
    </>
    
     <div className='conteudo'>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/yVYZ4gQY1jw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
     <h2>em breve mais novidades...</h2>
     </main>
     <footer>
     <div className='final'><p>feito por Gabriel Oliveira</p></div>
     </footer>
     
    </div>
  );
}

export default App;
