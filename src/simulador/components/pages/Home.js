import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BgSlider1 from "simulador/assets/slider-01.jpg";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import VideoBeach from "simulador/assets/BeachSunset.mp4";

import Hero from "simulador/components/molecules/Hero";
import {Heading} from "simulador/components/atoms/Heading";
import Button from "simulador/components/atoms/Button";
import Feature from "simulador/components/atoms/Feature";
import Grid from "simulador/components/atoms/Grid";
import Section from "simulador/components/molecules/Section";
import MyFooter from "simulador/components/organisms/MyFooter";
import ProductGrid from "simulador/components/organisms/ProductGrid";
import Accordion, {AccordionGroup} from "simulador/components/atoms/Accordion";

import ProductType from "simulador/models/types/ProductType";

function Home({products}) {
    return (
      <>
        <Hero image={BgSlider1} /*title={<span>Ganha sua <strong>liberdade</strong><br /> para ir e ver</span>} */> 
          <Heading>
            <h1>Ganha sua <strong>liberdade</strong><br /> para ir e ver</h1>
          </Heading>
          <ul>
            <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
            <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
            <li>Mollit labore aliqua sunt esse Lorem aliquip et cupidatat est elit excepteur aliqua.</li>
          </ul>
          <Button variant="outlined" color="primary">Matricule-se agora</Button>
        </Hero>
        <Section>
          <Grid sm={2} md={3} lg={4} xl={5}>
            <Feature title="Maior e Melhor frota" icon={<FaCar />}>
              <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
            </Feature>
            <Feature title="Habilitação mais rapida" icon={<FaKey />}>
              <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
            </Feature>
            <Feature title="Excelente localização" icon={<FaMapMarkedAlt />}>
              <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
            </Feature>
            <Feature title="Acessibilidade" icon={<FaAccessibleIcon />}>
              <p>Ex elit officia laboris nulla quis consectetur commodo.</p>
            </Feature>
          </Grid>
        </Section>
        <Section inverse>
          <Heading>
            <h2>Conheça nossos serviços</h2>
          </Heading>
          <ProductGrid
            products={products}
          ></ProductGrid>
        </Section>
        <Section>
          <Grid md={2}>
            <div>
              <Heading>
                <h2>Matheus Autho escola</h2>
              </Heading>
              <p>
                Nisi deserunt adipisicing labore labore fugiat eiusmod elit incididunt aliqua quis reprehenderit dolor.
              </p>
              <div>
                <Button as={Link} to="/Sobre" color="primary">Saiba mais</Button>
              </div>
            </div>
            <div>
              <video src={VideoBeach} width="100%" autoPlay playsInline muted loop />
            </div>
          </Grid>

        </Section>
        <Section inverse>
          <Heading>
            <h2>Duvidas recorrentes</h2>
          </Heading>
          <AccordionGroup>
            <Accordion title="Como eu renovo minha CNH?">
              Do est aliquip magna anim commodo ullamco non laborum ea.
            </Accordion>
            <Accordion title="Como faço para mudar de categoria">
              Do est aliquip magna anim commodo ullamco non laborum ea.
            </Accordion>
            <Accordion title="Fui multado e agora?">
              Do est aliquip magna anim commodo ullamco non laborum ea.
            </Accordion>
          </AccordionGroup>
        </Section>
        <MyFooter />
      </>
      
    );
}

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    ProductType
  )
};

export default Home;
