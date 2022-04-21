import { Box } from "@mui/material";
import "./home.css";
import { Menu } from "../../componentes/Menu/Menu.jsx";
import { Logo } from "../../componentes/Logo/Logo.jsx";
import { Destaques } from "../../componentes/Destaques/Destaques.jsx";
import { Vantagens } from "../../componentes/Vantagens/Vantagens.jsx";

export function Home() {
  return (
    <>
      {/* Menu */}

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          padding: "var(--padding-padrao)",
          width: "95%",
        }}
      >
        <Logo />
        <Menu />
      </Box>
      <Box component="main">
        
        {/* Destaques */}

        <Box>
          <Destaques
            titulo={"Um novo jeito de investir em criptos! "}
            order="0"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            }
            descricao={
              "  A Brocolli chegou para descomplicar o mundo das criptos. Aqui você vai ter acesso a centenas de criptomoedas e vai poder escolher aquela que melhor combina com seu perfil de investidor!"
            }
            imagem={"../../../assets/img/destaques-1.png"}
            alt="Imagem dos destaques-1"
          />
          <Destaques
            titulo={"Você no controle de tudo! "}
            order="1"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-credit-card-2-front"
                viewBox="0 0 16 16"
              >
                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
              </svg>
            }
            descricao={
              "Aqui você tem toda sua carteira detalhada e visualiza seus rendimentos de maneira simples!"
            }
            imagem={"../../../assets/img/destaques-2.png"}
            alt="Imagem dos destaques-2"
          />
          <Destaques
            titulo={"O mercado de criptomoedas se abre para você!  "}
            order="0"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>
            }
            descricao={
              "Considerado por muitos especialistas como o mercado mais promissor para o futuro, essa é sua oportunidade de obter grandes ganhos! A Brocolli tem a missão de facilitar o acesso das criptos para milhões de brasileiros!"
            }
            imagem={"../../../assets/img/destaques-3.png"}
            alt="Imagem dos destaques-3"
          />
        </Box>

        {/* Vantagens */}

        <Box
          className="d-flex justify-content-around mb-5"
          sx={{
            padding: "var(--padding-padrao)",
          }}
        >
          <Vantagens
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            }
            titulo="Taxa Zero"
            descricao="A Brocolli não cobra nenhum tipo de taxa durante a negociação dos ativos ofertados!"
          />

          <Vantagens
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-layers"
                viewBox="0 0 16 16"
              >
                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
              </svg>
            }
            titulo="Diversidade de ativos"
            descricao="Temos centenas de criptomoedas para serem negociadas. Essas atendem aos requisitos de todos os tipos de investidores. Do Conservador ao Arrojado, a Brocolli te oferece a melhor opção!"
          />

          <Vantagens
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-person-check"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fill-rule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            }
            titulo="Assessoria profissional"
            descricao="A equipe financeira da Brocolli conta com especialistas financeiros que possuem forte Track-Record no mercado e estão prontos para te auxiliar nessa jornada!"
          />
        </Box>

        {/* Footer */}

        <Box
          className="align-items-center d-flex flex-column justify-content-center mx-auto w-25"
          sx={{
            padding: "var(--padding-padrao)",
          }}
        >
          <img
            className="h-25 w-25"
            src="../../../assets/img/logo-copyright.png"
            alt="Logo de Copyright"
          />
            <p>©Brocolli</p>
            <p className="text-center">Direitos reservados</p>
        </Box>
      </Box>
    </>
  );
}
