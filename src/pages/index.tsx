import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/pageTitle/PageTitle";
import UserInformation from "ui/components/data-display/user-information/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <TextFieldMask
        mask={"99.999-999"}
        label="Digite seu CEP"
        fullWidth
        variant={"outlined"}
      />

      <UserInformation
        name={"Brenda Cordeiro"}
        picture={"https://github.com/BrendaRodriguees.png"}
        rating={5}
        description={"Nova Lima"}
      />
    </div>
  );
};

export default Home;
