import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useProduct } from "../../../hooks/useProduct";
import { TProductCreateData, productCreateSchema } from "../../../validators/productValidator";
import { StyledCreateProductForm } from "./style";


export const CreateProducttForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TProductCreateData>({
    resolver: zodResolver(productCreateSchema),
  });

  const { productCreate } = useProduct();

  const submit = (data: TProductCreateData) => {
    productCreate(data);
    reset()
  };

  return (
    <StyledCreateProductForm>
      <h3>Adicionar Produto</h3>
      <form onSubmit={handleSubmit(submit)}>
        <section>
          <div>
            <label htmlFor="code">Código</label>
            <input
              type="number"
              id="code"
              placeholder="Digite o código..."
              {...register("code")}
            />
            {errors.code?.message && <p>{errors.code?.message}</p>}
          </div>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite o nome..."
              {...register("name")}
            />
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </div>
        </section>
        <section>

        </section>
        <button className="btnForm" type="submit">
          ADICIONAR
        </button>
      </form>
    </StyledCreateProductForm>
  );
};
