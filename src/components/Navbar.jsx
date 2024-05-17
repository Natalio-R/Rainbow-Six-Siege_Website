import React from "react";

const Navbar = () => {
  return (
    <div className="siteNavigation">
      <div className="siteNavigation__container">
        <div class="siteNavigation__hamburgerContainer">
          <button
            aria-label="Abrir menú"
            class="siteNavigation__hamburgerContainer__button"
            type="button"
          >
            <div class="top"></div>
            <div class="middle"></div>
            <div class="bottom"></div>
          </button>
        </div>
        <div class="siteNavigation__logo">
          <a class="siteNavigation__logo__btn" href="#">
            <img
              class="image"
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/091866f359c3e7e84b7441875bad7feb/r6s-logo-ww.png"
              alt=""
              loading="lazy"
            />
          </a>
        </div>
        <div className="siteNavigation__main">
          <nav>
            <div class="siteNavigation__main--mobile">
              <button
                aria-label="Atrás"
                class="siteNavigation__main__backBtn--mobile"
                data-innertext="Atrás"
                type="button"
              >
                <span
                  data-source="translations"
                  data-innertext="Atrás"
                  aria-label="Atrás"
                >
                  Atrás
                </span>
                <svg
                  class="icon icon-arrow-left"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 19 30"
                  role="img"
                  aria-label="Flecha hacia la izquierda"
                >
                  <title>Arrow Left</title>
                  <desc>Black arrow pointing left</desc>
                  <path d="M15,30L0,15L15,0l4,4L8,15l11,11L15,30z"></path>
                </svg>
              </button>
            </div>
            <div class="siteNavigation__drawers">
              <div class="siteNavigation__drawers__lastButton--mobile"></div>
              <div class="siteNavigation__nav-item is-drawer" data-id="1">
                <button
                  aria-expanded="false"
                  aria-controls="drawer-1"
                  aria-label="Noticias"
                  class="siteNavigation__nav-item__drawerName"
                  data-innertext="Noticias"
                  type="button"
                >
                  <span class="text" data-innertext="Noticias">
                    Noticias
                  </span>
                </button>
                <div
                  class="siteNavigation__nav-item__drawer"
                  id="drawer-1"
                  drawer-items="4"
                >
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="ULTIMAS NOTICIAS"
                    class="siteNavigation__nav-item"
                    data-innertext="ULTIMAS NOTICIAS"
                    href="#"
                  >
                    <span class="text" data-innertext="ULTIMAS NOTICIAS">
                      ULTIMAS NOTICIAS
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Temporadas"
                    class="siteNavigation__nav-item"
                    data-innertext="Temporadas"
                    href="#"
                  >
                    <span
                      class="text"
                      data-innertext="Temporadas"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Temporadas
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Roadmap (Ingl.)"
                    class="siteNavigation__nav-item"
                    data-innertext="Roadmap (Ingl.)"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/game-info/roadmap"
                  >
                    <span
                      class="text"
                      data-innertext="Roadmap (Ingl.)"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Roadmap (Ingl.)
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Protección de jugadores"
                    class="siteNavigation__nav-item"
                    data-innertext="Protección de jugadores"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/player-protection"
                  >
                    <span
                      class="text"
                      data-innertext="Protección de jugadores"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Protección de jugadores
                    </span>
                  </a>
                </div>
              </div>
              <div class="siteNavigation__nav-item is-drawer" data-id="2">
                <button
                  aria-expanded="false"
                  aria-controls="drawer-2"
                  aria-label="Juego"
                  class="siteNavigation__nav-item__drawerName"
                  data-innertext="Juego"
                  data-ccm-m="buttonMaster"
                  type="button"
                >
                  <span
                    class="text"
                    data-innertext="Juego"
                    data-ccm-l="button"
                    data-ccf-l="buttonText"
                  >
                    Juego
                  </span>
                </button>
                <div
                  class="siteNavigation__nav-item__drawer"
                  id="drawer-2"
                  drawer-items="5"
                >
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Descubre"
                    class="siteNavigation__nav-item"
                    data-innertext="Descubre"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/game-info/discover"
                  >
                    <span
                      class="text"
                      data-innertext="Descubre"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Descubre
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Aprende"
                    class="siteNavigation__nav-item"
                    data-innertext="Aprende"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/game-info"
                  >
                    <span
                      class="text"
                      data-innertext="Aprende"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Aprende
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Agentes"
                    class="siteNavigation__nav-item"
                    data-innertext="Agentes"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/game-info/operators"
                  >
                    <span
                      class="text"
                      data-innertext="Agentes"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Agentes
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Mapas"
                    class="siteNavigation__nav-item"
                    data-innertext="Mapas"
                    href="#"
                  >
                    <span class="text" data-innertext="Mapas">
                      Mapas
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Multimedia"
                    class="siteNavigation__nav-item"
                    data-innertext="Multimedia"
                    href="#"
                  >
                    <span class="text" data-innertext="Multimedia">
                      Multimedia
                    </span>
                  </a>
                </div>
              </div>
              <a
                tabindex="0"
                aria-hidden="false"
                aria-label="Battle Pass"
                class="siteNavigation__nav-item"
                data-innertext="Battle Pass"
                data-ccm-m="buttonMaster"
                href="/es-es/game/rainbow-six/siege/game-info/battlepass"
              >
                <span
                  class="text"
                  data-innertext="Battle Pass"
                  data-ccm-l="button"
                  data-ccf-l="buttonText"
                >
                  Battle Pass
                </span>
              </a>
              <a
                tabindex="0"
                aria-hidden="false"
                aria-label="Esports"
                class="siteNavigation__nav-item external"
                data-innertext="Esports"
                data-ccm-m="buttonMaster"
                href="https://www.ubisoft.com/es-es/esports/rainbow-six/siege"
                target="blank"
                rel="noreferrer noopener "
              >
                <span
                  class="text"
                  data-innertext="Esports"
                  data-ccm-l="button"
                  data-ccf-l="buttonText"
                >
                  Esports
                </span>
              </a>
              <div class="siteNavigation__nav-item is-drawer" data-id="29">
                <button
                  aria-expanded="false"
                  aria-controls="drawer-29"
                  aria-label="Comunidad"
                  class="siteNavigation__nav-item__drawerName"
                  data-innertext="Comunidad"
                  data-ccm-m="buttonMaster"
                  type="button"
                >
                  <span
                    class="text"
                    data-innertext="Comunidad"
                    data-ccm-l="button"
                    data-ccf-l="buttonText"
                  >
                    Comunidad
                  </span>
                  <svg
                    class="icon icon-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 19 30"
                    role="img"
                    aria-label="Flecha hacia la derecha"
                  >
                    <title>Arrow Right</title>
                    <desc>Black arrow pointing right</desc>
                    <path d="M4,0l15,15L4,30l-4-4l11-11L0,4L4,0z"></path>
                  </svg>
                </button>
                <div
                  class="siteNavigation__nav-item__drawer"
                  id="drawer-29"
                  drawer-items="3"
                >
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Programa de creadores"
                    class="siteNavigation__nav-item"
                    data-innertext="Programa de creadores"
                    data-ccm-m="buttonMaster"
                    href="/es-es/game/rainbow-six/siege/community/creators-program"
                  >
                    <span
                      class="text"
                      data-innertext="Programa de creadores"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Programa de creadores
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Gameplan"
                    class="siteNavigation__nav-item external"
                    data-innertext="Gameplan"
                    data-ccm-m="buttonMaster"
                    href="https://www.ubisoft.com/es-es/help/gameplan/rainbow-six-siege"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="Gameplan"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Gameplan
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="R6Fix"
                    class="siteNavigation__nav-item external"
                    data-innertext="R6Fix"
                    data-ccm-m="buttonMaster"
                    href="https://r6fix.ubi.com/"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="R6Fix"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      R6Fix
                    </span>
                  </a>
                </div>
              </div>
              <div class="siteNavigation__nav-item is-drawer" data-id="30">
                <button
                  aria-expanded="false"
                  aria-controls="drawer-30"
                  aria-label="Servicios"
                  class="siteNavigation__nav-item__drawerName"
                  data-innertext="Servicios"
                  data-ccm-m="buttonMaster"
                  type="button"
                >
                  <span
                    class="text"
                    data-innertext="Servicios"
                    data-ccm-l="button"
                    data-ccf-l="buttonText"
                  >
                    Servicios
                  </span>
                  <svg
                    class="icon icon-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 19 30"
                    role="img"
                    aria-label="Flecha hacia la derecha"
                  >
                    <title>Arrow Right</title>
                    <desc>Black arrow pointing right</desc>
                    <path d="M4,0l15,15L4,30l-4-4l11-11L0,4L4,0z"></path>
                  </svg>
                </button>
                <div
                  class="siteNavigation__nav-item__drawer"
                  id="drawer-30"
                  drawer-items="4"
                >
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Mi perfil"
                    class="siteNavigation__nav-item external"
                    data-innertext="Mi perfil"
                    data-ccm-m="buttonMaster"
                    href="https://www.ubisoft.com/es-es/game/rainbow-six/siege/stats"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="Mi perfil"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Mi perfil
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Soporte"
                    class="siteNavigation__nav-item external"
                    data-innertext="Soporte"
                    data-ccm-m="buttonMaster"
                    href="https://support.ubi.com/Games/2559"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="Soporte"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Soporte
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Estado del servicio"
                    class="siteNavigation__nav-item external"
                    data-innertext="Estado del servicio"
                    data-ccm-m="buttonMaster"
                    href="https://rainbow6.ubisoft.com/status/"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="Estado del servicio"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Estado del servicio
                    </span>
                  </a>
                  <a
                    tabindex="-1"
                    aria-hidden="true"
                    aria-label="Registro en el servidor de pruebas"
                    class="siteNavigation__nav-item external"
                    data-innertext="Registro en el servidor de pruebas"
                    data-ccm-m="buttonMaster"
                    href="https://register.ubisoft.com/r6-test-server"
                    target="blank"
                    rel="noreferrer noopener "
                  >
                    <span
                      class="text"
                      data-innertext="Registro en el servidor de pruebas"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Registro en el servidor de pruebas
                    </span>
                  </a>
                </div>
              </div>
              <a
                tabindex="0"
                aria-hidden="false"
                aria-label="Marketplace"
                class="siteNavigation__nav-item"
                data-innertext="Marketplace"
                data-ccm-m="buttonMaster"
                href="/es-es/game/rainbow-six/siege/marketplace"
              >
                <span
                  class="text"
                  data-innertext="Marketplace"
                  data-ccm-l="button"
                  data-ccf-l="buttonText"
                >
                  Marketplace
                </span>
              </a>
              <div class="siteNavigation__drawers__buttons--mobile">
                <div class="siteNavigation__nav-item is-drawer" data-id="1">
                  <button
                    aria-expanded="false"
                    aria-controls="drawer-1"
                    aria-label="Comprar ahora"
                    class="siteNavigation__nav-item__drawerName"
                    data-innertext="Comprar ahora"
                    data-ccm-m="buttonMaster"
                    type="button"
                  >
                    <span
                      class="text"
                      data-innertext="Comprar ahora"
                      data-ccm-l="button"
                      data-ccf-l="buttonText"
                    >
                      Comprar ahora
                    </span>
                  </button>
                  <div
                    class="siteNavigation__nav-item__drawer"
                    id="drawer-1"
                    drawer-items="3"
                  >
                    <a
                      tabindex="-1"
                      aria-hidden="true"
                      aria-label="El juego"
                      class="siteNavigation__nav-item external"
                      data-innertext="El juego"
                      data-ccm-m="buttonMaster"
                      href="https://store.ubisoft.com/es/tom-clancy-s-rainbow-six-siege/56c494ad88a7e300458b4d5a.html"
                      target="blank"
                      rel="noreferrer noopener "
                    >
                      <span
                        class="text"
                        data-innertext="El juego"
                        data-ccm-l="button"
                        data-ccf-l="buttonText"
                      >
                        El juego
                      </span>
                    </a>
                    <a
                      tabindex="-1"
                      aria-hidden="true"
                      aria-label="Elementos en el juego"
                      class="siteNavigation__nav-item"
                      data-innertext="Elementos en el juego"
                      data-ccm-m="buttonMaster"
                      href="/es-es/game/rainbow-six/siege/in-game-items"
                    >
                      <span
                        class="text"
                        data-innertext="Elementos en el juego"
                        data-ccm-l="button"
                        data-ccf-l="buttonText"
                      >
                        Elementos en el juego
                      </span>
                    </a>
                    <a
                      tabindex="-1"
                      aria-hidden="true"
                      aria-label="Créditos R6"
                      class="siteNavigation__nav-item"
                      data-innertext="Créditos R6"
                      data-ccm-m="buttonMaster"
                      href="/es-es/game/rainbow-six/siege/in-game-items#1y2RmRF1KdyLFE9CwkxLLy"
                    >
                      <span
                        class="text"
                        data-innertext="Créditos R6"
                        data-ccm-l="button"
                        data-ccf-l="buttonText"
                      >
                        Créditos R6
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="siteNavigation__buttons"></div>
      </div>
    </div>
  );
};

export default Navbar;
