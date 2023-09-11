import { useForm } from "react-hook-form";
import "./UserForm.css";

const UserForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="user-form__title">
        {" "}
        {initialData ? "Editar Usuario" : "Nuevo usuario"}
      </h2>
      <button
        type="button"
        className="user-form__close-btn"
        onClick={() => onClose()}
      >
        X
      </button>

      <div className="user-form__inputs">
        <div className="user-form__input-container">
          <label htmlFor="nameId" className="user-form__label">
            Primer nombre
          </label>
          <input
            type="text"
            name=""
            placeholder="Felipe"
            id="nameId"
            {...register("first_name")}
          />
        </div>

        <div className="user-form__input-container">
          <label htmlFor="lastNameId" className="user-form__label">
            Apellido
          </label>
          <input
            type="text"
            name=""
            placeholder="Alarcón"
            id="lastNameId"
            {...register("last_name")}
          />
        </div>

        <div className="user-form__input-container">
          <label htmlFor="emailId" className="user-form__label">
            Correo electrónico
          </label>
          <input
            type="email"
            name=""
            placeholder="example@mail.com"
            id="emailId"
            {...register("email")}
          />
        </div>

        <div className="user-form__input-container">
          <label htmlFor="passwordId" className="user-form__label">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="xxxxxxxx"
            id="passwordId"
            {...register("password")}
          />
        </div>

        <div className="user-form__input-container">
          <label htmlFor="birthdayId" className="user-form__label">
            Cumpleaños
          </label>
          <input type="date" id="birthdayId" {...register("birthday")} />
        </div>
      </div>

      <button type="submit" className="user-form__submit">
        {initialData ? "Guardar cambios" : "Agregar nuevo usuario"}
      </button>
    </form>
  );
};

export default UserForm;
