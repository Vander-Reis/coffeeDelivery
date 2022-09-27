import { CheckoutContainer } from "./styles";
import { Form } from "./components/Form";
import { CoffeeSelected } from "./components/CoffeeSelected/index";
import { Payment } from "./components/Payment";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContex";

enum PaymentMethods {
    "Cartão de Credito" = "Cartão de Credito",
    "Cartão de Débito" = "Cartão de Débito",
    "Dinheiro" = "Dinheiro",
}

const newAddressFormValidateSchema = zod.object({
    cep: zod.string().min(8, "Informe um Cep"),
    street: zod.string().min(1, "Informe a sua Rua"),
    number: zod.string().min(1, "Informe o seu Número"),
    district: zod.string().min(1, "Informe o seu Bairro"),
    city: zod.string().min(1, "Informe a sua Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    payment: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        },
    }),
});

export type NewAddressFormDate = zod.infer<typeof newAddressFormValidateSchema>;

export function Checkout() {
    const newAddress = useForm<NewAddressFormDate>({
        resolver: zodResolver(newAddressFormValidateSchema),
        defaultValues: {
            cep: "38160000",
            city: "Nova ponte",
            uf: "MG",
        },
    });

    const { handleSubmit } = newAddress;

    const navigate = useNavigate();

    const { cleanCart } = useContext(CartContext)

    function handleSucess(data: NewAddressFormDate) {
        navigate("/sucess", {
            state: data,
        });

        cleanCart()
    }

    return (
        <FormProvider {...newAddress}>
            <form onSubmit={handleSubmit(handleSucess)}>
                <CheckoutContainer>
                    <div>
                        <h2>Complete seu pedido</h2>
                        <Form />
                        <Payment />
                    </div>
                    <div>
                        <h2>Cafés selecionados</h2>
                        <CoffeeSelected />
                    </div>
                </CheckoutContainer>
            </form>
        </FormProvider>
    );
}
