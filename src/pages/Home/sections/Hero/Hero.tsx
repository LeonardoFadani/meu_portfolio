import { styled } from "@mui/material/styles";


const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
    }));

  return (
    <>
      <StyledHero>
        Olá, eu sou o Leonardo Fadani
      </StyledHero>
    </>
  )
}

export default  Hero
