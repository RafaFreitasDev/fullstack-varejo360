import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schemaRegister } from "../../validators/userValidator";
import { StyledRegister } from "./style";
import { useUser } from "../../hooks/useUser";
import { Switch } from "@mui/material";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegister),
  });

  const { userCreate, goToLogin, isDarkMode, setIsDarkMode } = useUser();

  return (
    <StyledRegister>
      <div className="darkMode">
        <h4>Dark Mode</h4>
        <Switch
          checked={isDarkMode}
          onChange={(event) => setIsDarkMode(event.target.checked)}
        />
      </div>
      <h1>Varejo360</h1>
      <h2>Cadastrar</h2>

      <form onSubmit={handleSubmit(userCreate)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome..."
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail..."
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha..."
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
        <button type="submit">CADASTRAR</button>
      </form>
      <div>
        <h3>Já possui uma conta?</h3>
        <span>
          <h3 onClick={() => goToLogin()}>Página de Login</h3>
        </span>
      </div>
    </StyledRegister>
  );
};
